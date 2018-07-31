// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Admin from '../../../app/controller/admin';
import Home from '../../../app/controller/home';
import User from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    admin: Admin;
    home: Home;
    user: User;
  }
}
