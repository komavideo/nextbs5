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
