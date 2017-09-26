import { Outlet } from '@dojo/routing/Outlet';

import { CommentsContainer } from './../containers/CommentsContainer';

export const CommentsOutlet = Outlet(CommentsContainer, 'comments', ({ params }) => {
	return { id: params.id };
});

export default CommentsOutlet;
