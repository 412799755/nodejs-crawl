var express = require('express')
var app = express()
console.log(express.json({
    inflate:true,
    limit:'100kb',
    reviver:null,
    strict:true,
    type:'application/json',
    verify:undefined
}))
