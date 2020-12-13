function canverToGS(img){
  //存储原始的彩色版
  img.color = img.src
  //创建灰度板
  img.grayscale = createGSCanvas(img)
  img.onmouseover = function(){
    this.src = this.color
  }
  img.onmouseout = function(){
    this.src = this.grayscale
  }
  img.onmouseout()
}

function createGSCanvas(img){
  var canvas = document.createElement("canvas")
  canvas.height = img.height
  canvas.width = img.width

  var ctx = canvas.getContext('2d')
  ctx.drawImage(img,0,0)
  //getImageData只能操作与脚本位于同一域中的图片(所以在html里我放的是图片的base64)
  var c = ctx.getImageData(0,0,img.width,img.height)
  console.log(img.width * img.height * 4 === c.data.length) //true
  for(var i = 0; i < c.height; i++){
    for(var j = 0; j < c.width; j++){
      var x = (i * 4) * c.width + (j * 4)
      var r = c.data[x]
      var g = c.data[x + 1]
      var b = c.data[x + 2]
      c.data[x] = c.data[x + 1] = c.data[x + 2] = (r + g + b) / 3  
    }
  }

  ctx.putImageData(c,0,0,0,0,c.width,c.height)
  return canvas.toDataURL()
}

window.onload = function(){
  this.canverToGS(document.getElementById("gray"))
}