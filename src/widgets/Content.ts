import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { w, v } from '@dojo/widget-core/d';
import { DNode } from '@dojo/widget-core/interfaces';
import { Link } from '@dojo/routing/Link';

import { ArticleItem } from './../interfaces';
import { Article } from './Article';
import * as css from './styles/content.m.css';

export interface ContentProperties {
	articles?: ArticleItem[];
	category: string;
	pageNumber: number;
}

export class Content extends WidgetBase<ContentProperties> {

	protected render() {
		const { articles = [], pageNumber, category } = this.properties;
		const articlesNodes: DNode[] = [];
		const length = articles.length || 30;
		for (let index = 0; index < length; index++) {
			articlesNodes.push(w(Article, { key: index, index, item: articles[index], pageNumber }));
		}

		const pagination = v('div', { classes: css.pagination }, [
			pageNumber > 1 ? w(Link, {
				key: 'prev',
				to: 'content',
				params: {
					category,
					page: `${pageNumber - 1}`
				},
				classes: css.pageLink
			}, [ '< prev' ]) : v('span', { key: 'disabled-prev', classes: css.disabled } , [ '< prev' ]),
			v('span', { classes: css.pageNumber }, [ `${pageNumber}` ]),
			articles.length === 30 ? w(Link, {
				key: 'next',
				to: 'content',
				params: {
					category,
					page: `${pageNumber + 1}`
				},
				classes: css.pageLink
			}, [ 'next >' ]) : v('span', { key: 'disabled-next', classes: css.disabled } , [ 'next >' ])
		]);

		return [ pagination, ...articlesNodes];
	}
}
