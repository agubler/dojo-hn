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
	fetchArticles(): void;
	count: number;
}

export class Content extends WidgetBase<ContentProperties> {
	private _isLoading = false;

	protected render() {
		const { articles = [], pageNumber, category, fetchArticles, count } = this.properties;
		const articlesNodes: DNode[] = [];
		const length = articles.length || 10;
		for (let index = 0; index < length; index++) {
			articlesNodes.push(w(Article, { key: index, index, item: articles[index], pageNumber }));
		}
		const prevProps = pageNumber > 1 ? { href: `#/${category}/${pageNumber - 1}` } : {};
		const nextProps = count === 30 ? { href: `#/${category}/${pageNumber + 1}` } : {};
		const { isIntersecting } = this.meta(Intersection).get('bottom');

		if (isIntersecting && !this._isLoading) {
			this._isLoading = true;
			fetchArticles();
		} else {
			this._isLoading = false;
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
						color: articles.length === 30 ? '#000' : 'rgba(49, 40, 40, 0.65)'
					}
				},
				['next >']
			)
		]);

		const bottom = v('div', { key: 'bottom' });

		return [pagination, ...articlesNodes, bottom];
	}
}
