import { Controller } from 'egg';

export default class AdminController extends Controller {
  public async index() {
    this.logger.debug('后台管理主页');
    this.ctx.body = {
      a: 123,
    };
  }
}
