
/** mvc模式的base controller导入**/
// app/controller/home.js
const Controller = require('egg').Controller;


/**
 * HomeController
 */
class HomeController extends Controller {

  /**
   * 首页控制
   * @returns {Promise<void>}
   */
  async index() {
    this.ctx.body = 'Hello world';
    
  }

  /**
   * 接口地址
   * @returns {Promise<void>}
   */
  async demo() {
    const ctx = this.ctx;
    const newsList = await ctx.service.news.query();
    console.log("============================");
    console.log(newsList);
    this.ctx.body =newsList;
  }
}

module.exports = HomeController;