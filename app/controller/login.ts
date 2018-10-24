import { Controller } from 'egg';

export default class LoginController extends Controller {
  /**
   * 登陆
   */
  public async login() {
    this.logger.info('登陆提交的参数', this.ctx.request.body);
    this.logger.info('session', this.ctx.session);
    const param = this.ctx.request.body;
    const {email = '', password = ''} = param;
    const response = {
      status: 200,
      data: {},
      msg: 'ok',
    };
    if (email && password) {
      const res = await this.service.login.login({email, password});
      if (res) {
        this.logger.info('用户信息', res);
        response.data = {
          username: res.username,
          userId: res.userId,
          headUrl: res.headUrl,
          email: res.email,
          type: res.type,
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
  /**
   * 退出
   */
  public async logout() {
    this.ctx.session = {};
    this.ctx.body = {
      status: 200,
      msg: 'ok',
    };
  }
}
