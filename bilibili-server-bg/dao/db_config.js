/*
封装操作数据库的通用API
*/
const mysql = require('mysql');

exports.base = (sql, data, callback) => {
    //创建数据库连接
    const conn = mysql.createConnection({
        host: 'localhost',
        user: "root",
        password: 'root',
        database: "bilibili_cheer"
    });

    // 连接数据库
    conn.connect();

    var fn01 = function(error, results, fields) {
        if (error) throw error;
        callback(results);
        console.log("数据库连接成功");
    }
    
    //操作数据库,数据库操作也是异步的
    conn.query(sql, data, fn01);

    //关闭数据库
    conn.end();
}