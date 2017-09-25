import { Container } from '@dojo/widget-core/Container';

import { Content } from './../widgets/Content';

function getProperties(context: any, properties: any) {
	const { category = 'top' } = properties;
	if (category !== context.category) {
		context.fetchStories(category);
	}

	return {
		data: context.data
	};

}

export const ContentContainer = Container<Content>('content', 'state', { getProperties });
