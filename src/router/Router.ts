import { Evented } from '@dojo/widget-core/Evented';
import { Constructor } from '@dojo/widget-core/interfaces';
import { Config, History, OutletContext, Params, RouterInterface, Route } from './interfaces';

const PARAM = Symbol('routing param');

export class Router extends Evented implements RouterInterface {
	private _routes: Route[] = [];
	private _outletMap = new Map<string, Route>();
	private _matchedOutlets = new Map<string, OutletContext>();
	private _currentParams: Params = {};
	private _history: History;

	constructor(HistoryManager: Constructor<History>, config: Config[]) {
		super();
		this._history = new HistoryManager(this._onChange.bind(this));
		this._register(config);
		this.setPath(window.location.hash);
	}

	public setPath(path: string): void {
		this._history.set(path);
	}

	public link(outlet: string, params: Params = {}): string | undefined {
		let route = this._outletMap.get(outlet);
		if (route === undefined) {
			return;
		}

		let linkPath = route.fullPath;
		params = { ...this._currentParams, ...params };

		for (let i = 0; i < route.fullParams.length; i++) {
			const param = route.fullParams[i];
			if (params[param]) {
				linkPath = linkPath.replace(`{${param}}`, params[param]);
			}
		}
		return this._history.prefix(linkPath);
	}

	public getOutlet(path: string): OutletContext | undefined {
		return this._matchedOutlets.get(path);
	}

	public get currentParams() {
		return this._currentParams;
	}

	private _stripLeadingSlash(path: string): string {
		if (path[0] === '/') {
			return path.slice(1);
		}
		return path;
	}

	private _register(config: Config[], routes?: Route[], parentRoute?: Route): void {
		routes = routes ? routes : this._routes;
		for (let i = 0; i < config.length; i++) {
			let { path, outlet, children } = config[i];
			path = this._stripLeadingSlash(path);
			const segments: (symbol | string)[] = path.split('/');
			const route: Route = {
				params: [],
				outlet,
				path,
				segments,
				query: [],
				children: [],
				fullPath: parentRoute ? `${parentRoute.fullPath}/${path}` : path,
				fullParams: []
			};
			for (let i = 0; i < segments.length; i++) {
				const segment = segments[i];
				if (typeof segment  === 'string' && segment[0] === '{') {
					route.params.push(segment.replace('{', '').replace('}', ''));
					segments[i] = PARAM;
				}
			}

			route.fullParams = parentRoute ? { ...parentRoute.fullParams, ...route.params } : route.params;

			if (children && children.length > 0) {
				this._register(children, route.children, route);
			}
			this._outletMap.set(outlet, route);
			routes.push(route);
		}
	}

	private _onChange(path: string): void {
		this.emit({ type: 'navstart' });
		this._matchedOutlets.clear();
		this._currentParams  = {};
		path = this._stripLeadingSlash(path);

		let params: Params = {};
		let routes = [ ...this._routes ];
		let paramIndex = 0;
		let segments = path.split('/');
		let routeMatched = false;
		while (routes.length > 0) {
			const route = routes.shift();
			let type = 'exact';
			if (route !== undefined) {
				const segmentsForRoute = [ ...segments ];
				let routeMatch = true;
				let segmentIndex = 0;

				if (segments.length < route.segments.length) {
					routeMatch = false;
					continue;
				}
				while (segments.length > 0) {
					if (route.segments[segmentIndex] === undefined) {
						if (segments.length) {
							type = 'partial';
						}
						break;
					}
					const segment = segments.shift();
					if (segment !== undefined) {
						if (route.segments[segmentIndex] === PARAM) {
							params[route.params[paramIndex++]] = segment;
						}
						else if (route.segments[segmentIndex] !== segment) {
							routeMatch = false;
							break;
						}
					}
					segmentIndex++;
				}
				if (routeMatch === true) {
					routeMatched = true;
					this._matchedOutlets.set(route.outlet, { params: { ...params }, type });
					if (route.children.length) {
						paramIndex = 0;
						this._currentParams = { ...this._currentParams, ...params };
						params = {};
						routes = [ ...route.children ];
					}
				}
				else {
					this._matchedOutlets.set(route.outlet, { params: { ...params }, type: 'error' });
					segments = [ ...segmentsForRoute ];
				}
			}
		}
		if (routeMatched === false) {
			this._matchedOutlets.set('errorOutlet', { params: {}, type: 'error' });
		}
	}
}
