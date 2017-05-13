/**
 * Created by qin on 2017-4-30.
 */
var Sequelize = require("sequelize");

module.exports  = new Sequelize(
    'foxmooc', // 数据库名
    'root',   // 用户名
    '',   // 用户密码
    {
        'dialect': 'mysql',  // 数据库使用mysql
        'host': 'localhost', // 数据库服务器ip
        'port': 3306,        // 数据库服务器端口
        'define': {
            // 字段以下划线（_）来分割（默认是驼峰命名风格）
            'underscored': true
        }
    }
);