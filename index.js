const app = require('./koa')
const conf = require('./config')

//配置模板引擎时，放在 router 引入之前
const views = require('koa-views')
app.use(views('./views',{ map :{ html:'ejs' } }))

//处理请求数据
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

const router = require('./router')

app.use(ctx =>{
    ctx.body = 'hello koa.js'
})

app.listen(conf.server.PORT,()=>{
    console.log(`server run at http://localhost:${conf.server.PORT}`)
})