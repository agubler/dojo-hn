import { v, w } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';

import { CommentsOutlet } from './../outlets/CommentsOutlet';
import { ContentOutlet } from './../outlets/ContentOutlet';
import { MenuContainer } from './../containers/MenuContainer';

import * as css from './styles/app.m.css';
export class App extends WidgetBase {
	protected render() {
		return v('div', [
			w(MenuContainer, {}),
			v('main', { classes: css.main }, [
				w(ContentOutlet, {}),
				w(CommentsOutlet, {})
			])
		]);
	}
}
