import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import { Registry } from '@dojo/widget-core/Registry';
import { registerRouterInjector } from '@dojo/routing/RouterInjector';
import { Context } from './Context';

import { App } from './widgets/App';
import register from './registerServiceWorker';

import load from '@dojo/core/load';

declare const require: any;

const registry = new Registry();
registry.defineInjector('state', new Context({}));
registry.define('comments', () => {
	return load(require, './widgets/Comments').then(([someWidget]) => someWidget.Comments);
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

const Projector = ProjectorMixin(App);
const projector = new Projector();
projector.setProperties({ registry });
projector.append();
router.start();

register();
