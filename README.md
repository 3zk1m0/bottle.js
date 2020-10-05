# BottleJS
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fbottlejs%2Fbottle.js.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fbottlejs%2Fbottle.js?ref=badge_shield)


Bottle.js is a fast and lightweight Node.js HTTP server framework.

### Installation

Using NPM

```
npm i @bottlejs/bottle.js
```

### Using

Using bottle.js is easy! All you have to do is initialize the router, then add methods! Heres an example:

`server.js`
```js
const bottle = require('bottle.js');
const router = bottle.Router;

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

router.listen({
  port: 3000
}, () => {
  console.log('Running! :o');
});
```

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```

### Important Features

  - `bottle.Router`: router, used for routing and listening servers
  - `req.query`: Get the query of a request
  - `req.body`: Get the body of a request
  - `res.sendFile(filepath)`: Send a file's contents and headersd as a response
  - `res.json(json)`: Send json content as a response, good for making APIs

### Dev Tools

  - `typescript`: Great for a better development environment and better output code
  - `nodemon`: Great for restarting the srver every time the new typescript / file code is recompiled or saved
  - `visual studio code`: Great IDE for programming

### Notice

Please note that this project is currently in progress and not all stated features are finished, you should avoid using Bottle.js in production as of this time, thank you.

## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fbottlejs%2Fbottle.js.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fbottlejs%2Fbottle.js?ref=badge_large)