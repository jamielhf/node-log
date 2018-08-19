// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Authorization from '../../../app/model/Authorization';
import User from '../../../app/model/User';

declare module 'sequelize' {
  interface Sequelize {
    Authorization: ReturnType<typeof Authorization>;
    User: ReturnType<typeof User>;
  }
}
