# hackernews-async-ts

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+

### todo

[ ] 登陆功能
[ ] 注册功能
[ ] 后台界面先用antd-pro构建 https://pro.ant.design/docs/getting-started-cn

### bug记录

```bash
ERROR 11300 nodejs.ENOENTError: spawn roadhog ENOENT
```

全局安装loadhog后就没有这个问题，在当前的文件夹安装就跑不动

## mongodb启动

```bath
cd /usr/local/mongodb/bin/
sudo ./mongod
```