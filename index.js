const app = require('./koa')
const conf = require('./config')

const views = require('koa-views')

//配置模板引擎时，放在 router 引入之前
app.use(views('./views',{ map :{ html:'ejs' } }))

const router = require('./router')

app.use(ctx =>{
    ctx.body = 'hello koa.js'
})

app.listen(conf.server.PORT,()=>{
    console.log(`server run at http://localhost:${conf.server.PORT}`)
})