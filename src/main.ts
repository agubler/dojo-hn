import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import { Registry } from '@dojo/widget-core/Registry';
import { Context } from './Context';
import { App } from './widgets/App';
import { Injector } from '@dojo/widget-core/Injector';

import { Router } from 'dojo-2-router/Router';
import { HashHistory } from 'dojo-2-router/HashHistory';

const registry = new Registry();
const context = new Context({});
registry.defineInjector('state', context);

const config = [
	{
		path: '/comments/{id}',
		outlet: 'comments'
	},
	{
		path: '/{category}/{page}',
		outlet: 'content'
	}
];

const router = new Router(HashHistory, config);

const injector = new Injector(router);
router.on('navstart', () => {
	injector.emit({ type: 'invalidate' });
});
registry.defineInjector('router', injector);

const Projector = ProjectorMixin(App);
const projector = new Projector();
projector.setProperties({ registry });
projector.merge(document.getElementById('app') || undefined);
