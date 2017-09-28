import { Link } from '@dojo/routing/Link';
import { v, w } from '@dojo/widget-core/d';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';

import { ArticleItem } from './../interfaces';

import * as css from './styles/article.m.css';

export interface ArticleProperties {
	item?: ArticleItem;
	index: number;
	pageNumber: number;
}

@theme(css)
export class Article extends ThemeableMixin(WidgetBase)<ArticleProperties> {

	private _articleShell() {
		const properties = { classes: { a: false } };
		return [
			v('h2', [
				v('a', properties, [ 'Loading...' ])
			]),
			v('p', properties, [ v('span'), v('a'), v('span'), v('a') ])
		];
	}

	private _renderArticle(article: ArticleItem) {
		const { url, title, points, user, id, comments_count, time_ago } = article;
		const commentText = comments_count === 0 ? 'discuss' : `${comments_count} comments`;

		return [
			v('h2', [
				v('a', {
					href: url,
					target: 'none',
					classes: this.classes(css.title)
				}, [ title ])
			]),
			v('p', { classes: this.classes(css.details) }, [
				v('span', [ `${points || 0} points ${user ? 'by ' : ''}` ]),
				user ? w(Link, {
					key: 'user',
					to: 'user',
					params: { user },
					classes: this.classes(css.link)
				}, [
					user
				]) : null,
				v('span', [ ` ${time_ago} ` ]),
				w(Link, {
					key: 'comments',
					to: 'comments',
					params: { id: `${id}` },
					classes: this.classes(css.link)
				}, [ commentText ])
			])
		];

	}

	protected render() {
		const { item, index, pageNumber } = this.properties;
		const articleNumber = `${(pageNumber - 1) * 30 + index + 1}`;

		return v('article', { classes: this.classes(css.root) }, [
			v('span', { classes: this.classes(css.pageNumber) }, [ articleNumber ]),
			v('div', {
				key: index,
				classes: this.classes(css.post)
			}, item ? this._renderArticle(item) : this._articleShell())
		]);
	}

}
