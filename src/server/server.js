/*
* @Author: sznews
* @Date:   2019-01-08 14:53:45
* @Last Modified by:   sznews
* @Last Modified time: 2019-01-08 17:12:53
*/
var express=require('express');
var app=express();
var sql=require('mssql');

// sqlserver connect config
var config={
	user:'sa',
	password:'Sadmin@sznews',
	server:'172.16.142.55',
	database:'Test',
};

app.get('/api/user',function(req,res){
	sql.connect(config).then(function(){
		new sql.Request()
			// .input('input_param',sql.Int,1)
			.query('select * from TestEF5').then(function(recordset){
				console.dir(recordset);
				res.json(recordset);
			},function(err){
				console.log(err);
				res.send(err);
				sql.close();
			}).then(function (){
				sql.close();
			});
	}).catch(function(err){
		console.log(err);
		res.send(err);
	});
});
app.listen(8080,function(){
	console.log('app listen on 8080');
})