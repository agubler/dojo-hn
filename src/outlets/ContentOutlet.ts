import { Outlet } from '@dojo/routing/Outlet';

import { ContentContainer } from './../containers/ContentContainer';

export const ContentOutlet = Outlet(ContentContainer, 'menu', ({ params }) => {
	return { category: params.category };
});

export default ContentOutlet;
