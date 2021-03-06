import Koa from 'koa';
import next from 'next';
import Router from 'koa-router';

const port = 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  router.get('/todo', async ctx => {
    await app.render(ctx.req, ctx.res, '/todo', ctx.query)
    ctx.respond = false
  })

  // router.get('/', async ctx => {
  //   await app.render(ctx.req, ctx.res, '/index', ctx.query)
  //   ctx.respond = false
  // })

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
