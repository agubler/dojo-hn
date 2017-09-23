import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v } from '@dojo/widget-core/d';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';

import * as css from './styles/article.m.css';

interface ArticleProperties {
	item: any;
	index: number;
	pageNumber: number;
}

@theme(css)
export class Article extends ThemeableMixin(WidgetBase)<ArticleProperties> {

	render() {
		const { item, index, pageNumber } = this.properties;
		return v('article', { classes: this.classes(css.root) }, [
			v('span', { classes: this.classes(css.pageNumber) }, [ `${index * pageNumber}` ]),
			v('div', { classes: this.classes(css.post) }, [
				v('h2', [
					v('a', { href: item.url, target: 'none', classes: this.classes(css.title) }, [ item.title ])
				]),
				v('p', { classes: this.classes(css.details) }, [
					`${item.points} points by `,
					v('a', { classes: this.classes(css.link) }, [ item.user ]),
					` ${item.time_ago} `,
					v('a', { classes: this.classes(css.link, css.comments) }, [ `${item.comments_count} comments` ])
				])
			]),
		]);
	}

}
