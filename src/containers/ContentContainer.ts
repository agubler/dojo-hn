import { Container } from '@dojo/widget-core/Container';
import { Context } from './../Context';
import { Content, ContentProperties } from './../widgets/Content';

function getProperties(context: Context, properties: ContentProperties): ContentProperties {
	return {
		articles: context.articlesInView,
		category: context.category,
		pageNumber: context.page,
		fetchArticles: context.fetchArticles,
		count: (context.articles || []).length
	};
}

export default Container(Content, 'state', { getProperties });
