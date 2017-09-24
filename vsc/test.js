'use strict';
var abs = function (x) {
    if (typeof x !== 'number') {
        return "not a number";
    }
    else if (arguments.length > 1) {
        return "more than one args";
    }
    if (x >= 0)
        return x;
    else
        return -x;
};
var MyOb = {
    name: 'Angus',
    brith: 1996,
    myabs: abs,
    age:function(){
        var Ty = new Date().getFullYear();
        return Ty-this.brith;
    }
};
//测试结果：函数之间参数传递显式个数。
function show(x) {
    // if(arguments.length > 1){
    //     document.getElementById("d1").innerHTML = "more than one args";
    // }
    // else
    document.getElementById("d1").innerHTML = MyOb.myabs(-5);
    document.getElementById("d1").innerHTML = abs(25);
};
var count = 0;
var oldParseInt = parseInt;
window.parseInt = function(){
    count += 1;
    return oldParseInt.apply(null,arguments);
};
function Intadd(x,y){
    var Int = x=>x-0;//lambda function
    return Int(x)+Int(y);
}
function pow(x){
    return x*x;
}
function mymap(...rest){
    var arr = [];
    var i;
    for(i = 0;i<arguments.length;i++){
        arr.push(arguments[i]);
    }
    return arr.map(pow);
}
function NGf(){

};
function addon(s){
    if(s==100)
    return s;
    else
    return addon(s+1);
};
var now = new Date(2017,8,20,11,17,22);
alert(now);