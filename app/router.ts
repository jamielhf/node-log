
export default (app) => {
  const { controller, router } = app;
  app.passport.mount('github', {
    successRedirect: '/',
  });
  router.get('/', controller.admin.index);
  router.get('/api/user/login', controller.user.login);
};
