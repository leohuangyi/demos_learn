/**
 * Created by XiTang on 16/3/26.
 */
function Parent(){
    this.x = 'a';
    this.y = 'b';
}
function Parent2(){
    this.z = 'c';
}
Parent2.say = function(){
    console.log('hello');
}

Parent.__proto__ = Parent2;
var s1 = new Parent();


s1.say();