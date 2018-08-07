import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  assets: {
    enable: true,
    package: 'egg-view-assets',
  },
};

export default plugin;
