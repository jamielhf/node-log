import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

import path = require('path');

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// app special config scheme
export interface BizConfig {
  sourceUrl: string;
}

export default (appInfo: EggAppInfo) => {
  const config = {

  } as PowerPartial<EggAppConfig> & BizConfig;

  // app special config
  config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${appInfo.name}`;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1532529580752_5059';

  // add your config here
  config.middleware = [];
  config.view = {
    root: path.join(appInfo.baseDir, 'app/admin'),
    mapping: {
      '.js': 'assets',
    },
  };
  // github账号
  config.passportGithub = {
    key: '741e6d458f9c8f27fb6f',
    secret: 'c1465ac92cf1fef12a95f282b8de1d39dd4dfe8a',
    // callbackURL: '/passport/github/callback',
    // proxy: false,
  };
// 数据库配置
  config.mongoose = {
    url: 'mongodb://127.0.0.1/logDb',
    options: {},
  };
  config.assets = {
    publicPath: '/public/',
    devServer: {
      debug: false,
      command: 'roadhog dev',
      port: 8000,
      env: {
        BROWSER: 'none',
        ESLINT: 'none',
        SOCKET_SERVER: 'http://127.0.0.1:8000',
        PUBLIC_PATH: 'http://127.0.0.1:8000',
      },
    },
  };

  return config;
};
