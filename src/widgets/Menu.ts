import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';

import { MenuItem } from './MenuItem';
import * as css from './styles/menu.m.css';

const categories = [ 'top', 'new', 'show', 'ask', 'jobs' ];

interface MenuProperties {
	onCategoryChange: Function;
	selectedCat: string;
}

@theme(css)
export class Menu extends ThemeableMixin(WidgetBase)<MenuProperties> {

	private _onHomeClick() {
		this.properties.onCategoryChange('top');
	}

	render() {
		const { onCategoryChange, selectedCat } = this.properties;

		return v('nav', { classes: this.classes(css.root) }, [
			v('a', { classes: this.classes(css.home), onclick: this._onHomeClick }, [
				v('img', { classes: this.classes(css.logo), src: './img/logo2.svg' })
			]),
			v('ol', { classes: this.classes(css.menuContainer) }, [ ...categories.map((cat) => {
				return w(MenuItem, {
					key: cat,
					onSelectedMenuItem: onCategoryChange,
					selected: cat === selectedCat,
					cat
				}, [ cat ])
			})])
		]);
	}
}
