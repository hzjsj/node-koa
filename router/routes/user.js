const KoaRouter = require('koa-router')

const router = new KoaRouter()

router.get('/login', async ctx => {
    //把 login.html 文件渲染
    await ctx.render('login',{
        title: '登入'
    })
})

router.post('/login', async ctx => {
    ctx.body = ctx.request.body
})

router.get('/register', async ctx =>{
    //把 register.html 文件渲染
    await ctx.render('register',{
        title: '注册'
    })
})

router.post('/register', async ctx =>{
    ctx.body = ctx.request.body
})
router.get('/logout', async ctx =>{
    ctx.body = 'logout api'
})
module.exports =router