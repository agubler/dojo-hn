import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v } from '@dojo/widget-core/d';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';

import * as css from './styles/menuItem.m.css';

export interface MenuItemProperties {
	onSelectedMenuItem: Function;
	selected: boolean;
	cat: string;
	imgUrl?: string;
}

@theme(css)
export class MenuItem extends ThemeableMixin(WidgetBase)<MenuItemProperties> {

	private _onClick() {
		this.properties.onSelectedMenuItem(this.properties.cat);
	}

	render() {
		const { selected } = this.properties;

		return v('li', { classes: this.classes(css.root) }, [
			v('a', {
				onclick: this._onClick,
				classes: this.classes(css.item, selected ? css.selected : null)
			}, this.children)
		]);

	}
}
