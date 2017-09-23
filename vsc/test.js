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