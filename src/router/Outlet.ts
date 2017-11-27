import { DNode, RegistryLabel, WidgetBaseInterface } from '@dojo/widget-core/interfaces';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { w } from '@dojo/widget-core/d';
import { inject } from '@dojo/widget-core/decorators/inject';

import { Component, MapParams, MapParamsOptions, OutletComponents, Outlet } from './interfaces';
import { Router } from './Router';

export function isComponent<W extends WidgetBaseInterface>(value: any): value is Component<W> {
	return Boolean(value && ((typeof value === 'string') || (typeof value === 'function') || (typeof value === 'symbol')));
}

export function Outlet<W extends WidgetBaseInterface, F extends WidgetBaseInterface, E extends WidgetBaseInterface>(
	outletComponents: Component<W> | OutletComponents<W, F, E>,
	outlet: string,
	mapParams: MapParams = (options: MapParamsOptions) => {},
	key: RegistryLabel
): Outlet<W, F, E> {
	const indexComponent = isComponent(outletComponents) ? undefined : outletComponents.index;
	const mainComponent = isComponent(outletComponents) ? outletComponents : outletComponents.main;
	const errorComponent = isComponent(outletComponents) ? undefined : outletComponents.error;
	function getProperties(this: WidgetBase, router: Router, properties: any) {
		return { router };
	};

	@inject({ name: key, getProperties })
	class OutletComponent extends WidgetBase<Partial<W['properties']> & { router: Router }, null> {

		public __setProperties__(properties: Partial<W['properties']> & { router: Router }): void {
			super.__setProperties__(properties);
			this.invalidate();
		}

		protected render(): DNode {
			const { router } = this.properties;
			const outletContext = router.getOutlet(outlet);
			if (outletContext) {
				const { params, type } = outletContext;
				const properties = { ...this.properties, ...mapParams({ params, type, router }) };

				if ((type === 'exact' || type === 'error') && indexComponent) {
					return w(indexComponent, properties, this.children);
				}
				else if (type === 'error' && errorComponent) {
					return w(errorComponent, properties, this.children);
				}
				else if (type !== 'error' && mainComponent) {
					return w(mainComponent, properties, this.children);
				}
			}
			return null;
		}
	}
	return OutletComponent;
}
