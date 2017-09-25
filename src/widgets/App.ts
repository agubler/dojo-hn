import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';

import { ContentOutlet } from './../outlets/ContentOutlet';
import { MenuContainer } from './../containers/MenuContainer';

export class App extends WidgetBase {

	render() {
		return v('div', [
			w(MenuContainer, {}),
			w(ContentOutlet, { })
		]);
	}
}
