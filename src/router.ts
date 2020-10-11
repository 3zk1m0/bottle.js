import * as http from 'http';
import * as url from 'url';

import { Parse } from './parser'

class Routing {
  public paths: any;

  constructor() {
    this.paths = {
      GET: {},
      POST: {},
      PUT: {},
      DELETE: {}
    };
  }

  get = (path: string, ...next: Function[]) => {
    if(this.paths['GET'][path]) throw new Error(`Duplicate GET pathname: ${path}`);
    else this.paths['GET'][path] = {
      method: 'GET',
      exec: (req: any, res: any) => next.forEach((n: Function) => n(req, res))
    };
  }
  post = (path: string, ...next: Function[]) => {
    if(this.paths['POST'][path]) throw new Error(`Duplicate POST pathname: ${path}`);
    else this.paths['POST'][path] = {
      method: 'POST',
      exec: (req: any, res: any) => next.forEach((n: Function) => n(req, res))
    };
  }
  put = (path: string, ...next: Function[]) => {
    if(this.paths['PUT'][path]) throw new Error(`Duplicate PUT pathname: ${path}`);
    else this.paths['PUT'][path] = {
      method: 'PUT',
      exec: (req: any, res: any) => next.forEach((n: Function) => n(req, res))
    };
  }

  delete = (path: string, ...next: Function[]) => {
    if(this.paths['DELETE'][path]) throw new Error(`Duplicate DELETE pathname: ${path}`);
    else this.paths['DELETE'][path] = {
      method: 'DELETE',
      exec: (req: any, res: any) => next.forEach((n: Function) => n(req, res))
    };
  }

  listen = (options: object, next?: Function) => {
    let copy: any = options;
    if(!copy.port) throw new Error('Missing listen PORT');
    if(!copy.hostname) copy.hostname = '127.0.0.1';

    http.createServer((req,res) => {
      let path = url.parse(req.url).pathname;
      let method = req.method;
      if(this.paths[method][path]) Parse(req, res, this.paths[method][path].exec);
    }).listen(copy.port, copy.hostname, (...d: any) => {
      if(next) next(d);
    });
  }
}

const Router = new Routing();

export { Router }
