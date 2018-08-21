import { Service } from 'egg';
import crypto = require('crypto');

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * 注册用户
   * @param user - your name
   */
  public async register(user) {
    let userData;
    const md5 = crypto.createHash('md5');
    if (user.provider === 'github') {
      const u = user.profile;
      userData = {
        username: u.username,
        password: md5.update('123456').digest('hex'),
        email: u.emails[0].value,
        headUrl: u.photos[0].value,
        userId: this.ctx.helper.getRandomId(),
      };
    }
    this.ctx.logger.debug('用户的数据', userData);
    const res = await this.ctx.model.User.create(userData);
    const auth = {
      userId: userData.userId,
      provider: user.provider,
      uid: user.id,
    };
    const authRes = await this.ctx.model.Authorization.create(auth);
    this.ctx.logger.debug('结果', res);
    this.ctx.logger.debug('authRes结果', authRes);
    if (res && authRes) {
      return res;
    }
  }
  /**
   * 是否登陆
   */
  public async checkLogin() {

  }
}
