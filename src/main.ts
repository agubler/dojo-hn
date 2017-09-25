import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import { Registry } from '@dojo/widget-core/Registry';
import { App } from './widgets/App';
import register from './registerServiceWorker';

import load from '@dojo/core/load';

declare const require: any

const registry = new Registry();
registry.define('content', () => {
    return load(require, './widgets/Content').then(([someWidget]) => someWidget.Content);
});

const Projector = ProjectorMixin(App);
const projector = new Projector();
fetch('https://api.hackerwebapp.com/news?page=1').then((response) => response.json().then((data) => {
    projector.setProperties({ registry, data })
}));
projector.append();
projector.setProperties({ registry });
register();
