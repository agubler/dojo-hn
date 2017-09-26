import { Injector } from '@dojo/widget-core/Injector';

const loadingData: { loading: boolean }[] = [];
for (let i = 0; i < 30; i++) {
	loadingData.push({ loading: true });
}

export class Context extends Injector {
	private _data: any[] = [ ...loadingData ];
	private _category: string;
	private _page: number;
	private _item: any;
	private _itemId: string;

	public async fetchStories(category: string, page: number) {
		const catKey = category === 'top' ? 'news' : category === 'new' ? 'newest' : category;
		this._data = [ ...loadingData ];
		this._page = page;
		this._data = await fetch(`https://api.hackerwebapp.com/${catKey}?page=${page}`).then((response) => response.json());
		this._category = category;
		this.emit({ type: 'invalidate' });
	}

	public async fetchItem(id: string) {
		this._item = undefined;
		this._itemId = id;
		this._item = await fetch(`https://api.hackerwebapp.com/item/${id}`).then((response) => response.json());
		this.emit({ type: 'invalidate' });
	}

	public setCategory(category: string) {
		this._category = category;
		this.emit({ type: 'invalidate' });
	}

	get() {
		return this;
	}

	get data() {
		return this._data;
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
