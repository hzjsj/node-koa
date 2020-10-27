const KoaRouter = require('koa-router')

const router = new KoaRouter()

router.post('/login', async ctx => {
    ctx.body = 'login api'
})

router.post('/register', async ctx =>{
    ctx.body = 'register api'
})
router.get('/logout', async ctx =>{
    ctx.body = 'logout api'
})
module.exports =router