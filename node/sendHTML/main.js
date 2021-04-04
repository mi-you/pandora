const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer()

server.on('request',function(req,res){
  // true是吧query转成对象
  const parseObj = url.parse(req.url,true)
  const pathName = parseObj.pathname
  if(pathName === '/'){
    fs.readFile('./index.html',function(err,data){
      if(err){
        res.setHeader('Content-type','text/plain;charset=utf-8')
        res.end("读取文件失败")
      }else{
        res.setHeader('Content-type','text/html;charset=utf-8')
        res.end(data)
      }
    })
  }else if(pathName === '/form'){
    fs.readFile('./form.html',function(err,data){
      if(err){
        res.setHeader('Content-type','text/plain;charset=utf-8')
        res.end("读取文件失败")
      }else{
        res.setHeader('Content-type','text/html;charset=utf-8')
        res.end(data)
      }
    })
  }else if(pathName === '/getForm'){
    res.statusCode = 302
    res.setHeader("Location",'/')
    res.end()
  }else if(pathName === '/img'){
    fs.readFile('./photo.png',function(err,data){
      if(err){
        res.setHeader('Content-type','text/plain;charset=utf-8')
        res.end("读取图片失败")
      }else{
        // 图片不需要编码了
        res.setHeader('Content-type','image/png')
        res.end(data)
      }
    })
  }else{
    res.end("404 not found")
  }
})

server.listen('3000',function(){
  console.log("服务启动了")
})