import { Container } from '@dojo/widget-core/Container';

import { Context } from './../Context';
import { Content, ContentProperties } from './../widgets/Content';

function getProperties(context: Context, properties: ContentProperties) {
	const { category = 'top', pageNumber = 1 } = properties;
	if (category !== context.category || pageNumber !== context.page) {
		context.fetchStories(category, pageNumber);
	}

	return {
		data: context.data,
		pageNumber: context.page
	};
}

export const ContentContainer = Container(Content, 'state', { getProperties });
