import { DefaultConfig } from './config.default';

export default () => {
  const config: DefaultConfig = {};
  config.assets = {
    url: 'http://127.0.0.1:7001',
  };
  return config;
};
