// 关于webpack4的一点说明：
//1.webpack默认打包
// 入口位置:src/index.js
// 出口位置:dist/main.js
//2.webpack打包要执行的命令是：
//  webpack --mode development或
//  webpack --mode production这两个命令可在package.js里配置简写
//  注意用上面两个和用npm run dev/build的区别在于上面两个用的是全局webpack
//  进行打包，而npm会优先使用本地的webpack进行打包(这两个webpack版本可能会不一样)
//3.webpack.config.js的导出也由以前的对象变成了函数

//关于打包的一些解释
// 在执行npm run dev时(package.js里有配置："dev": "webpack --mode development")
//会先从本地找webpack进行打包，如果本地没有会从全局找webpack进行打包(我的全局的webpack是4.41.5)
//一般项目都是clone下来的都需要在本地安装一个webpack用于打包clone的项目
//运行npm install webpack@版本 --save-dev就可以(实际不需要，因为在npm init时就会安装这个了)
//注意上面的-dev这是开发时依赖，运行时不需要
//
//
//

const path = require('path')

module.exports = (env, argv) => ({
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'), //出口需要是绝对路径
    filename:'main.js',
    publicPath:'dist/' //涉及到url的会在前面加上这个，不加这个对于非base64图片显示不出来
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        //css.loader只负责将css文件进行加载
        //style.loader负责将样式添加到DOM中
        use:['style-loader','css-loader']
      },{
        test:/\.less$/,
        //这里的是对象数组，当然可以像上面那样，只是对象数组可以进行更多配置项线面那个url-loader
        use: [{
          loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "less-loader"
        }]
      },{
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片小于limit，会将图片编译成base64
              //当加载的图片大于limit需要使用file-loader模块进行打包
              //注意在output里配置publicPath:'dist/'以显示图片
              limit: 8192,
              //把图片打包到img文件夹下，图片的名字由图片原名加8位hash(32)和文件类型后缀
              name:'img/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve:{
    alias:{
      // 当vue使用runtime-only时没法编译template时
      'vue$':'vue/dist/vue.esm.js'
    }
  }
})