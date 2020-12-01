// 日期相关的工具
import * as date from './date'
// 请求相关的工具
import fetch from './fetch'
// 其他类工具
import * as tool from './tool'


export default {
  install:Vue => {
    Vue.prototype.$_date = date;
    Vue.prototype.$_tool = tool;
    Vue.prototype.$_fetch = fetch;
  }
}