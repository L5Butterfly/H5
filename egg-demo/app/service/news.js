const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    // read config
    const { serverUrl, pageSize } = this.config.news;

    // use build-in http client to GET hacker-news api
    const newsList= await this.ctx.curl(`${serverUrl}/new/list`, {
      dataType: 'json',
    });
    console.log(newsList);
    return newsList.data;
  }


  // mysql的curd操作
  async query() {
    // 单实例可以直接通过 app.mysql 访问
    //const newsList= await app.mysql.query(sql, values); 
    //获取一条数据
    const user2 = await this.app.mysql.get('tb_global_config', { id: 11 });
    console.log(user2);
    //查询表数据
    const user = await this.app.mysql.query('select * from tb_global_config');
    console.log(user);

    //插入数据-tb_test
    const result = await this.app.mysql.insert('tb_test', { id: 90 }); 
  
    // 判断插入成功
    const insertSuccess = result.affectedRows === 1;
    console.log(insertSuccess);
    return user;
  }

}




module.exports = NewsService;