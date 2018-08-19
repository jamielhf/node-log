import { DefaultConfig } from './config.default';

export default () => {
  const config: DefaultConfig = {};

  config.logger = {
    level: 'DEBUG',
    consoleLevel: 'DEBUG',
  };
  return config;
};
