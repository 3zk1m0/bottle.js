# BottleJS
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fbottlejs%2Fbottle.js.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fbottlejs%2Fbottle.js?ref=badge_shield) ![Repository Size](https://img.shields.io/github/repo-size/bottlejs/bottle.js) ![NPM Version](https://img.shields.io/npm/v/@bottlejs/bottle.js)

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

### For Hacktoberfest:

Hey there people coming in looks of getting your Hacktoberfest pull requests up! There are several features that I don't really know how to add but are extremely important to Bottle! Note, you don't have to completely make this on your own! You can just get started and have other build on top of your work and even add more to it later, any contribution helps!

#### Middleware

**NOTE: BASIC SUPPORT FOR MIDDLEWARE HAS BEEN ADDED, YOU CAN STILL ADD ON TO IT**

One feature that we need is middleware! Middleware would allow for a much better programming enviornment and allowing creators to publish 'extentsions' of the package! Here's an example of how middleware would work:

```js
const bottle = require('@bottlejs/bottle.js');
const router = bottle.Router;

function yourMiddleware(req, res, next) {
  console.log(req);
}

router.get('/', yourMiddleware, (req, res) => {
  res.send('hi!');
});

// listen
```

#### Template Rendering

This is another major feature that Bottle is currently missing! This would allow for extentsions that would help with templating your views so you don't have to generate a whole new HTML file using `fs` and whatever other packages may be required. Here's an example of how template rendering would work:

(server.js)
```js
const bottle = require('@bottlejs/bottle.js');
const router = bottle.Router;

router.renderer(function(req, res, next){
  // template engine code
});

router.get('/', yourMiddleware, (req, res) => {
  res.render('file.your_template_language', {message:'This is data!'});
});
```

(file.your_template_language)
```html
{{message}}
```

#### Documentation

As of right now, Bottle has no documentation other than this README file, and that's not a good thing! If you would like to create documentation please create a pull request and add all of your HTML/CSS/JS code into a directory named `docs`! This directory will be reviewed and if the documentation (or the layout0 is good enough we will most likely merge! If you would like to take it a step further you could try and build a Node.js HTTP server (or a Bottle server) in a directory named `webserver` that would take all of the files in the `docs` folder and render them as HTML (from Markdown files) with an auto-generated sidebar.



Made with ❤️ by @bottlejs & contributors! 


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fbottlejs%2Fbottle.js.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fbottlejs%2Fbottle.js?ref=badge_large)
