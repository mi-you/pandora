// throttle 节流函数
export const throttle = (fn,delay = 50) => {
  let flag = true;
  return (...arg) => {
    if(flag){
      flag = false;
      window.requestAnimationFrame(() => fn(...arg));
      setTimeout(() => flag = true,delay)
    }
  }
}
// debounce 防抖函数
export const debounce = (fn,delay = 50) => {
  let timer = null;
  return (...arg) => {
    clearTimeout(timer)
    timer = setTimeout(() => window.requestAnimationFrame(() => fn(...arg)),delay)
  }
}