import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import { Registry } from '@dojo/widget-core/Registry';
import { registerRouterInjector } from '@dojo/routing/RouterInjector';

import { App } from './widgets/App';
import register from './registerServiceWorker';

import load from '@dojo/core/load';

declare const require: any

const registry = new Registry();
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
		outlet: 'menu'
	},
	{
		path: '/',
		outlet: 'home'
	}
];

const router = registerRouterInjector(routingConfig, registry);

const Projector = ProjectorMixin(App);
const projector = new Projector();

async function onCategoryChange(cat: string) {
    const catKey = cat === 'top' ? 'news' : cat === 'new' ? 'newest' : cat;
    const data = await fetch(`https://api.hackerwebapp.com/${catKey}?page=1`).then((response) => response.json());
    projector.setProperties({ registry, data, onCategoryChange });
}

projector.setProperties({ registry, onCategoryChange });
projector.append();
router.start();
onCategoryChange(router.getCurrentParams().category || 'top');
register();
