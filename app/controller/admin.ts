import { Controller } from 'egg';

export default class AdminController extends Controller {
  public async index() {
    const { ctx } = this;
    await ctx.render('admin/index.nj');
  }
}