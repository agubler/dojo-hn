import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';
import { NodeEventType } from '@dojo/widget-core/NodeHandler';

import { Menu } from './Menu';
import { Content } from './Content';

export class App extends WidgetBase {

	private _data: any[] = [];

	private _cat = 'top';

	/*private _page = 1;*/

	constructor() {
		super();
		const handle = (<any> this)._nodeHandler.on(NodeEventType.Widget, async () => {
			const data = await fetch('https://api.hackerwebapp.com/news?page=1').then((response) => response.json());
			console.log('I am attached');
			this._data = data;
			this.invalidate();
			handle.destroy();
		});
	}

	private async _onCategoryChange(cat: string) {
		const catKey = cat === 'top' ? 'news' : cat === 'new' ? 'newest' : cat;
		this._cat = cat;
		const data = await fetch(`https://api.hackerwebapp.com/${catKey}?page=1`).then((response) => response.json());
		this._data = data;
		this.invalidate();
	}

	render() {
		return v('div', [
			w(Menu, { onCategoryChange: this._onCategoryChange, selectedCat: this._cat }),
			this._data.length === 0 ? 'Loading...' : w<Content>('content', { data: this._data, })
		]);
	}
}
