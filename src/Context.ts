import { Injector } from '@dojo/widget-core/Injector';

export class Context extends Injector {
	private _data: any[] = [];
	private _category: string;

	public async fetchStories(category: string) {
		const catKey = category === 'top' ? 'news' : category === 'new' ? 'newest' : category;
		this._category = category;
		this.emit({ type: 'invalidate' });
		fetch(`https://api.hackerwebapp.com/${catKey}?page=1`)
			.then((response) => response.json())
			.then((data) => {
				this._data = data;
				this.emit({ type: 'invalidate' });
			});
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
}
