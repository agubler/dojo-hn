export default function registerServiceWorker() {
	if ('serviceWorker' in navigator) {
		window.addEventListener('load', () => {
			const serviceWorkerUrl = '/dojo-2-hn/dist/service-worker.js';
			navigator.serviceWorker
				.register(serviceWorkerUrl)
				.then((registration: ServiceWorkerRegistration) => {
					registration.onupdatefound = () => {
						const installingWorker = registration.installing;
						if (installingWorker) {
							installingWorker.onstatechange = () => {
								if (installingWorker.state === 'installed') {
									if (navigator.serviceWorker.controller) {
										console.log('New content is available; please refresh.');
									}
									else {
										console.log('Content is cached for offline use.');
									}
								}
							};
						}
					};
				})
				.catch((error) => {
					console.error('Error during service worker registration:', error);
				});
		});
	}
}

export function unregister() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.ready.then((registration: ServiceWorkerRegistration) => {
			registration.unregister();
		});
	}
}
