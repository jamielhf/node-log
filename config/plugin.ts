import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // assets: {
  //   enable: true,
  //   package: 'egg-view-assets',
  // },
  cors : {
    enable: true,
    package: 'egg-cors',
  },
  passport : {
    enable: true,
    package: 'egg-passport',
  },
  mongoose : {
    enable: true,
    package: 'egg-mongoose',
  },
  passportGithub : {
    enable: true,
    package: 'egg-passport-github',
  },
};

export default plugin;
