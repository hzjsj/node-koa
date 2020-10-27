const KoaRouter = require('koa-router')

const router = new KoaRouter()

router.post('/login', async ctx => {
    ctx.body = 'login api'
})

router.get('/register', async ctx =>{
    //把 register.html 文件渲染
    await ctx.render('register',{
        name: 'Ejs'
    })
})

router.post('/register', async ctx =>{
    ctx.body = 'register api'
})
router.get('/logout', async ctx =>{
    ctx.body = 'logout api'
})
module.exports =router