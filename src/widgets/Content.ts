import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { w } from '@dojo/widget-core/d';
import { DNode } from '@dojo/widget-core/interfaces';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';
import { Link } from '@dojo/routing/Link';

import { ArticleItem } from './../interfaces';
import { Article } from './Article';
import * as css from './styles/content.m.css';

export interface ContentProperties {
	articles?: ArticleItem[];
	category: string;
	pageNumber: number;
}

@theme(css)
export class Content extends ThemeableMixin(WidgetBase)<ContentProperties> {

	protected render() {
		const { articles = [], pageNumber, category } = this.properties;
		const articlesNodes: DNode[] = [];
		const length = articles.length || 30;
		for (let index = 0; index < length; index++) {
			articlesNodes.push(w(Article, { key: index, index, item: articles[index], pageNumber }));
		}

		if (articles.length === 30) {
			articlesNodes.push(
				w(Link, {
					to: 'content',
					params: {
						category,
						page: `${pageNumber + 1}`
					},
					classes: this.classes(css.more)
				}, [ 'More...' ])
			);
		}

		return articlesNodes;
	}
}
