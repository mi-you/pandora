const http = require('http')

// 创建一个web服务
const server = http.createServer()

// 注册request事件
server.on('request',function(req,res){
  console.log("收到客户端的请求了",req.url)
  console.log(req.socket.remoteAddress,req.socket.remotePort)

  res.write("hello")
  //返回值只能是二进制或字符串
  res.end()
})
// 绑定端口号，启动服务器
server.listen(3000,function(){
  console.log('服务器启动成功了，可以通过http://127.0.0.0:3000访问了')
})