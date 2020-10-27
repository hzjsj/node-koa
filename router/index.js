const app = require('../koa')
const user = require('./routes/user')
const Router =require('koa-router')
const readDir = require('require-directory')

const visitor = (obj) => {
    //待优化，目前只支持一层
    if(obj instanceof Router){
        app.use(obj.routes())
    }
}

//第一个：固定的 module
//第二个：要读取的目录文件
//第三个：可以理解成功完成一个的回调
readDir(module, './routes', {visit:visitor} )