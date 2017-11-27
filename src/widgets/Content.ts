import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { w, v } from '@dojo/widget-core/d';
import { DNode } from '@dojo/widget-core/interfaces';
import { ArticleItem } from './../interfaces';
import { Article } from './Article';
import { Link } from 'dojo-2-router/Link';
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
			w(Link,
				{
					key: 'prev',
					to: pageNumber > 1 ? 'content' : '',
					params: {
						category,
						page: `${pageNumber - 1}`
					},
					classes: css.pageLink,
					styles: {
						color: pageNumber > 1 ? '#000' : 'rgba(49, 40, 40, 0.65)'
					}
				},
				['< prev']
			),
			v('span', { classes: css.pageNumber }, [`${pageNumber}`]),
			w(Link,
				{
					key: 'next',
					to: articles.length === 30 ? 'content' : '',
					params: {
						category,
						page: `${pageNumber + 1}`
					},
					classes: css.pageLink,
					styles: {
						color: articles.length === 30 ? '#000' : 'rgba(49, 40, 40, 0.65)'
					}
				},
				['next >']
			)
		]);

		return [pagination, ...articlesNodes];
	}
}
