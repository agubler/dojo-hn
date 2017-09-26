import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';
import { Link } from '@dojo/routing/Link';

import { MenuItem } from './MenuItem';
import * as css from './styles/menu.m.css';

const categories = [ 'top', 'new', 'show', 'ask', 'jobs' ];

export interface MenuProperties {
	currentCategory?: string;
}

@theme(css)
export class Menu extends ThemeableMixin(WidgetBase)<MenuProperties> {
	render() {
		const {currentCategory = '' } = this.properties;

		return v('nav', { classes: this.classes(css.root) }, [
			w(Link, { to: 'content', params: { category: 'top', page: 1  }, classes: this.classes(css.home) }, [
				v('img', { classes: this.classes(css.logo), src: './img/logo2.svg' })
			]),
			v('ol', { classes: this.classes(css.menuContainer) }, [ ...categories.map((category) => {
				return w(MenuItem, {
					key: category,
					selected: category === currentCategory,
					category
				}, [ category ]);
			})])
		]);
	}
}
