var functions = require('firebase-functions');
var fetch = require('node-fetch');
var NodeCache = require('node-cache');

var resultCache = new NodeCache({ stdTTL: 240, checkperiod: 360 });

exports.hn = functions.https.onRequest((request, response) => {
	let path = request.path.slice(4);
	let page = request.query.page;
	let offset = parseInt(request.query.offset);
	let url = `https://node-hnapi.herokuapp.com/${path}?page=${page}`;
	if (path.indexOf('item') !== -1) {
		fetch(url).then(resp => {
			resp.json().then(json => {
				response.set('Cache-Control', 'public, max-age=600, s-maxage=600');
				return response.send(json);
			})
		});
	} else {
		let cachedItem = resultCache.get(url);
		if (cachedItem) {
			try {
				response.set('Cache-Control', 'public, max-age=600, s-maxage=600');
				response.send({
					count: cachedItem.length,
					items: cachedItem.slice(offset, offset + 10)
				});
				fetchUrl(url, offset);
			} catch (error) {
				fetchUrl(url, offset, response);
			}
		} else {
			fetchUrl(url, offset, response);
		}
	}
});

function fetchUrl(url, offset, response) {
	fetch(url).then(resp => {
		resp.json().then(json => {
			resultCache.set(url, json);
			if (response) {
				response.set('Cache-Control', 'public, max-age=600, s-maxage=600');
				response.send({
					count: json.length,
					items: json.slice(offset, offset + 10)
				});
			}
		});
	});
}
