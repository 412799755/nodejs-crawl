var express = require('express')
var app = express()
var fs = require("fs");
var path = require('path');
var multer  = require('multer');

app.use(express.json({
    inflate:true,
    limit:'100kb',
    reviver:null,
    strict:true,
    type:'application/json',
    verify:undefined
}))
app.use(express.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));
//  主页输出 "Hello World"
app.get('/', function (req, res) {
    console.log("主页 GET 请求");
    res.send('Hello GET');
})
// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
})
//post
app.post('/process_post', function (req, res) {
    console.log(req.body)
    // // 输出 JSON 格式
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    };
    console.log(response,JSON.stringify(response));
    res.set({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST',
        'Access-Control-Allow-Headers':'x-requested-with,content-type'
    })
    // res.end(JSON.stringify('fwa'));
    res.end(JSON.stringify(response));
})
//文件上传
app.post('/file_upload', function (req, res) {

    console.log(req.files[0]);  // 上传的文件信息

    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if( err ){
                console.log( err );
            }else{
               var  response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                };
            }
            console.log( response );
            res.end( JSON.stringify( response ) );
        });
    });
})

//静态资源
var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
}
app.use('/public', express.static(path.join(__dirname, '../public')));


var server = app.listen(8081,'172.18.0.113', function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
