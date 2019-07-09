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

app.get('/newTask/getClassList', function (req, res) {
    console.log(req.body)
    // // 输出 JSON 格式
    var response = {
        'data':[{ name: '501班',id:1 }, { name: '502班',id:2 },{ name: '501班',id:3 }, { name: '502班',id:4 },],
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

app.get('/newTask/getPeopleByClassId', function (req, res) {
    console.log(req.query.id)
    // // 输出 JSON 格式
    let result = [[{ name: '张三', id: 1}, { name: '李四', id: 2 }],[{ name: '张分割', id: 3}, { name: '李四', id: 4 }]
        ,[{ name: 'gw ', id: 5}, { name: '李四', id: 6 }]  ,[{ name: '福娃 ', id: 7}, { name: '李四', id: 8 }]
    ]
    var response = {
        'data':result[+req.query.id-1],
        'code':0,
        status:'0'
    };
    // console.log(response,JSON.stringify(response));
    res.set({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST,GET',
        'Access-Control-Allow-Headers':'x-requested-with,content-type'
    })
    res.send(JSON.stringify(response));
})
