/**
 * Created by zhanghaibin on 2016/11/3.
 */

'use strict'

//随机数 n-m
function rnd(n,m){
    return parseInt(Math.random() * (m - n)) + n;
}

//在一个数组中找一个数是否存在
function findInArray(n,arr){
    for(var i = 0; i<arr.length;i++){
        if (n == arr[i]){
            return true;
        }
    }
    return false;
}
//变成两位数
function toDou(n){
    return n < 10 ? '0'+n : ''+n;
}

//获取计算后的样式（兼容所有浏览器）
function getStyle(obj,name){
    return obj.currentStyle ? obj.currentStyle[name] : getComputedStyle(obj,false)[name];
}
//事件绑定
function addEvent(obj,sEv,fn){
    if(obj.addEventListener){
        obj.addEventListener(sEv,fn,false);
    }
    else{
        obj.attachEvent('on'+sEv,fn)
    }
}
//事件解绑定
function removeEvent(obj,sEv,fn){
    if(obj.removeEventListener){
        obj.removeEventListener(sEv,fn,false);
    }
    else{
        obj.detachEvent('on'+sEv,fn);
    }

}
//从oParent中获取,class=sClass的元素
function getByClass(oParent,sClass){
    if(oParent.getElementsByClassName){
        return  oParent.getElementsByClassName(sClass);
    }else{
        //ie低版本
        var arr = [];
        var aElt = oParent.getElementsByTagName('*');
        for (var i = 0; i < aElt.length; i++){
            var arr2 = aElt[i].className.split(' ');
            if (findInArray(arr2,sClass)){
                arr.push(aElt[i]);
            }
        }
        return arr;
    }
}
function DOMReady(fn) {
    if(document.addEventListener){
        document.addEventListener('DOMContentLoaded',function(){
            fn && fn();
        },false);
    }
    else{
        document.attachEvent('onreadystatechange',function(){
            //加载状态
            if(document.readyState == 'complete'){
                fn && fn();
            }
        });
    }
}

//碰撞检测
function collTest(obj1,obj2){
    var l1 = obj1.offsetLeft;
    var r1 = l1 + obj1.offsetWidth;
    var t1 = obj1.offsetTop;
    var b1 = t1 + obj1.offsetHeight;

    var l2 = obj2.offsetLeft;
    var r2 = l2 + obj2.offsetWidth;
    var t2 = obj2.offsetTop;
    var b2 = t2 + obj2.offsetHeight;

    if(r1>l2 && l1<r2 && b1 > t2 && t1 < b2){
        return true;
    }
    else{
        return false;
    }
}
//运动框架
function getStyle(obj,name){
    if(obj.currentStyle){
        return obj.currentStyle[name];
    }
    else{
        return getComputedStyle(obj,false)[name];
    }
}

//json:{width:400,heigth:500}
//easing:匀速  加速  缓冲
// linear  ease-in  ease-out
//move(obj,json,abc)
/*abc = {
    duration:1000,
    easing:'linear',
    complete:fn
};*/
/*{
    abc.duration  -->  500
     abc.easing  --> linear

}*/
/*
opations={
 duration:1000,
 easing:'linear',
 complete:function(){}
}

 */
function move(obj,json,options){
    clearInterval(obj.timer);

    var options = options || {};

    var duration = options.duration || 500;
    var easing = options.easing || 'linear';

    //开始位置
    var start = {};
    //距离
    var dis = {};
    for(var name in json){
        //name   'width' 'height'
        //json[name] 400   400
        start[name] = parseFloat(getStyle(obj,name));
        if(name == 'opacity' && !obj.addEventListener){
            start[name] *= 100;
            json[name]*=100;
        }
        dis[name] = json[name] - start[name];

    }
    //总次数
    var count = Math.floor(duration / 30);
    var n = 0; //当前次数
    obj.timer = setInterval(function(){
        n++;

        for(var name in json){
            switch(easing){
                case 'linear':
                    var a = n / count;
                    var current = start[name] + dis[name] * a;
                    break;
                case 'ease-in':
                    var a = n / count;
                    var current = start[name] + dis[name] * (a*a*a);
                    break;
                case 'ease-out':
                    var a = 1 - n / count;
                    var current = start[name] + dis[name] * (1-a*a*a);
                    break;
            }

            if(name == 'opacity'){
                obj.style.opacity =current;
                if(!obj.addEventListener){
                    obj.style.filter = 'alpha(opacity='+ current +')';
                }
            }
            else{
                obj.style[name] = current + 'px';
            }
        }

        if(n == count){
            clearInterval(obj.timer);
            options.complete && options.complete();

        }
    },30);
}

//  获取child 第一个孩子和最后一个孩子
    function getChild(obj){
        var firstChild = obj.firstElementChild || obj.firstChild;
        var lastChild = obj.lastElementChild || obj.lastChild;
        return {first:firstChild,last:lastChild};
    }
    
// 获取sibling 上一个兄弟和下一个兄弟
    function getSibling(obj){
        var n = obj.nextElementSibling || obj.nextSibling;
        var p = obj.previousElementSibling || obj.previousSibling;
        return {next:n,prev:p};
    }



















