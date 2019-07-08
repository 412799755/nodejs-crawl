var express = require('express')
var app = express()
var fs = require("fs");
var path = require('path');
var util = require('util');

app.use(express.json({
    inflate:true,
    limit:'100kb',
    reviver:null,
    strict:true,
    type:'application/json',
    verify:undefined
}))
app.use(express.urlencoded({ extended: false }));

var server = app.listen(8888,'172.18.0.113', function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
app.get('/list', function (req, res) {
    console.log(req.body)
    // // 输出 JSON 格式
    var response = {
        'data':[{status:1},{status:2}],
        'code':0,
        status:'0'
    };
    console.log(response,JSON.stringify(response));
    res.set({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST,GET',
        'Access-Control-Allow-Headers':'x-requested-with,content-type'
    })
    // res.end(JSON.stringify('fwa'));
    // res.end(JSON.stringify(response));
    // res.send(JSON.stringify(response));
    res.send(JSON.stringify(response));
})
