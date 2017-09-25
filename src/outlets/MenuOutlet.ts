import { Outlet } from '@dojo/routing/Outlet';

import { Menu } from './../widgets/Menu';

export const MenuOutlet = Outlet(Menu, 'menu', ({ params }) => {
	return { category: params.category };
});

export const DefaultMenuOutlet = Outlet({ index: Menu }, 'user', ({ params }) => {
	return { category: params.category };
});

export const OtherMenuOutlet = Outlet({ index: Menu }, 'home', () => {
	return { category: 'top' };
});

export default MenuOutlet;
