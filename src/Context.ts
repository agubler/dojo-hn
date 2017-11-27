import has from '@dojo/has/has';
import { Injector } from '@dojo/widget-core/Injector';
import { ArticleItem } from './interfaces';

export class Context extends Injector {
	articles?: ArticleItem[];
	item?: ArticleItem;
	category: string;
	page: number;
	itemId: string;

	public async fetchStories(category: string, page: number) {
		const catKey = category === 'top' ? 'news' : category === 'new' ? 'newest' : category;
		this.page = page;
		this.category = category;
		this.articles = undefined;
		this.emit({ type: 'invalidate' });
		if (!has('build-time-render')) {
			this.articles = await fetch(`https://node-hnapi.herokuapp.com/${catKey}?page=${page}`).then(response =>
				response.json()
			);
		}
		this.emit({ type: 'invalidate' });
	}

	public async fetchItem(id: string) {
		this.item = undefined;
		this.itemId = id;
		this.emit({ type: 'invalidate' });
		if (!has('build-time-render')) {
			this.item = await fetch(`https://node-hnapi.herokuapp.com/item/${id}`).then(response => response.json());
		}
		this.emit({ type: 'invalidate' });
	}

	get() {
		return this;
	}
}
