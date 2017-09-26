import { Outlet } from '@dojo/routing/Outlet';

import { ContentContainer } from './../containers/ContentContainer';

export const ContentOutlet = Outlet(ContentContainer, 'content', ({ params }) => {
	return { category: params.category, pageNumber: parseInt(params.page, 10) };
});

export default ContentOutlet;
