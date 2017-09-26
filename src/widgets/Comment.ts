import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';
import { Link } from '@dojo/routing/Link';

import * as css from './styles/comment.m.css';

interface CommentProperties {
	comment: any;
}

@theme(css)
export class Comment extends ThemeableMixin(WidgetBase)<CommentProperties> {

	render() {
		const { comment } = this.properties;
		return v('div', { classes: this.classes(css.root) }, [
			v('header', { classes: this.classes(css.padding) }, [
				w(Link, {
					to: 'user',
					params: {
						user: comment.user || ''
					},
					classes: this.classes(css.user)
				}, [ comment.user ]),
				v('span', { classes: this.classes(css.time) }, [ comment.time_ago ])
			]),
			v('div', { innerHTML: comment.content, classes: this.classes(css.comment) }),
			v('div', { classes: this.classes(css.padding) }, comment.comments.map((comment: any, index: any) => {
				return w(Comment, { comment, key: index});
			}))
		]);
	}
}
