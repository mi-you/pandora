const fs = require("fs")
fs.readFile('./helllo.txt',function(error,data){
  // 成功error = null
  // console.log(data) 结果：<Buffer e6 88 91 e7 9a 84 e4 b8 96 e7 95 8c e5 9b a0 e4 b8 ba e6 9c 89>
  console.log(data.toString())
})

fs.writeFile('./writeFile.txt','我是node.js写入的内容',function(err){
  // 成功err = null
  console.log(err)
})