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
