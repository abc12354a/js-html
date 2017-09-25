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
function show() {
    // if(arguments.length > 1){
    //     document.getElementById("d1").innerHTML = "more than one args";
    // }
    // else
    //document.getElementById("d1").innerHTML = '<span>new node</span>';
    var btn = document.getElementById('node1');
    var in1 = document.getElementById('d1');
    var node2 = document.createElement('li');
    node2.id='node2';
    node2.innerHTML = 'node2';
    in1.appendChild(node2);
    in1.appendChild(btn);
    // document.getElementById("d1").innerHTML = abs(25);
};
function cycle(){
    var Mylist = document.getElementById('d1');
    var i = 0;
    for(i = 0;i<Mylist.children.length;++i){
        alert('this'+i+Mylist.children[i].innerHTML);
    }
    var check = document.getElementById('check');
    alert(check.checked);
}
function Lsort(){
    var Tlist = document.getElementById('d1');
    var i = 0;
    var c = [];
    for(i = 0;i<Tlist.children.length;++i){
        c.push(Tlist.children[i].innerHTML);
    }
    c.sort();
    for(i = 0;i<c.length;i++){
        alert(c[i]);
    }
}
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
//alert(now);
var checkedT = function(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;
    var regu = /^[a-zA-Z0-9]{3,10}$/;
    var regp = /^\w{6,20}+$/;
    if(!regu.test(username)){
        alert("must be 3-10 words or numbers");
        return false;
    }
    else if(!regp.test(password)!= true){
        alert("must be 6-20 words or numbers");
        return false;
    }
    else if(confirm !== password){
        alert("confirm must be the same value of password");
        return false;
    }
    return true;
}