import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';

import { ContentOutlet } from './../outlets/ContentOutlet';
import { CommentsOutlet } from './../outlets/CommentsOutlet';
import { MenuContainer } from './../containers/MenuContainer';

import * as css from './styles/app.m.css';

@theme(css)
export class App extends ThemeableMixin(WidgetBase) {

	render() {
		return v('div', [
			w(MenuContainer, {}),
			v('main', { classes: this.classes(css.main) }, [
				w(ContentOutlet, {}),
				w(CommentsOutlet, {})
			])
		]);
	}
}
