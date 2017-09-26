import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { v, w } from '@dojo/widget-core/d';
import { theme, ThemeableMixin } from '@dojo/widget-core/mixins/Themeable';
import { Link } from '@dojo/routing/Link';

import * as css from './styles/article.m.css';

export interface ArticleItem {
	id: number | null;
	title: string;
	user: string | null;
	url: string;
	points: string | null;
	time_ago: string;
	comments_count: number;
	loading: boolean;
}

export interface Loading {
	loading: boolean;
}

interface ArticleProperties {
	item: ArticleItem | Loading;
	index: number;
	pageNumber: number;
}

function isLoading(value?: any): value is Loading {
	return Boolean(value && value.loading);
}

const loadingItem: ArticleItem = {
	id: 0,
	title: 'Loading...',
	user: '',
	url: '',
	points: '',
	time_ago: '',
	comments_count: 0,
	loading: true
};

@theme(css)
export class Article extends ThemeableMixin(WidgetBase)<ArticleProperties> {

	private _renderArticle(article: ArticleItem) {
		return [
			v('h2', [
				v('a', { href: article.url, target: 'none', classes: this.classes(css.title) }, [ article.title ])
			]),
			v('p', { classes: this.classes(css.details) }, [
				article.loading ? null : `${article.points || 0} points`,
				w(Link, { key: 'user', to: 'user', params: { user: article.user || '' }, classes: this.classes(css.link) }, [
					article.loading ? null : ` by ${article.user}`
				]),
				article.loading ? null : ` ${article.time_ago}`,
				w(Link, { key: 'comments', to: 'comments', params: { id: `${article.id}` }, classes: this.classes(css.link) }, [
					article.loading ? null : article.comments_count === 0 ? 'discuss' : ` ${article.comments_count} comments`
				])
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
			}, isLoading(item) ? this._renderArticle(loadingItem) : this._renderArticle(item))
		]);
	}

}
