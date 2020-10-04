import * as http from 'http';
import * as url from 'url';

class Routing {
  public paths: any;

  constructor() {
    this.paths = {};
  }

  get = (path: string, next: Function) => {
    if(this.paths[path]) throw new Error(`Duplicate pathname: ${path}`);
    else this.paths[path] = {
      method: 'GET',
      exec: next
    };
  }
  post = (path: string, next: Function) => {
    if(this.paths[path]) throw new Error(`Duplicate pathname: ${path}`);
    else this.paths[path] = {
      method: 'POST',
      exec: next
    };
  }
  put = (path: string, next: Function) => {
    if(this.paths[path]) throw new Error(`Duplicate PUT pathname: ${path}`);
    else this.paths[path] = {
      method: 'PUT',
      exec: next
    };
  }

  delete = (path: string, next: Function) => {
    if(this.paths[path]) throw new Error(`Duplicate pathname: ${path}`);
    else this.paths[path] = {
      method: 'PUT',
      exec: next
    };
  }

  listen = (options: object, next?: Function) => {
    let copy: any = options;
    if(!copy.port) throw new Error('Missing listen PORT');
    if(!copy.hostname) copy.hostname = '127.0.0.1';

    http.createServer((req,res) => {
      let path = url.parse(req.url).pathname;
      if(req.method == this.paths[path].method) this.paths[path].exec(req, res);
    }).listen(copy.port, copy.hostname, () => {
      if(next) next;
    });
  }
}

const Router = new Routing();

export { Router }