import { Outlet } from 'dojo-2-router/Outlet';

import { ContentContainer } from './../containers/ContentContainer';

export const ContentOutlet = Outlet(ContentContainer, 'content', ({ params }: any) => {
	return { category: params.category, pageNumber: parseInt(params.page, 10) };
}, 'router');

export default ContentOutlet;
