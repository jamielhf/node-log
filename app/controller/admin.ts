import { Controller } from 'egg';

export default class AdminController extends Controller {
  public async index() {
    this.logger.debug('xx123xxx');
    await this.ctx.render('index.js');
  }
}
