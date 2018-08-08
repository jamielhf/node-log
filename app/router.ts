import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

   // 挂载鉴权路由
  app.passport.mount('github');

  router.get('/', controller.admin.index);
};
