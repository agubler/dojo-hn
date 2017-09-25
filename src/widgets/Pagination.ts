import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';
import { Link } from '@dojo/routing/Link';

import * as css from './styles/menuItem.m.css';

export interface PaginationProperties {
	selected: boolean;
	cat: string;
	imgUrl?: string;
}

@theme(css)
export class Pagination extends ThemeableMixin(WidgetBase)<PaginationProperties> {

	render() {
		const { selected } = this.properties;

		return v('li', { classes: this.classes(css.root) }, [
			w(Link, {
				to: 'menu',
				params: { category: this.properties.cat },
				classes: this.classes(css.item, selected ? css.selected : null)
			}, this.children)
		]);

	}
}
