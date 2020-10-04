# bottle.js

Bottle.js is a fast and lightweight Node.js HTTPS server framework.

### Installation

Using NPM

```
npm i bottle.js
```

### Using

Using bottle.js is easy! All you have to do is initialize the router, then add methods! Heres an example:

`server.js`
```js
const bottle = require('bottle.js');
const app = bottle.Router();

app.get('/', (req, res) => {
  res.send('Simple GET request using bottle.js!');
});

app.listen(3000, e => {
  if(e) throw e;
  console.log('Your awesome bottle.js server is running on port 3000!');
});
```