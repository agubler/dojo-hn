import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';

import { MenuOutlet, DefaultMenuOutlet, OtherMenuOutlet } from './../outlets/MenuOutlet';
import { Content } from './Content';

interface AppProperties {
	data?: any[];
	onCategoryChange: Function;
}
export class App extends WidgetBase<AppProperties> {

	render() {
		const { data, onCategoryChange } = this.properties;
		return v('div', [
			w(MenuOutlet, { onCategoryChange }),
			w(DefaultMenuOutlet, { onCategoryChange }),
			w(OtherMenuOutlet, { onCategoryChange }),
			data && data.length > 0 ? w<Content>('content', { data }) : 'Loading...'
		]);
	}
}
