// app/router.js
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/test', controller.home.demo);
    router.get('/news', controller.news.list);
    router.get('/news/list', controller.news.list);
  };