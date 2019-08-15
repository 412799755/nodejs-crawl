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

// Enable CORS from client-side
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials,cache-control");
    res.header("Access-Control-Allow-Credentials", "true");
    if (req.method == "OPTIONS") {
        res.sendStatus(200);
    }
    else {
        next();
    }
});


var server = app.listen(8888,'172.18.1.107', function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
app.get('/api/clock/punches/page', function (req, res) {
    console.log(req.body)
    // // 输出 JSON 格式
    var response = {
        'data':{
            "pageNum": 1,
            "pageSize": 3,
            "totalNum": 4,
            "clockPunches": [
                {
                    "id": "12345",
                    "status": 1,
                    "name": "每日阅读",
                    "totalDays": 30,
                    "process": 2,
                    "description":'暑假来啦',
                    "fileList":[
                        {
                            "fileUrl":"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
                            "fileType":1
                        },
                        {
                            "fileUrl":"https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
                            "fileType":2
                        },
                    ],
                    "videoId": "@lATPDgQ9q1D1Wy_OPw2MOs5ZPCur",
                    "videoLength":"8.403",
                    "studentNumbers": 56,
                    "beginTime": "2019-07-02",
                    "endTime": "2019-07-30"
                },
                {
                    "id": "12345",
                    "status": 2,
                    "name": "每日阅读",
                    "totalDays": 30,
                    "process": 2,
                    "description":'暑假来啦',
                    "fileList":[
                        {
                            "fileUrl":"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
                            "fileType":1
                        },
                        {
                            "fileUrl":"https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
                            "fileType":2
                        },
                    ],
                    "videoId": "@lATPDgQ9q1D1Wy_OPw2MOs5ZPCur",
                    "videoLength":"8.403",
                    "studentNumbers": 56,
                    "beginTime": "2019-07-02",
                    "endTime": "2019-07-30"
                },
                {
                    "id": "12345",
                    "status": 3,
                    "name": "每日阅读",
                    "totalDays": 30,
                    "process": 2,
                    "description":'暑假来啦',
                    "fileList":[
                        {
                            "fileUrl":"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
                            "fileType":1
                        },
                        {
                            "fileUrl":"https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
                            "fileType":2
                        },
                    ],
                    "videoId": "@lATPDgQ9q1D1Wy_OPw2MOs5ZPCur",
                    "videoLength":"8.403",
                    "studentNumbers": 56,
                    "beginTime": "2019-07-02",
                    "endTime": "2019-07-30"
                },
            ]
        },
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

app.get('/api/clock/punches/currentDay', function (req, res) {
    console.log(req.body)
    // // 输出 JSON 格式
    var response = {
        'data':[
            {
                "id": "12345",
                //打卡任务表学生主键
                "punchStudentId": "466961416480256000",
                "status": 1,
                "name": "每日阅读",
                "totalDays": 30,
                "process": 2,
                "description":'暑假来啦',
                "releasePerson": "王老师",
                "releasePersonSubject": "语文",
                "fileList":[
                    {
                        "fileUrl":"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
                        "fileType":1
                    },
                    {
                        "fileUrl":"https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
                        "fileType":2
                    },
                ],
                "videoId": "@lATPDgQ9q1D1Wy_OPw2MOs5ZPCur",
                "videoLength":"8.403",
                "studentNumbers": 56,
                "beginTime": "2019-07-02",
                "endTime": "2019-07-30"
            },
            {
                "id": "12345",
                //打卡任务表学生主键
                "punchStudentId": "466961416480256000",
                "status": 2,
                "name": "每日阅读",
                "totalDays": 30,
                "process": 2,
                "description":'暑假来啦',
                "releasePerson": "王老师",
                "releasePersonSubject": "语文",
                "fileList":[
                    {
                        "fileUrl":"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
                        "fileType":1
                    },
                    {
                        "fileUrl":"https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
                        "fileType":2
                    },
                ],
                "videoId": "@lATPDgQ9q1D1Wy_OPw2MOs5ZPCur",
                "videoLength":"8.403",
                "studentNumbers": 56,
                "beginTime": "2019-07-02",
                "endTime": "2019-07-30"
            },
        ],
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
//获取某个打卡任务的每天详情
app.get('/api/clock/punches/(\\d+)/1', function (req, res) {
    console.log(req.body)
    // // 输出 JSON 格式
    var response = {
        "code": 0,
        "status": "0",
        "data": {
            "id": "123",//clock_punch
            "name": "每日阅读",
            "releasePerson": "语文王老师",
            "releaseTime": "2019.06.09",
            "totalDays": 30,
            "process": 2,
            "fileList":[
                {
                    "fileUrl":"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
                    "fileType":1
                },
                {
                    "fileUrl":"https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
                    "fileType":2
                },
            ],
            "videoId": "@lATPDgQ9q1D1Wy_OPw2MOs5ZPCur",
            "videoLength":"8.403",
            "description":'暑假来啦',
            "studentNumbers": 56,
            "beginTime": "2019-07-02",
            "endTime": "2019-07-30",
            "punchCycles": [
                {
                    "punchCycleDay": "2019-07-1",
                    "punchedStudentNum": 55,
                    "status":1,
                },
                {
                    "punchCycleDay": "2019-07-2",
                    "punchedStudentNum": 45,
                    "status":2
                },
                {
                    "punchCycleDay": "2019-07-3",
                    "punchedStudentNum": 3,
                    "status":3
                },
                {
                    "punchCycleDay": "2019-07-1",
                    "punchedStudentNum": 21,
                    "status":1,
                },
                {
                    "punchCycleDay": "2019-07-2",
                    "punchedStudentNum": 23,
                    "status":2
                },
                {
                    "punchCycleDay": "2019-07-3",
                    "punchedStudentNum": 3,
                    "status":3
                },
                {
                    "punchCycleDay": "2019-07-1",
                    "punchedStudentNum": 21,
                    "status":1,
                },
                {
                    "punchCycleDay": "2019-07-2",
                    "punchedStudentNum": 23,
                    "status":2
                },
                {
                    "punchCycleDay": "2019-07-3",
                    "punchedStudentNum": 3,
                    "status":3
                },
                {
                    "punchCycleDay": "2019-07-1",
                    "punchedStudentNum": 21,
                    "status":1,
                },
                {
                    "punchCycleDay": "2019-07-2",
                    "punchedStudentNum": 23,
                    "status":2
                },
            ]
        }
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
app.get('/api/clock/punches/(\\d+)/2', function (req, res) {
    console.log(req.body)
    // // 输出 JSON 格式
    var response = {
        "code": 0,
        "status": "0",
        "data": {
            "id": "123",//clock_punch
            "name": "每日阅读",
            "releasePerson": "语文王老师",
            "releaseTime": "2019.06.09",
            "totalDays": 30,
            "process": 2,
            "fileList":[
                {
                    "fileUrl":"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
                    "fileType":1
                },
                {
                    "fileUrl":"https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
                    "fileType":2
                },
            ],
            "videoId": "@lATPDgQ9q1D1Wy_OPw2MOs5ZPCur",
            "videoLength":"8.403",
            "description":'暑假来啦',
            "studentNumbers": 56,
            "beginTime": "2019-07-02",
            "endTime": "2019-07-30",
            "punchCycles": [
                {
                    "punchCycleDay": "2019-07-1",
                    "punchedStudentNum": 55,
                    "status":1,
                },
                {
                    "punchCycleDay": "2019-07-2",
                    "punchedStudentNum": 45,
                    "status":1
                },
                {
                    "punchCycleDay": "2019-07-3",
                    "punchedStudentNum": 3,
                    "status":2
                },
                {
                    "punchCycleDay": "2019-07-1",
                    "punchedStudentNum": 21,
                    "status":2,
                },
                {
                    "punchCycleDay": "2019-07-2",
                    "punchedStudentNum": 23,
                    "status":3
                },
                {
                    "punchCycleDay": "2019-07-3",
                    "punchedStudentNum": 3,
                    "status":3
                },
                {
                    "punchCycleDay": "2019-07-1",
                    "punchedStudentNum": 21,
                    "status":4,
                },
                {
                    "punchCycleDay": "2019-07-2",
                    "punchedStudentNum": 23,
                    "status":4
                },
                {
                    "punchCycleDay": "2019-07-3",
                    "punchedStudentNum": 3,
                    "status":5
                },
                {
                    "punchCycleDay": "2019-07-1",
                    "punchedStudentNum": 21,
                    "status":5,
                },
                {
                    "punchCycleDay": "2019-07-2",
                    "punchedStudentNum": 23,
                    "status":5
                },
            ]
        }
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

app.get('/api/clock/punches/students', function (req, res) {
    console.log(req.body)
    // // 输出 JSON 格式
    var response = {
        "code": 0,
        "status": "0",
        "data": {
            "classList": [
                {
                    "className": "802",
                    "classId": 465551053014835200
                },
                {
                    "className": "901",
                    "classId": 465551129967730688
                },
                {
                    "className": "902",
                    "classId": 465551136515039232
                },
                {
                    "className": "903",
                    "classId": 465551143741825024
                },
                {
                    "studentList": null,
                    "className": "904",
                    "classId": 465551151413207040
                },
                {
                    "className": "905",
                    "classId": 465551158979731456
                },
                {
                    "className": "906",
                    "classId": 465551166990852096
                },
                {
                    "className": "907",
                    "classId": 465551174087614464
                },
                {
                    "className": "908",
                    "classId": 465551181146628096
                },
                {
                    "className": "909",
                    "classId": 465551188742512640
                },
                {
                    "className": "910",
                    "classId": 465551196040601600
                },
                {
                    "className": "911",
                    "classId": 465551203091226624
                },
                {
                    "className": "912",
                    "classId": 465551209890193408
                },
                {
                    "className": "913",
                    "classId": 465551219839082496
                },
                {
                    "className": "914",
                    "classId": 465551227082645504
                }
            ],
            "children": [
                {
                    "id": "201807101556000006",
                    "name": "闾佳琪",
                    "gender": 2
                },
                {
                    "id": "201807101556000005",
                    "name": "陈逸扬",
                    "gender": 2
                }
            ]
        }
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

app.get('/api/clock/punches/students/*', function (req, res) {
    console.log(123)
    // // 输出 JSON 格式
    var response = {
        'data':[
            {
                "id": "307566540117774336",
                "name": "王子洋",
                "gender": 2
            },
            {
                "id": "307566540138745856",
                "name": "陈一诺",
                "gender": 2
            },
            {
                "id": "307566540163911680",
                "name": "韩一宁",
                "gender": 2
            },
            {
                "id": "307566540180688896",
                "name": "金乐怡",
                "gender": 2
            }
        ],
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

// 添加某一打卡任务某一天打卡成果(我要打卡)
app.post('/api/clock/punches/results/add', function (req, res) {
    console.log(req.body)
    // // 输出 JSON 格式
    var response = {
        'data':true,
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
// 排行榜
app.get('/api/clock/punches/leaderboard/*', function (req, res) {
    console.log(req.query.id)
    // // 输出 JSON 格式
    var response = {
        "code": 0,
        "status": "0",
        "data": {
            "process": 14,
            "total": 29,
            "punchStudents": [
                {
                    "studentName": "林立诚",
                    "clockPunchNum": 4,
                    "studentCode": "20180739",
                    "gender": 1
                },
                {
                    "studentName": "许允上",
                    "clockPunchNum": 1,
                    "studentCode": "20180737",
                    "gender": 1
                },
                {
                    "studentName": "张源",
                    "clockPunchNum": 1,
                    "studentCode": "20180738",
                    "gender": 1
                },
                {
                    "studentName": "林立诚",
                    "clockPunchNum": 4,
                    "studentCode": "20180739",
                    "gender": 2
                },
                {
                    "studentName": "许允上",
                    "clockPunchNum": 1,
                    "studentCode": "20180737",
                    "gender": 1
                },
                {
                    "studentName": "张源",
                    "clockPunchNum": 1,
                    "studentCode": "20180738",
                    "gender": 2
                }
            ],
            "unPunchStudents": [
                {
                    "studentName": "李航宇",
                    "gender": 1
                },
                {
                    "studentName": "邬翰哲",
                    "gender":2
                },
                {
                    "studentName": "马嘉烨",
                    "gender": 1
                },
                {
                    "studentName": "李航宇",
                    "gender": 1
                },
                {
                    "studentName": "邬翰哲",
                    "gender":2
                },
                {
                    "studentName": "马嘉烨",
                    "gender": 1
                },  {
                    "studentName": "马嘉烨",
                    "gender": 1
                },
                {
                    "studentName": "李航宇",
                    "gender": 1
                },
                {
                    "studentName": "邬翰哲",
                    "gender":2
                },
                {
                    "studentName": "马嘉烨",
                    "gender": 1
                }
            ]
        }
    };
    // console.log(response,JSON.stringify(response));
    res.set({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST,GET',
        'Access-Control-Allow-Headers':'x-requested-with,content-type'
    })
    res.send(JSON.stringify(response));
})

// 获取具体某一天打卡成果详情列表详情(我要发布)
app.get('/api/clock/punches/cycles/*', function (req, res) {
    console.log(req.query.id)
    // // 输出 JSON 格式
    var response = {
        "code": 0,
        "status": "0",
        "data": {
            "punchedStudentNum": 1,
            "punchedResults": [
                {
                    "parentName": "小鹿爸爸",
                    "photoUrl":"http://iph.href.lu/94x94",
                    "description":"在暑假打卡,家长们需要监督.",
                    "fileList": [
                        {
                            "fileUrl": "http://schbrain-test.oss-cn-hangzhou.aliyuncs.com/%3A//schbrain-jl.oss-cn-hangzhou.aliyuncs.com/1008/115/1/20181115/3.png?Expires=1562916238&OSSAccessKeyId=LTAIw8YgDSMEurza&Signature=Xf7er6BprMej8oUSZj3hKW1a92c%3D",
                            "fileType": 1
                        },
                        {
                            "fileUrl": "http://schbrain-test.oss-cn-hangzhou.aliyuncs.com/%3A//schbrain-jl.oss-cn-hangzhou.aliyuncs.com/1008/115/1/20181115/3.mp4?Expires=1562916238&OSSAccessKeyId=LTAIw8YgDSMEurza&Signature=SfmqRMFx2XnVDi6kki21vqGhDm4%3D",
                            "fileType": 1
                        }
                    ],
                    "videoId": "1234567890",
                    "videoLength": "0:41",
                    "punchTime": "2019-7-12 18:30",
                    "punchResultId": "123",
                    "praised": true,
                    "praisePersonList":[
                        {
                            "commentId": "466961416480256002",
                            "personName": "知源1"
                        },  {
                            "commentId": "466961416480256003",
                            "personName": "知源2"
                        },  {
                            "commentId": "466961416480256004",
                            "personName": "知源3"
                        },  {
                            "commentId": "466961416480256005",
                            "personName": "知源4"
                        }
                    ],
                    "commentVOs": [
                        {
                            "id": "123",
                            "commentDesc": "加油",
                            "praiseStatus": true,
                            "replyPersonName": "大路老师"
                        },
                        {
                            "id": "123",
                            "commentDesc": "加油gea加油gea加油gea加油gea加油gea加油gea加油gea加油gea加油gea加油gea",
                            "praiseStatus": true,
                            "replyPersonName": "大路老师2"
                        }, {
                            "id": "123",
                            "commentDesc": "加油",
                            "praiseStatus": true,
                            "replyPersonName": "大路老师3"
                        }
                    ]
                },    {
                    "parentName": "小鹿爸爸",
                    "photoUrl":"http://iph.href.lu/94x94",
                    "description":"在暑假打卡,家长们需要监督.",
                    "fileList": [
                        {
                            "fileUrl": "http://schbrain-test.oss-cn-hangzhou.aliyuncs.com/%3A//schbrain-jl.oss-cn-hangzhou.aliyuncs.com/1008/115/1/20181115/3.png?Expires=1562916238&OSSAccessKeyId=LTAIw8YgDSMEurza&Signature=Xf7er6BprMej8oUSZj3hKW1a92c%3D",
                            "fileType": 1
                        },
                        {
                            "fileUrl": "http://schbrain-test.oss-cn-hangzhou.aliyuncs.com/%3A//schbrain-jl.oss-cn-hangzhou.aliyuncs.com/1008/115/1/20181115/3.mp4?Expires=1562916238&OSSAccessKeyId=LTAIw8YgDSMEurza&Signature=SfmqRMFx2XnVDi6kki21vqGhDm4%3D",
                            "fileType": 1
                        }
                    ],
                    "videoId": "1234567890",
                    "videoLength": "0:41",
                    "punchTime": "2019-7-12 18:30",
                    "punchResultId": "123",
                    "praised": true,
                    "praisePersonList":[
                        {
                            "commentId": "466961416480256002",
                            "personName": "知源1"
                        },  {
                            "commentId": "466961416480256003",
                            "personName": "知源2"
                        },  {
                            "commentId": "466961416480256004",
                            "personName": "知源3"
                        },  {
                            "commentId": "466961416480256005",
                            "personName": "知源4"
                        }
                    ],
                    "commentVOs": [
                        {
                            "id": "123",
                            "commentDesc": "加油",
                            "praiseStatus": true,
                            "replyPersonName": "大路老师"
                        },
                        {
                            "id": "123",
                            "commentDesc": "加油gea加油gea加油gea加油gea加油gea加油gea加油gea加油gea加油gea加油gea",
                            "praiseStatus": true,
                            "replyPersonName": "大路老师2"
                        }, {
                            "id": "123",
                            "commentDesc": "加油",
                            "praiseStatus": true,
                            "replyPersonName": "大路老师3"
                        }
                    ]
                },
            ],
            "unPunchedStudentNum": 2,
            "unPunchedResults": [
                {
                    "studentName": "李航宇",
                    "gender":1
                },
                {
                    "studentName": "邬翰哲",
                    "gender":1
                }
            ]
        }
    };
    // console.log(response,JSON.stringify(response));
    res.set({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST,GET',
        'Access-Control-Allow-Headers':'x-requested-with,content-type'
    })
    res.send(JSON.stringify(response));
})

// 添加打卡成果评论
app.post('/api/clock/punches/comments/add', function (req, res) {
    console.log(req.body)
    // // 输出 JSON 格式
    var response ={
        "code": 0,
        "status": "0",
        "data": true
    }
    // console.log(response,JSON.stringify(response));
    res.set({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST,GET',
        'Access-Control-Allow-Headers':'x-requested-with,content-type'
    })
    res.send(JSON.stringify(response));
})

// 获取我的打卡|全部打卡(我要打卡)
app.get('/api/clock/punches/my/*', function (req, res) {
    console.log(req.query.id)
    // // 输出 JSON 格式
    var response = {
        "code": 0,
        "status": "0",
        "data": {
            "punchedResults": [
                {
                    "photoUrl": null,
                    "parentName": "知源",
                    "clockPunchTime": "18:00",
                    "punchResultId": "466961416480256000",
                    "videoId": null,
                    "videoLength": null,
                    "description": "打卡成果",
                    "fileList": [],
                    "clockPunchDay": "2019-07-11",
                    "commentVOs": null,
                    "praised": false,
                    "praisePersonList": []
                },
                {
                    "photoUrl": null,
                    "parentName": "知源",
                    "clockPunchTime": "18:00",
                    "punchResultId": "466961416480256000",
                    "videoId": null,
                    "videoLength": null,
                    "description": "打卡成果",
                    "fileList": [],
                    "clockPunchDay": "2019-07-11",
                    "commentVOs": null,
                    "praised": false,
                    "praisePersonList": []
                },
                {
                    "photoUrl": null,
                    "parentName": "知源",
                    "clockPunchTime": "18:00",
                    "punchResultId": "466961416480256000",
                    "videoId": null,
                    "videoLength": null,
                    "description": "打卡成果",
                    "fileList": [],
                    "clockPunchDay": "2019-07-13",
                    "commentVOs": null,
                    "praised": false,
                    "praisePersonList": []
                },
                {
                    "photoUrl": null,
                    "parentName": "知源",
                    "clockPunchTime": "18:00",
                    "punchResultId": "466961416480256000",
                    "videoId": null,
                    "videoLength": null,
                    "description": "打卡成果",
                    "fileList": [],
                    "clockPunchDay": "2019-07-13",
                    "commentVOs": null,
                    "praised": false,
                    "praisePersonList": []
                },
                {
                    "photoUrl": null,
                    "parentName": "知源",
                    "clockPunchTime": "18:00",
                    "punchResultId": "466961416480256000",
                    "videoId": null,
                    "videoLength": null,
                    "description": "打卡成果",
                    "fileList": [],
                    "clockPunchDay": "2019-07-13",
                    "commentVOs": null,
                    "praised": false,
                    "praisePersonList": []
                },
                {
                    "photoUrl": null,
                    "parentName": "知源",
                    "clockPunchTime": "18:00",
                    "punchResultId": "466961416480256000",
                    "videoId": null,
                    "videoLength": null,
                    "description": "打卡成果",
                    "fileList": [],
                    "clockPunchDay": "2019-07-13",
                    "commentVOs": null,
                    "praised": false,
                    "praisePersonList": []
                },
                {
                    "photoUrl": null,
                    "parentName": "知源",
                    "clockPunchTime": "18:00",
                    "punchResultId": "466961416480256001",
                    "videoId": null,
                    "videoLength": null,
                    "description": "打卡成果",
                    "fileList": [],
                    "clockPunchDay": "2019-07-16",
                    "commentVOs": null,
                    "praised": false,
                    "praisePersonList": []
                },
                {
                    "photoUrl": null,
                    "parentName": "知源",
                    "clockPunchTime": "18:00",
                    "punchResultId": "466961416480256002",
                    "videoId": "1234567890",
                    "videoLength": "0:40",
                    "description": "在暑假帮助孩子养成良好学习习惯,家长们需要加强监督...",
                    "fileList": [
                        {
                            "fileUrl": "http://schbrain-test.oss-cn-hangzhou.aliyuncs.com/%3A//schbrain-jl.oss-cn-hangzhou.aliyuncs.com/1008/115/1/20181115/3.png?Expires=1563265345&OSSAccessKeyId=LTAIw8YgDSMEurza&Signature=4%2FxBByX6q4rIEjttOmx3pLk5Y10%3D",
                            "fileType": 2
                        },
                        {
                            "fileUrl": "http://schbrain-test.oss-cn-hangzhou.aliyuncs.com/%3A//schbrain-jl.oss-cn-hangzhou.aliyuncs.com/1008/115/1/20181115/3.mp4?Expires=1563265345&OSSAccessKeyId=LTAIw8YgDSMEurza&Signature=yq2M%2Fjx2JuD5uJVIP2z9PHNgjNk%3D",
                            "fileType": 1
                        }
                    ],
                    "clockPunchDay": "2019-07-16",
                    "commentVOs": [
                        {
                            "commentId": "466961416480256002",
                            "commentDesc": "很强",
                            "praiseStatus": true,
                            "replayPersonName": "知源"
                        }
                    ],
                    "praised": true,
                    "praisePersonList": [
                        {
                            "commentId": "466961416480256002",
                            "personName": "知源"
                        }
                    ]
                }
            ],
            "punchedNum": 3,
            "pages": 1,
                "pageNum":1,
            "pageSize":5,
            "totalNum":20
        }
    };
    // console.log(response,JSON.stringify(response));
    res.set({
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST,GET',
        'Access-Control-Allow-Headers':'x-requested-with,content-type'
    })
    res.send(JSON.stringify(response));
})
