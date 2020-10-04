import * as url from 'url';

function create(req: any) {
  req.query = url.parse(req.url).query;
  req.statusCode = 200;
}

export { create }