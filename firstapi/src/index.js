const http = require('http');
const url = require('url');

const routes = require('./routes');
const { parse } = require('path');

const server = http.createServer((request,response) => {
  const parsedUrl = url.parse(request.url, true);

  console.log(`Request method: ${request.method} | Endpoint: ${parsedUrl.pathname}`);

  let { pathname } = parsedUrl;
  let id = null;

  const splitEndPoint = pathname.split('/').filter(Boolean);
  
  if(splitEndPoint.length > 1 ){
    pathname = `/${splitEndPoint[0]}/:id`;
    id = splitEndPoint[1];
  }

  const route = routes.find((routeObj) => (
    routeObj.endpoint === pathname && routeObj.method === request.method
  ));

  if(route){
    request.query = parsedUrl.query;
    request.params = { id };

    route.handler(request,response);
  }else{
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
  }
});


server.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
