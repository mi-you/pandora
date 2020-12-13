var express = require('express');
var control = require('./controls');
var router = express.Router();

//配置路由
router.get('/todoList',function(req,res){
    control.getTodoList(req,res);
});
module.exports = router;