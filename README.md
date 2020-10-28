# node-koa

学习 node 的 koa.js

### 一、项目初始化

进入到项目目录，在命令行执行

```
npm init -y
npm install  koa -S
```

安装 nodemon 实现自动保存、重启服务

```
npm install nodemon -S
```

配置 package.json 文件

```
 "scripts": {
    "serve": "nodemon index.js"
  }
```

重启服务

```
npm run serve
```

### 二、路由自动化注册

安装 koa-router 和 require-directory

```
npm install koa-router -S
npm install require-directory -S
```

### 三、Koa2 使用 ejs 模板引擎

安装 koa-views 和 ejs

```
npm install koa-views  -S
npm install  ejs -S
```

配置模板引擎时，放在 router 引入之前

```
const views = require('koa-views')
app.use(views('./views',{ map :{ html:'ejs' } }))
```

### 四、表单提交和数据处理

使用 cdn 引入 axios

```
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

安装 koa-bodyparser 处理数据

```
npm install koa-bodyparser -S
```

### 五、添加配置文件，部署到云开发

新建 cloudbaserc.json 文件

```
{
  "envId": "",
  "framework": {
    "plugins": {
      "server": {
        "use": "@cloudbase/framework-plugin-node",
        "inputs": {
          "entry": "index.js",
          "path": "/",
          "name": "node-koa"
        }
      }
    }
  }
}

```

安装 cloudbase framework 并部署到腾讯云云开发

```
npm install -g @cloudbase/cli@latest
cloudbase framework deploy
```
