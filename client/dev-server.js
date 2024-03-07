require('dotenv').config();
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: '.', conf: { publicRuntimeConfig: { PORT: process.env.NEXT_PUBLIC_PORT || 3000 } } });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  require('http')
    .createServer((req, res) => {
      handle(req, res);
    })
    .listen(process.env.NEXT_PUBLIC_PORT || 3005, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${process.env.NEXT_PUBLIC_PORT || 3000}`);
    });
});