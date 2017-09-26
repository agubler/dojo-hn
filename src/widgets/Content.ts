import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { w } from '@dojo/widget-core/d';
import { DNode } from '@dojo/widget-core/interfaces';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';
import { Link } from '@dojo/routing/Link';

import { Article } from './Article';
import * as css from './styles/content.m.css';

export interface ContentProperties {
	data: any[];
	category: string;
	pageNumber: number;
}

@theme(css)
export class Content extends ThemeableMixin(WidgetBase)<ContentProperties> {

	render() {
		const { data, pageNumber, category } = this.properties;
		const articles: DNode[] = data.map((item, index) => {
			return w(Article, { key: index, index, item, pageNumber });
		});

		articles.push(
			w(Link, {
				to: 'content',
				params: {
					category,
					page: `${pageNumber + 1}`
				},
				classes: this.classes(css.more)
			}, [ 'More...' ])
		);

		return articles;
	}
}
