
export default (app) => {
  const { controller, router } = app;
  app.passport.mount('github');
  router.get('/', controller.admin.index);
  router.post('/api/user/login', controller.user.login);
};
