const app = require('./koa')

const conf = require('./config')
const router = require('./router')
app.use(ctx =>{
    ctx.body = 'hello koa.js'
})

app.listen(conf.server.PORT,()=>{
    console.log(`server run at http://localhost:${conf.server.PORT}`)
})