import has from '@dojo/core/has';
import { Injector } from '@dojo/widget-core/Injector';
import { ArticleItem } from './interfaces';

export class Context extends Injector {
	private _articles?: ArticleItem[];
	private _item?: ArticleItem;

	private _category: string;
	private _page: number;
	private _itemId: string;

	constructor() {
		super({});
	}

	public async fetchStories(category: string, page: number) {
		const catKey = category === 'top' ? 'news' : category === 'new' ? 'newest' : category;
		this._page = page;
		this._category = category;
		this._articles = undefined;
		this.emit({ type: 'invalidate' });
		if (!has('build-time-render')) {
			this._articles = await fetch(`https://api.hackerwebapp.com/${catKey}?page=${page}`).then((response) => response.json());
		}
		this.emit({ type: 'invalidate' });
	}

	public async fetchItem(id: string) {
		this._item = undefined;
		this._itemId = id;
		if (!has('build-time-render')) {
			this._item = await fetch(`https://api.hackerwebapp.com/item/${id}`).then((response) => response.json());
		}
		this.emit({ type: 'invalidate' });
	}

	get() {
		return this;
	}

	get articles() {
		return this._articles;
	}

	get category() {
		return this._category;
	}

	get page() {
		return this._page;
	}

	get item() {
		return this._item;
	}

	get itemId() {
		return this._itemId;
	}
}
