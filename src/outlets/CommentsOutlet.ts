import { Outlet } from 'dojo-2-router/Outlet';

import { CommentsContainer } from './../containers/CommentsContainer';

export const CommentsOutlet = Outlet(CommentsContainer, 'comments', ({ params }: any) => {
	return { id: params.id };
}, 'router');

export default CommentsOutlet;
