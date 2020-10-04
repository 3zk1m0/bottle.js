const bottle = require('../dist/index');
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