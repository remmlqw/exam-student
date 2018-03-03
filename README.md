# 在线考试系统（学生端）

**项目采用 Vue.js2.5 + vue-router + Element UI**

**开发环境使用 vue-cli**

***

```js
  **项目演示地址 http://liqianwen.remmli.com:8081/#/login**
```




**注意：演示地址并不是项目真实线上地址，只是演示而已~ 服务器带宽太低，所以打开较慢...请谅解**

***

前言
> 这个是本系统的学生端 教师端请点击：[教务管理+在线考试系统（教师端）](https://github.com/remmlqw/exam-teacher)

### 功能模块
- 登录

- 主页面
    - 左边菜单
    - 顶部导航
    - 考试须知

- 在线考试（后台判断该学生是否有将要进行的考试）

- 个人中心
    - 修改密码

### 代码目录
```js
+-- build/                                  ---项目构建(webpack)相关代码
+-- config/                                 ---项目开发环境配置相关代码
+-- node_modules/                           ---项目依赖的模块
+-- src/                                    ---源码目录
|   +-- assets                              ---资源目录
|   |    --- ...
|   +-- components                          ---vue公共组件
|   |    +-- httpServer                     ---http请求封装组件
|   |    |    --- index.js
|   +-- router                              ---前端路由
|   |    --- index.js
|   +-- containers                          ---页面目录
|   |    +-- login                          ---登录页面
|   |    |    ---login.vue
|   |    +-- main                           ---主界面
|   |    |    +-- homepage                  ---首页
|   |    |    |    --- index.vue
|   |    |    +-- examCard                  ---答题页
|   |    |    |    --- index.vue
|   |    |    +-- personalCenter            ---个人中心
|   |    |    |    --- changePass.vue       ---修改密码
|   |    |    --- main.vue
|   --- App.vue                             ---页面入口文件（根组件）
|   --- main.js                             ---程序入口文件（入口js文件
+-- static/                                 ---静态文件，比如一些图片，json数据等
--- .babelrc                                ---ES6语法编译配置
--- .editorconfig                           ---定义代码格式
--- .gitignore                              ---git上传需要忽略的文件格式
--- index.html                              ---入口页面
--- package.json                            ---项目基本信息
--- README.md                               ---项目说明                              
```

### 主要功能截图
**登录**

![Image text](https://raw.githubusercontent.com/remmlqw/img-folder/master/s_login.png)

**首页**

![Image text](https://raw.githubusercontent.com/remmlqw/img-folder/master/s_homepage.png)


**在线考试**

![Image text](https://raw.githubusercontent.com/remmlqw/img-folder/master/s_exam.png)
![Image text](https://raw.githubusercontent.com/remmlqw/img-folder/master/s_dati_card.png)

**个人中心**
![Image text](https://raw.githubusercontent.com/remmlqw/img-folder/master/s_person.png)


### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
