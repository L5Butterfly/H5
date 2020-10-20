//<此处改为你自己的 Cookie 安全字符串>;
exports.keys = "bwcxfdz4";
// 添加 view 配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

// 添加 news 的配置项
exports.news = {
    pageSize: 5,
    serverUrl: 'http://127.0.0.1:8080',
  };


  // mysql
  exports.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '10.10.7.18',
      // 端口号
      port: '3316',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'test_db',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };