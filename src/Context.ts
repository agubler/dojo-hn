import has from '@dojo/framework/has/has';
import { ArticleItem } from './interfaces';

export class Context {
	private _invalidator: () => void;
	private _route: string;

	articles?: ArticleItem[];
	item?: ArticleItem;
	category: string;
	page: number;
	itemId: string;
	count = 0;

	get route() {
		return this._route;
	}
	set route(route: string) {
		this._route = route;
		this._invalidator();
	}

	constructor(invalidator: () => void) {
		this._invalidator = invalidator;
	}

	public fetchStories = async (category: string, page: number, offset: number) => {
		const catKey = category === 'top' ? 'news' : category === 'new' ? 'newest' : category;
		if (this.page !== page || this.category !== category || this.route !== 'content') {
			this.page = page;
			this.category = category;
			this.route = 'content';
			this.articles = undefined;
			this._invalidator();
		}

		if (!has('build-time-render')) {
			const response = await fetch(`/hn/${catKey}?page=${page}&offset=${offset}`, { credentials: 'include' });
			const articles = await response.json();
			this.articles = this.articles ? [ ...this.articles, ...articles.items ] : articles.items;
			this.count = articles.count;
			this._invalidator();
		}
	}

	public async fetchItem(id: string) {
		this.item = undefined;
		this.itemId = id;
		this.route = 'comments';
		this._invalidator();
		if (!has('build-time-render')) {
			this.item = await fetch(`/hn/item/${id}`, { credentials: 'include' }).then(response => response.json());
			this._invalidator();
		}
	}
}
