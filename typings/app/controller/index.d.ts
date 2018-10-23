// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Admin from '../../../app/controller/admin';
import Login from '../../../app/controller/login';
import User from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    admin: Admin;
    login: Login;
    user: User;
  }
}
