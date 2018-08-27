import { Controller } from 'egg';

export default class UserController extends Controller {
  public async login() {
    this.logger.debug('登陆提交的参数', this.ctx.request.body);
    this.logger.debug('session', this.ctx.session);
    const param = this.ctx.request.body;
    const {email = '', password = ''} = param;
    const response = {
      status: 200,
      data: {},
      msg: 'ok',
    };
    if (email && password) {
      const res = await this.service.user.login({email, password});
      if (res) {
        this.logger.debug('用户信息', res);
        response.data = {
          username: res.username,
          userId: res.userId,
          headUrl: res.headUrl,
          email: res.email,
        };
        this.ctx.session.user = res;
      } else {
        response.msg = '用户不存在';
        response.status = 404;
      }
    } else {
      response.msg = '请求参数不正确';
      response.status = 404;
    }

    this.ctx.body = response;
  }
}
