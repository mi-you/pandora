const http = require('http')

const server = http.createServer()

server.on('request',function(req,res){
  const url = req.url
  if(url === '/'){
    // text/plain普通文本类型
    res.setHeader('Content-type','text/plain;charset=utf-8')
    res.end("hello world")
  }else if(url === '/home'){
    // 不加这个浏览器的默认行为也会解析元素标签，中文可能会乱码，所以需要charset=utf-8,
    // 但是不能使用text/plain(元素标签会被当做字符串处理)，要使用text/html
    res.setHeader('Content-type','text/html;charset=utf-8')
    res.end('<p>p标签里的文字</p>')
  }else{
    res.end("404 not found")
  }
})

server.listen('3000',function(){
  console.log("服务启动了")
})