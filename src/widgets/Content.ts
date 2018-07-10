import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { w, v } from '@dojo/widget-core/d';
import { DNode } from '@dojo/widget-core/interfaces';
import { Intersection } from '@dojo/widget-core/meta/Intersection';
import { ArticleItem } from './../interfaces';
import { Article } from './Article';
import * as css from './styles/content.m.css';

export interface ContentProperties {
	articles?: ArticleItem[];
	category: string;
	pageNumber: number;
	fetchArticles(category: string, page: number, offset: number): void;
	count: number;
}

export class Content extends WidgetBase<ContentProperties> {
	private _isFetching = false;

	protected render() {
		const { articles = [], pageNumber, category, fetchArticles, count } = this.properties;
		const articlesNodes: DNode[] = [];
		const length = articles.length || 5;
		for (let index = 0; index < length; index++) {
			articlesNodes.push(w(Article, { key: index, index, item: articles[index], pageNumber }));
		}
		const prevProps = pageNumber > 1 ? { href: `#/${category}/${pageNumber - 1}` } : {};
		const nextProps = count === 30 ? { href: `#/${category}/${pageNumber + 1}` } : {};
		const { isIntersecting } = this.meta(Intersection).get(`bottom-${pageNumber}`);

		if (isIntersecting && !this._isFetching && articles.length > 0) {
			this._isFetching = true;
			fetchArticles(category, pageNumber, (articles || []).length);
		} else {
			this._isFetching = false;
		}

		const pagination = v('div', { classes: css.pagination }, [
			v(
				'a',
				{
					...prevProps,
					key: 'prev',
					classes: css.pageLink,
					styles: {
						color: pageNumber > 1 ? '#000' : 'rgba(49, 40, 40, 0.65)'
					}
				},
				['< prev']
			),
			v('span', { classes: css.pageNumber }, [`${pageNumber}`]),
			v(
				'a',
				{
					...nextProps,
					key: 'next',
					classes: css.pageLink,
					styles: {
						color: count === 30 ? '#000' : 'rgba(49, 40, 40, 0.65)'
					}
				},
				['next >']
			)
		]);

		const bottom = v('div', { key: `bottom-${pageNumber}`, classes: css.bottom });

		return [pagination, ...articlesNodes, articles.length ? bottom : null];
	}
}
