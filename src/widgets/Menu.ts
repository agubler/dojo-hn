import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';
import { MenuItem } from './MenuItem';
import * as css from './styles/menu.m.css';

const categories = ['top', 'new', 'show', 'ask', 'jobs'];

export interface MenuProperties {
	currentCategory?: string;
}

export class Menu extends WidgetBase<MenuProperties> {
	render() {
		const { currentCategory = '' } = this.properties;

		return v('nav', { classes: css.root }, [
			v(
				'ol',
				{ classes: css.menuContainer },
				categories.map(category => {
					return w(
						MenuItem,
						{
							key: category,
							selected: category === currentCategory,
							category
						},
						[category]
					);
				})
			)
		]);
	}
}
