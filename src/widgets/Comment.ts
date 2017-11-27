import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';
import { CommentItem } from './../interfaces';
import * as css from './styles/comment.m.css';
import { Link } from 'dojo-2-router/Link';

export interface CommentProperties {
	comment: CommentItem;
}

export class Comment extends WidgetBase<CommentProperties> {
	protected render() {
		const { comment: { user, content, time_ago, comments = [] } } = this.properties;
		return v('div', { classes: css.root }, [
			v('header', { classes: css.padding }, [
				user
					? w(Link,
							{
								key: 'user',
								to: 'user',
								params: {
									user
								},
								classes: css.user
							},
							[user]
						)
					: null,
				v('span', { classes: css.time }, [time_ago])
			]),
			v('div', { key: 'content', innerHTML: content, classes: css.comment }),
			v(
				'div',
				{ key: 'comments', classes: css.padding },
				comments.map((comment, index) => {
					return w(Comment, { comment, key: index });
				})
			)
		]);
	}
}
