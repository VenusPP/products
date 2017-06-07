//本插件由www.swiper.com.cn提供
//将元素缓存样式swiper-animate-style-cache  然后隐藏元素
function swiperAnimateCache() {
    for (allBoxes = window.document.documentElement.querySelectorAll(".ani"), i = 0;i < allBoxes.length; i++){
         allBoxes[i].attributes["style"]?allBoxes[i].setAttribute("swiper-animate-style-cache", allBoxes[i].attributes["style"].value):allBoxes[i].setAttribute("swiper-animate-style-cache", " ");
         allBoxes[i].style.visibility = "hidden";
        //在此处开始给元素赋值和设置属性
       var slide_in= allBoxes[i].attributes["data-slide-in"],slide_out=allBoxes[i].attributes["data-slide-out"];
        if(slide_in){
            var in_date=slide_in.value.split(' ');
           allBoxes[i].setAttribute('in_at',parseInt(getprop('at',in_date)));
           allBoxes[i].setAttribute('in_from',getprop('from',in_date));
           allBoxes[i].setAttribute('in_use',getprop('use',in_date));
           allBoxes[i].setAttribute('in_during',parseInt(getprop('during',in_date)));
           allBoxes[i].setAttribute('in_plus',parseInt(getprop('plus',in_date)));
           allBoxes[i].setAttribute('in_force',getprop('force',in_date));
        }
        if(slide_out){
            var out_date=slide_out.value.split(' ');
            allBoxes[i].setAttribute('out_at',parseInt(getprop('at',out_date)));
            allBoxes[i].setAttribute('out_to',getprop('to',out_date));
            allBoxes[i].setAttribute('out_use',getprop('use',out_date));
            allBoxes[i].setAttribute('out_during',parseInt(getprop('during',out_date)));
            allBoxes[i].setAttribute('out_plus',parseInt(getprop('plus',out_date)));
            allBoxes[i].setAttribute('out_force',getprop('force',out_date));
        }
    }
}
var nowtimestamp='',tempOutAnimateStack={},tureOutAnimateStack=new Array(),timerOn=false,OutAniTimeout='',
//默认参数
 param = {
    at:     0
    , from:   'left'
    , to:     'right'
    , use:    'swing'
    , during: 1000
    , plus:   0
    , force:  false
};
//设置动画样式。。
function swiperAnimate(a) {
    clearSwiperAnimate();
    var b = a.slides[a.activeIndex].querySelectorAll(".ani");
    nowtimestamp=new Date().getTime();
    for (i = 0; i < b.length; i++) {

        b[i].style.visibility = "visible";
        //动画样式
         var  effect = b[i].attributes["in_from"] ? b[i].attributes["in_from"].value : "";
         b[i].className = b[i].className + "  " + effect + " " + "animated";
         var style = b[i].attributes["style"].value;
        //动画持续时间
         var  duration = b[i].attributes["in_during"] ?parseInt(b[i].attributes["in_during"].value) : "";
         duration && (style = style + "animation-duration:" + (duration/1000+'s') + ";-webkit-animation-duration:" + (duration/1000+'s') + ";");
        //动画延迟时间（单位秒）
         var delay = b[i].attributes["in_at"] ? parseInt(b[i].attributes["in_at"].value) : "";
         delay && (style = style + "animation-delay:" + (delay/1000+'s') + ";-webkit-animation-delay:" + (delay/1000+'s') + ";");

        //切换效果速度
        var timing = b[i].attributes["in_use"] ? b[i].attributes["in_use"].value : "";
        timing && (style = style + "transition-timing-function:" + timing + "; -webkit-transition-timing-function:" + timing + ";");
         b[i].setAttribute("style", style);

        //判断如果动画退出效果等阵
         if(b[i].attributes["out_force"]&&b[i].attributes["out_force"].value != 'false'){
             //进场 等等时间+持续时间 +退场 等待时间
          var outtime= parseInt(delay)+parseInt(duration)+parseInt(b[i].attributes["out_at"].value);
             //以要执行的时间为基准 把要循环的都放到栈里面
             if(tempOutAnimateStack[outtime]){
                 tempOutAnimateStack[outtime][i]={element:b[i]};
             }else{
                 tempOutAnimateStack[outtime]={};
                 tempOutAnimateStack[outtime][i]={element:b[i]};
             }
         }
    }
    //如果存在要执行的动画了就排序
    if(!isNullObj(tempOutAnimateStack)){
     //   console.log(tempOutAnimateStack);
        var disparity=0;
        for(var i in tempOutAnimateStack){
            tureOutAnimateStack.push({time:parseInt(i)-disparity,element:tempOutAnimateStack[i]});
            disparity=parseInt(i);
        }
        tempOutAnimateStack={};
    }
    if(tureOutAnimateStack.length){
        executionAnimate();
    }
}
//判断对象不为空
function isNullObj(obj){
    for(var i in obj){
        if(obj.hasOwnProperty(i)){
            return false;
        }
    }
    return true;
}
function executionAnimate() {
    if(!timerOn){
        //第一次进来的时候直接设置下定时器然后返回就可以了
        timerOn=true;
        OutAniTimeout=setTimeout(executionAnimate,tureOutAnimateStack[0].time);
        return true;
    }
    //第二次 第三次进来的时候就开始取数据然后做动画循环了
    var nwoOutAni=tureOutAnimateStack.shift();
    if(nwoOutAni){
        for(var i in nwoOutAni.element) {
            var em = nwoOutAni.element[i].element;

            em.className = em.className.replace(em.attributes["in_from"].value, "");
            var effect = em.attributes["out_to"] ? em.attributes["out_to"].value : "";
            em.className = em.className + "  " + effect + " ";
            var style = em.attributes["style"].value;
            //动画持续时间
            var duration = em.attributes["out_during"] ? parseInt(em.attributes["out_during"].value) : "";
            duration && (style = style + "animation-duration:" + (duration/1000+'s') + ";-webkit-animation-duration:" + (duration/1000+'s') + ";");
            //动画延迟时间（单位秒）
            var delay = em.attributes["out_at"] ? parseInt(em.attributes["out_at"].value) : "";
            delay && (style = style + "animation-delay:" + (delay/1000+'s') + ";-webkit-animation-delay:" + (delay/1000+'s') + ";");
            //切换效果速度
            var timing = em.attributes["out_use"] ? em.attributes["out_use"].value : "";
            timing && (style = style + "transition-timing-function:" + timing + "; -webkit-transition-timing-function:" + timing + ";");
            em.setAttribute("style", style);
        }

    }
    //如果还没有循环完 就继续设置定时循环
    if(tureOutAnimateStack.length){
        OutAniTimeout=setTimeout(executionAnimate,tureOutAnimateStack[0].time);
    }
}


//得到参数值
 function getprop(prop, data) {
     //var pos = $.inArray(prop, data);
     var pos =data.indexOf(prop);
     if(pos < 0)
         return param[prop];
     return data[pos + 1] || !data[pos + 1];
}
//恢复默认样式 并将 类名effect animated替换成空
function clearSwiperAnimate() {
    //将时间戳为空
    nowtimestamp='',tureOutAnimateStack=new Array(),clearInterval(OutAniTimeout),timerOn=false;
    for (allBoxes = window.document.documentElement.querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) {
        allBoxes[i].attributes["swiper-animate-style-cache"] && allBoxes[i].setAttribute("style", allBoxes[i].attributes["swiper-animate-style-cache"].value);
        allBoxes[i].style.visibility = "hidden";
        allBoxes[i].className = allBoxes[i].className.replace("animated","");
        allBoxes[i].attributes["in_from"] && (allBoxes[i].className = allBoxes[i].className.replace(allBoxes[i].attributes["in_from"].value,""));
        allBoxes[i].attributes["out_to"] && (allBoxes[i].className = allBoxes[i].className.replace(allBoxes[i].attributes["out_to"].value,""));
    }
}