import assert = require('assert');
// app.js
module.exports = (app) => {
  app.passport.verify(async (ctx, user) => {
    // 检查用户
    assert(user.provider, 'user.provider should exists');
    assert(user.id, 'user.id should exists');
    // 从数据库中查找用户信息
    //
    // Authorization Table
    // column   | desc
    // ---      | --
    // provider | provider name, like github, twitter, facebook, weibo and so on
    // uid      | provider unique id
    // user_id  | current application user id
    const auth = await ctx.model.Authorization.findOne({
      uid: user.id,
      provider: user.provider,
    });
    if (auth) {
      const existsUser = await ctx.model.User.findOne({ userId: auth.userId });
      if (existsUser) {
        ctx.logger.debug('已经存在用户信息' , existsUser);
        return existsUser;
      }
    }

    // 调用 service 注册新用户
    const newUser = await ctx.service.user.register(user);
    return newUser;
  });

  // // 将用户信息序列化后存进 session 里面，一般需要精简，只保存个别字段
  // app.passport.serializeUser(async (ctx, user) => {
  // // 处理 user
  // // ...
  // // return user;
  // });

  // // 反序列化后把用户信息从 session 中取出来，反查数据库拿到完整信息
  // app.passport.deserializeUser(async (ctx, user) => {
  // // 处理 user
  // // ...
  // // return user;
  // });
};
