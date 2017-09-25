import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';

import { Menu } from './Menu';
import { Content } from './Content';

interface AppProperties {
	data?: any[];
}
export class App extends WidgetBase<AppProperties> {

	private _data: any[];

	private _cat = 'top';

	private async _onCategoryChange(cat: string) {
		const catKey = cat === 'top' ? 'news' : cat === 'new' ? 'newest' : cat;
		this._cat = cat;
		const data = await fetch(`https://api.hackerwebapp.com/${catKey}?page=1`).then((response) => response.json());
		this._data = data;
		this.invalidate();
	}

	render() {
		const data = this._data ? this._data : this.properties.data || [];
		return v('div', [
			w(Menu, { onCategoryChange: this._onCategoryChange, selectedCat: this._cat }),
			data.length > 0 ? w<Content>('content', { data: data, }) : null
		]);
	}
}
