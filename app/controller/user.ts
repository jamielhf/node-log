import { Controller } from 'egg';

export default class UserController extends Controller {
  public async login() {
    this.logger.debug(this.ctx.request.body);
    return this.ctx.body = {
      status: 200,
      msg: '111',
    };
  }
}
