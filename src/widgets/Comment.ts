import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';
import { Link } from '@dojo/routing/Link';

import { CommentItem } from './../interfaces';
import * as css from './styles/comment.m.css';

export interface CommentProperties {
	comment: CommentItem;
}

@theme(css)
export class Comment extends ThemeableMixin(WidgetBase)<CommentProperties> {

	protected render() {
		const { comment: { user, content, time_ago, comments = [] } } = this.properties;
		return v('div', { classes: this.classes(css.root) }, [
			v('header', { classes: this.classes(css.padding) }, [
				user ? w(Link, {
					to: 'user',
					params: {
						user
					},
					classes: this.classes(css.user)
				}, [ user ]) : null,
				v('span', { classes: this.classes(css.time) }, [ time_ago ])
			]),
			v('div', { innerHTML: content, classes: this.classes(css.comment) }),
			v('div', { classes: this.classes(css.padding) }, comments.map((comment, index) => {
				return w(Comment, { comment, key: index });
			}))
		]);
	}
}
