import * as url from 'url';

function Parse(req: any, res: any, next: Function) {
  let builder: any;
  let use: any = {};

  req.query = url.parse(req.url).query;
  req.statusCode = 200;
  req.response = res;
  res.request = req;

  res.setHeader('x-powered-by', 'bottle.js')

  res.json = (json: any) => {
    res.setHeader('Content-Type', 'application/json');
    let string: any = JSON.stringify(json);
    res.end(string);
  }

  res.sendFile = (filename: string) => {
    const fs = require('fs');
    let filesplit = filename.split('.');
    if(filesplit.length <= 1) {
      res.setHeader('Content-Type', 'text/plain');
      res.end(fs.readFileSync(filename).toString());
    } else {
      let filetype = filesplit[filesplit.length - 1];
      if(filetype == 'json') {
        res.setHeader('Content-Type', 'application/json');

        let raw: any = fs.readFileSync(filename);
        let data: any = JSON.parse(raw);
        let string: any = JSON.stringify(data);

        res.end(string);
      } else {
        console.log(filetype);
        console.log(filesplit);
        res.setHeader('Content-Type', `text/${filetype}`);
        res.end(fs.readFileSync(filename).toString());
      }
    }
  }
  
  if (req.method) {
    let body: any = [];
    req.on('data', (chunk: any) => {
      body.push(chunk);
    }).on('end', () => {
      builder = Buffer.concat(body).toString();
      let split: any = builder.split('&');
      for(let i = 0; i < split.length; i++) {
        let parts = split[i].split('=');
        let part = parts[0];
        parts.splice(0, 1)
        let value = parts.join('=');
        use[part] = value;
      }
      req.body = use;
      next(req, res);
    });
  } else {
    next(req, res);
  }
}

export { Parse }