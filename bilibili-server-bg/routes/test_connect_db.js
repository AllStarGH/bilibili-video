var mysql=require('mysql');

var conn=mysql.createConnection({
	host:'localhost',
	user:"root",
	password:'root',
	database:"bilibili_cheer"
});

conn.connect();

var line01='SELECT * FROM t_user WHERE id >= 1;';

var fn01=function (error,results,fields) {
	if (error) throw error;
	console.log("This Solution Is:"+results[0].username);

	for (var i = results.length - 1; i >= 0; i--) {
		console.log(results[i]);
	}
}

conn.query(line01,fn01);