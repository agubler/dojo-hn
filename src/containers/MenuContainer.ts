import { Container } from '@dojo/widget-core/Container';

import { Menu } from './../widgets/Menu';

function getProperties(context: any, properties: any) {
	return {
		category: context.category
	};
}

export const MenuContainer = Container(Menu, 'state', { getProperties });
