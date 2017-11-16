import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import { Registry } from '@dojo/widget-core/Registry';
import { registerRouterInjector } from '@dojo/routing/RouterInjector';
import { Context } from './Context';

import { App } from './widgets/App';

const registry = new Registry();
const context = new Context();
registry.defineInjector('state', context);
registry.define('comments', async () => {
	const widget = await import ('./widgets/Comments');
	return widget.Comments;
});

const routingConfig = [
	{
		path: 'user/{user}',
		outlet: 'user'
	},
	{
		path: 'comments/{id}',
		outlet: 'comments'
	},
	{
		path: '{category}/{page}',
		outlet: 'content',
		defaultRoute: true,
		defaultParams: {
			category: 'top',
			page: 1
		}
	}
];

const router = registerRouterInjector(routingConfig, registry);
router.start();
const Projector = ProjectorMixin(App);
const projector = new Projector();
projector.setProperties({ registry });
projector.merge(document.getElementById('app') || undefined);
