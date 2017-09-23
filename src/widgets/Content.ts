import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';

import { Article } from './Article';
import * as css from './styles/content.m.css';

interface ContentProperties {
	data: any[];
}


@theme(css)
export class Content extends ThemeableMixin(WidgetBase)<ContentProperties> {

	render() {
		const { data } = this.properties;
		return v('main', { classes: this.classes(css.root) }, data.map((item, index) => {
			return w(Article, { key: index, index, item, pageNumber: 1 });
		}))
	}

}
