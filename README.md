Next.js 工程模版
=================

## 项目做成

```bash
$ npx create-next-app@latest nextbs5
$ cd nextbs5
# React + Bootstrap 5
$ npm install react-bootstrap bootstrap@5.1.3
# Next.js 中间件
$ npm install next-connect
# 字符串校验模块
$ npm install validator
# 口令加密模块
$ npm install bcrypt
# NextAuth 认证模块
$ npm install next-auth
# Redux 状态管理(真的不好用, 等待 Recoil)
# $ npm install redux redux-thunk redux-devtools-extension react-redux next-redux-wrapper
```

## 从 Github 取得运行

```bash
$ git clone https://github.com/komavideo/nextbs5
$ cd nextbs5
# 删除Git信息, 单独使用场合
# $ rm -fr .git
$ npm install
$ npm run dev
```

## Github

*本地加入 Github*

```bash
git remote add origin https://github.com/komavideo/nextbs5.git
git branch -M main
git push -u origin main
```

## Restful API 测试用具

https://reqbin.com/

## Docker

```bash
# 安装依赖包
npm install
# 打包编译
npm run build
# 编译 Docker 镜像
docker build -t komavideo/microservices-nextbs5:v1 .
docker image ls
# 删除 Docker 镜像
docker image rm komavideo/microservices-nextbs5:v1
# 进入容器确认
docker run -it --rm komavideo/microservices-nextbs5:v1 sh
# 本地执行
docker run --rm --name microservices-nextbs5 -p 3000:3000 komavideo/microservices-nextbs5:v1
# 推送 DockerHub
docker push komavideo/microservices-nextbs5:v1
```
