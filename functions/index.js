var functions = require('firebase-functions');
var fetch = require('node-fetch');
var NodeCache = require('node-cache');

var resultCache = new NodeCache({ stdTTL: 240, checkperiod: 360 });

exports.hn = functions.https.onRequest((request, response) => {
  let path = request.path.slice(4);
  // TODO(dfreedm): is there some static prop we can use?
  let query = '';
  for (let p in request.query) {
    query = query || '?';
    query += `${p}=${request.query[p]}`;
  }
  let url = `https://node-hnapi.herokuapp.com/${path}${query}`;
  let cachedItem = resultCache.get(url);
  if (cachedItem) {
    try {
      response.set('Cache-Control', 'public, max-age=600, s-maxage=600');
      response.send(cachedItem);
    } catch (error) {
      fetchUrl(url, response);
    }
  } else {
    fetchUrl(url, response);
  }
});

function fetchUrl(url, response) {
  fetch(url).then(resp => {
    resp.json().then(json => {
      response.set('Cache-Control', 'public, max-age=600, s-maxage=600');
      resultCache.set(url, json);
      response.send(json);
    });
  });
}
