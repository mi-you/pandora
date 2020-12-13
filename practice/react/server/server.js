/*基于 Node.js 平台，快速、开放、极简的 Web 开发框架*/
const  express = require('express');

/*在http请求种，POST、PUT、PATCH三种请求方法中包含着请求体，也就是所谓的request，在Nodejs原生的http模块中，
请求体是要基于流的方式来接受和解析。body-parser是一个HTTP请求体解析的中间件，
使用这个模块可以解析JSON、Raw、文本、URL-encoded格式的请求体，*/
const  bodyParser = require('body-parser');

/*CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。*/
const  cors = require('cors');//解决

const router = require('./router');

var app = express();
//解析application/x-www-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
//解析 aplication/json
app.use(bodyParser.json());
//允许跨域
app.use(cors());
//设置路由
app.use(router);//这个一定要放到最后，也就是

app.listen(8000,function(){
    console.log('Running');
});

