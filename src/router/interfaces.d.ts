import {
	Constructor,
	RegistryLabel,
	VirtualDomProperties,
	WidgetBaseInterface,
	WidgetProperties
} from '@dojo/widget-core/interfaces';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';

export interface Route {
	path: string;
	outlet: string;
	params: string[];
	query: string[];
	segments: (symbol | string)[];
	children: Route[];
	fullPath: string;
	fullParams: string[];
}

export interface Config {
	path: string;
	outlet: string;
	children?: Config[];
}

export interface Params {
	[index: string]: string;
}

export interface MapParamsOptions {
	params: Params;
	type: string;
	router: RouterInterface;
}

export interface OutletContext {
	/**
	 * The type of match for the outlet
	 */
	type: string;

	/**
	 * The params for the specific outlet
	 */
	params: Params;
}

export interface RouterInterface {

	link(outlet: string, params?: Params): string | undefined;

	setPath(path: string): void;

	getOutlet(outletId: string): OutletContext | undefined;

	currentParams: Params;
}

export interface MapParams {
	(options: MapParamsOptions): any;
}

/**
 * Component type
 */
export type Component<W extends WidgetBaseInterface = WidgetBaseInterface> = Constructor<W> | RegistryLabel;

/**
 * Outlet component options
 */
export interface OutletComponents<W extends WidgetBaseInterface, I extends WidgetBaseInterface, E extends WidgetBaseInterface> {
	main?: Component<W>;
	index?: Component<I>;
	error?: Component<E>;
}

export type Outlet<
	W extends WidgetBaseInterface,
	F extends WidgetBaseInterface,
	E extends WidgetBaseInterface> = Constructor<WidgetBase<Partial<E['properties']> & Partial<W['properties']> & Partial<F['properties']> & WidgetProperties, null>>;

export interface LinkProperties extends VirtualDomProperties {
	key?: string;
	isOutlet?: boolean;
	params?: Params;
	onClick?: (event: MouseEvent) => void;
	to: string;
}

export interface History {
	set(path: string): void;
	prefix(path: string): string;
}
