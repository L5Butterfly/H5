// app/controller/news.js
const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list3() {
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' },
        { id: 3, title: 'this is news 3', url: '/news/3' },
        { id: 4, title: 'this is news 4', url: '/news/4' },
        { id: 5, title: 'this is news 5', url: '/news/5' }
      ]
    };
    await this.ctx.render('news/list.tpl', dataList);
  }


  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);
    await ctx.render('news/list.tpl', { list: newsList });
  }
}

module.exports = NewsController;