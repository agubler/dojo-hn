import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import { Registry } from '@dojo/widget-core/Registry';
import { registerRouterInjector } from '@dojo/routing/RouterInjector';
import { Context } from './Context';

import { App } from './widgets/App';
import register from './registerServiceWorker';


import load from '@dojo/core/load';

declare const require: any



const registry = new Registry();
registry.defineInjector('state', new Context({}));
registry.define('content', () => {
    return load(require, './widgets/Content').then(([someWidget]) => someWidget.Content);
});

const routingConfig = [
	{
		path: 'user',
		outlet: 'user'
	},
	{
        path: '{category}',
        outlet: 'menu',
        defaultRoute: true,
        defaultParams: {
            category: 'top'
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
