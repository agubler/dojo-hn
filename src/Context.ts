import has from '@dojo/has/has';
import { ArticleItem } from './interfaces';

export class Context {
	private _invalidator: () => void;
	private _route: string;

	articles?: ArticleItem[];
	articlesInView?: ArticleItem[];
	item?: ArticleItem;
	category: string;
	page: number;
	itemId: string;

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

	public async fetchStories(category: string, page: number) {
		const catKey = category === 'top' ? 'news' : category === 'new' ? 'newest' : category;
		this.page = page;
		this.category = category;
		this.route = 'content';
		this.articles = undefined;
		this.articlesInView = undefined;
		this._invalidator();
		if (!has('build-time-render')) {
			const articles: any[] = await fetch(`/hn/${catKey}?page=${page}`, { credentials: 'include' }).then(response =>
				response.json()
			);
			this.articles = articles;
			this.articlesInView = articles.slice(0, 10);
		}
		this._invalidator();
	}

	public fetchArticles = () => {
		if (!has('build-time-render')) {
			this.articlesInView = this.articles!.slice(0, this.articlesInView!.length + 10);
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
		}
		this._invalidator();
	}
}
