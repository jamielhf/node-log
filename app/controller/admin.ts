import { Controller } from 'egg';

export default class AdminController extends Controller {
  public async index() {
    this.ctx.body = await this.ctx.model.User.find({});
  }
}
