<img src="./assets/logo.svg" alt="bottle.js (Logo)" width="150px" height="150px"/>

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
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  res.end('<h1>Hi!</h1>');
});

router.listen({
  port: 3000
}, () => {
  console.log('Running! :o');
})
```

### Notice

Please note that this project is currently in progress and not all stated features are finished.