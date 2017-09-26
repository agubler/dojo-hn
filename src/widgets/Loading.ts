import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v } from '@dojo/widget-core/d';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';

import * as css from './styles/loading.m.css';

@theme(css)
export class Loading extends ThemeableMixin(WidgetBase) {
	render() {
		return v('div', { key: this.properties.key, classes: this.classes(css.spinner) });
	}
}
