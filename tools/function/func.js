/*
* 页面加载完成执行指定函数
* @params func是待执行函数名
*/
function addLoadEvent(func){
  var oldOnload = window.onload
  if(typeof oldOnload !== 'function'){
    window.onload = func
  }else{
    window.onload = function(){
      oldOnload()
      func()
    }
  }
}

/*
* throttle节流
*/
function throttle(fn,wait){
  var timer = null
  return function(){
    var arr = arguments,
        context = this;
    if(!timer){
      timer = setTimeout(function(){
        fn.apply(context,arr)
        timer = null
      },wait)
    }
  }
}

/*
* throttle节流
* 增加前缘
*/
var Throttle = (fn, wait, immediate) => {
	let timer, timeStamp=0;
	let context, args;
 
	let run = () => {
		timer=setTimeout(()=>{
			if(!immediate){
				fn.apply(context,args);
			}
			clearTimeout(timer);
			timer=null;
		},wait);
	}
 
	return function () {
		context=this;
		args=arguments;
		if(!timer){
			console.log("throttle, set");
			if(immediate){
				fn.apply(context,args);
			}
			run();
		}else{
			console.log("throttle, ignore");
		}
	}
 
}
/*
* 学习JavaScript高级程序第四版后,throttle节流，debounce防抖
*/
throttle = (fn,delay = 50) => {
    let flag = true;
    return (...arg) => {
      if(flag){
        flag = false;
        window.requestAnimationFrame(()=>fn(...arg));
        setTimeout(() => flag = true,delay);
      }
    }
  }

debounce = (fn,delay = 50) => {
    let timer = null;
    return (...arg) => {
      clearTimeout(timer)
      timer = setTimeout((...arg) => window.requestAnimationFrame(()=>fn(...arg)),delay,...arg)
    }
  }
/*
* debounce防抖
*/
function debounce(fn,wait){
	var timer = null
	return function(){
		var context = this,
				arr = arguments;
		clearTimeout(timer)
		timer = setTimeout(function(){
			fn.apply(context,arr)
		},wait)
	}
}


/*
* debounce防抖
* 优化版： 定时器执行时，判断start time 是否向后推迟了，若是，设置延迟定时器
*/
var Debounce = (fn, wait) => {
	let timer, startTimeStamp=0;
	let context, args;
 
	let run = (timerInterval)=>{
		timer= setTimeout(()=>{
			let now = (new Date()).getTime();
			let interval=now-startTimeStamp
			if(interval<timerInterval){ // the timer start time has been reset, so the interval is less than timerInterval
				console.log('debounce reset',timerInterval-interval);
				startTimeStamp=now;
				run(wait-interval);  // reset timer for left time 
			}else{
				fn.apply(context,args);
				clearTimeout(timer);
				timer=null;
			}
			
		},timerInterval);
	}
 
	return function(){
		context=this;
		args=arguments;
		let now = (new Date()).getTime();
		startTimeStamp=now;
 
		if(!timer){
			console.log('debounce set',wait);
			run(wait);    // last timer alreay executed, set a new timer
		}
		
	}
 
}


// 对象转查询字符串
function objToQuery(obj) {
  let query = '?'
  if (typeof obj === 'object' && obj) {
    for(let [key,value] of Object.entries(obj)) {
      query += key + '=' + encodeURIComponent(value) + '&'
    }
  }
  return query.slice(0,-1)
}

 /* 
* DOM元素的放大缩小调整
* step:每次宽度调整数值
* minWidth:最小宽度
* maxWidth:最大宽度
* ratio:高 / 宽
* element:要操作的DOM元素，可以是选择器或者DOM元素
*/
export function scaleElement({step = 5,minWidth = 70,maxWidth = 760,ratio = 250 / 300,element} = {}){
  //如果元素不存在就退出
  if(!element){
    return
  }
  // 判断element是DOM还是选择器
  let isDOM,DOM;
  isDOM = ( typeof HTMLElement === 'object' ) 
    ? element instanceof HTMLElement 
    :element && typeof element === 'object' && 
    (element.nodeType === 1 && typeof element.nodeName === 'string' || element[0] && element[0].nodeType === 1 && typeof element[0].nodeName === 'string');
  if(typeof element === "string"){
    DOM = document.querySelectorAll(element)
  }else if(isDOM){
    DOM = element
  }else{
    return
  }

  // 定义变量、检测值的有效检测
  let stepX = parseInt(step) || 0,
      width = 0,
      height = 0;
  minWidth = parseInt(minWidth) || 0
  maxWidth = parseInt(maxWidth) || 0
  ratio = parseFloat(ratio) || 1

  // 遍历每个DOM元素设置尺寸
  Array.from(DOM).forEach(v => {
    if(v.style.width && v.style.height){
      width = parseInt(v.style.width),
      height = parseInt(v.style.height);
      setElementSize(v,width,height,stepX,minWidth,maxWidth,ratio)  
    }else{
      width = v.offsetWidth
      height = v.offsetHeight
      setElementSize(v,width,height,stepX,minWidth,maxWidth,ratio)  
    }
  })
}

// 设置DOM元素 v 的尺寸
function setElementSize(v,width,height,stepX,minWidth,maxWidth,ratio){
  let stepY = parseInt(stepX * ratio) || 0
  if(width + stepX >= minWidth && width + stepX <= maxWidth){
    v.style.width = width + stepX + "px"
    v.style.height = height + stepY + "px"
  }
  if(maxWidth >= minWidth && width + stepX < minWidth){
    v.style.width = minWidth + "px"
    v.style.height = minWidth * ratio + "px"
  }
  if(maxWidth >= minWidth && width + stepX > maxWidth){
    v.style.width = maxWidth + "px"
    v.style.height = maxWidth * ratio + "px"
  }
}


/*
* 判断某一年有多少周
* year:哪一年，如：2020 | "2020"
*/
export function getWeeksByYear(year = (new Date()).getFullYear()){
  let isLeapYear = year % 4 === 0 && year % 100 !==0 || year % 400 === 0
  let isSunday = (new Date(year + "-01-01 00:00:00")).getDay() === 0
  if(isLeapYear && isSunday){
    return 54
  }
  return 53
}

/*
* 根据周数获取在指定年中的时间段
* num:第几周,如：3 | "3"
* year:哪一年，如：2020 | "2020"
*/
export function getDateByWeek(num,year = (new Date()).getFullYear()){
    //判断该周数是否在指定年内
    let weeks = getWeeksByYear(year)
    if(isNaN(num) || num < 1 || num > weeks){
      return []
    }
    //计算时间段
    let base,nowStart,nowEnd,dtDay,overDay,start,end;
    base = new Date('2018-01-01 00:00:00') //参考年：该年1月1号是周一
    nowStart = new Date(year + "-01-01 00:00:00") //指定年的第一天
    nowEnd = new Date(year + "-12-31 23:59:59") //指定年的最后一天
    dtDay = (nowStart.getTime() - base.getTime()) / (1000*60*60*24) //时间差（日）
    overDay = dtDay % 7 > 0 ? dtDay % 7:dtDay % 7 + 7
    start = new Date(nowStart.getTime() + ((num -1) * 7 - overDay) * 24 * 3600 * 1000)
    end = new Date(start)
    end.setDate(start.getDate() + 6)
    if(nowStart > start){ //第一周边界
      start = nowStart
    }
    if(end > nowEnd){ //最后一周边界
      end = nowEnd
    }
    return [start,end]
  }
/*
* 判断某年的某日是第几周
* date:是时间对象,如：new Date("2020-02-02 02:02:02")
*/
export function getWeekByDate(date = new Date()){
  let weekStart = 1,
      weekEnd = 54, //一年最多54周
      week,
      flag = true,
      timeArr = []; //weekNumber对应的时间段
  while(flag){
    week = Math.floor(( weekStart + weekEnd ) / 2)
    timeArr = getDateByWeek(week,date.getFullYear())
    if(timeArr.length === 0){
      flag = false
      week = ""
    }
    if(timeArr[0] > date){
      weekEnd = week
      continue 
    }
    if(timeArr[1] < date){
      weekStart = week
      continue
    }
    flag = false
  }
  return week
}