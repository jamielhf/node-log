import { Controller } from 'egg';

export default class UserController extends Controller {
  public async index () {
    this.logger.info('session', this.ctx.session);
    const response = {
      status: 200,
      data: {},
      msg: 'ok',
    };
    if (this.ctx.session.user) {
      const {type, email, userId, headUrl, username} =  this.ctx.session.user;
      response.data = {
        type,
        email,
        userId,
        headUrl,
        username,
      };
    } else {
      response.msg = '未登录';
      response.status = 401;
    }
    this.ctx.body = response;
  }
}
