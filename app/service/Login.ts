import { Service } from 'egg';
import crypto = require('crypto');

/**
 * Test Service
 */
export default class Login extends Service {

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
        type: 'admin',
        userId: this.ctx.helper.getRandomId(),
      };
    }
    this.ctx.logger.info('用户的数据', userData);
    const auth = {
      userId: userData.userId,
      provider: user.provider,
      uid: user.id,
    };
    const [res, authRes] = await Promise.all([
      this.ctx.model.User.create(userData),
      this.ctx.model.Authorization.create(auth),
    ]);
    // const res = await this.ctx.model.User.create(userData);
    // const authRes = await this.ctx.model.Authorization.create(auth);
    this.ctx.logger.info('结果', res);
    this.ctx.logger.info('authRes结果', authRes);
    if (res && authRes) {
      return res;
    }
  }
  /**
   * 登陆逻辑
   * @param param0 email
   * @param param1 password
   */
  public async login({email, password}) {
    const md5 = crypto.createHash('md5');
    const p: string = md5.update(password).digest('hex');
    return await this.ctx.model.User.findOne({email, password: p});
  }
  /**
   * 是否登陆
   */
  // public async checkLogin() {

  // }
}
