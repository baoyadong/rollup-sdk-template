## 项目介绍

项目简介及业务范围介绍
Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码，例如 library 或应用程序。

Rollup 对代码模块使用新的标准化格式，这些标准都包含在 JavaScript 的 ES6 版本中，而不是以前的特殊解决方案，如 CommonJS 和 AMD。ES6 模块可以使你自由、无缝地使用你最喜爱的 library 中那些最有用独立函数，而你的项目不必携带其他未使用的代码。ES6 模块最终还是要由浏览器原生实现，但当前 Rollup 可以使你提前体验。

https://www.rollupjs.com/guide/tools/#babel

## 同样的命令行选项将会覆盖配置文件中的选项：
 rollup -c -o bundle-2.js # `-o` is short for `--output.file`

## 注意
1. 区分开发环境和生产环境
   在开发环境我们需要sourcemap开启，配置热更新和本地服务，在生产环境我们需要sourcemap关闭，不需要热更新和本地服务，需要代码压缩等，
   所以需要区分。

2. rollup插件网站 
   (https://github.com/rollup/awesome)
   (https://github.com/rollup/plugins)



## 人员

人员列表

## 相关资料

- [PRD地址]()
- [视觉稿地址]()
- [数据接口约定]()
- [其他资料]()

## 开发环境依赖

- `nodejs`: ~4.4.0
- `fie`: ~2.0.0

## 本地开发

### hosts 绑定

```
127.0.0.1 example.taobao.com
127.0.0.1 api.example.taobao.com
```

### 开发调试

```
fie start
```

### 打包

```
fie build
```


## 项目架构及目录结构介绍

介绍一下项目使用了哪些技术,及目录结构和技术架构说明

## 升级日志


### 0.0.1

@张全蛋

- 实现了XX功能
- 支持`websocket`通信
- ...


## 其他

### 注意点

- 什么地方需要注意

### TODO

- 后面可以做的优化的地方