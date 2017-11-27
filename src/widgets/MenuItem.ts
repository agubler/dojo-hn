import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';
import * as css from './styles/menuItem.m.css';
import { Link } from 'dojo-2-router/Link';

export interface MenuItemProperties {
	selected: boolean;
	category: string;
}

export class MenuItem extends WidgetBase<MenuItemProperties> {
	render() {
		const { selected, category } = this.properties;

		return v('li', { classes: css.root }, [
			w(Link,
				{
					to: 'content',
					params: {
						category,
						page: '1'
					},
					classes: [css.item, selected ? css.selected : null]
				},
				this.children
			)
		]);
	}
}
