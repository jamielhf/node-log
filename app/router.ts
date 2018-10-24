
export default (app) => {
  const { controller, router } = app;
  app.passport.mount('github');
  router.get('/', controller.admin.index);
  router.post('/api/login', controller.login.login);
  router.get('/api/logout', controller.login.logout);
  app.router.resources('user', '/api/user', app.controller.user);

};
