const bottle = require('../dist/index');
const router = bottle.Router;

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hi!</h1><form action="/cool" method="POST"><input name="value" placeholder="name"/><input name="other" /><button>Epic POST request!</button></form>');
});

router.get('/filetest', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

router.post('/cool', (req, res) => {
  res.json(req.body)
})

router.listen({
  port: 3000
}, () => {
  console.log('Running! :o');
})