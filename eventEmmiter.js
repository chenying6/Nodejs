/*
var events = require('events');
var emiter = new events.EventEmitter();
emiter.on('someEvent', function(arg1, arg2){
    console.log('listener1', arg1, arg2);
});
emiter.on('someEvent', function(arg1, arg2){
    console.log('listener2', arg1, arg2);
});
emiter.emit('someEvent', 'arg1 参数','arg2 参数');
*/
//connection
var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log('监听器 listerner1 执行！');
}
var listener2 = function listener2(){
    console.log('监听器 listener2 执行！');
}

eventEmitter.addListener('connection', listener1);
eventEmitter.addListener('connection', listener2);

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 个监听器监听连接事件！");

eventEmitter.emit('connection');
eventEmitter.removeListener('connection', listener1);
console.log('listener1 不再受监听。');

eventEmitter.emit('connection');
eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners+" 个监听器监听连接事件。");

console.log("程序执行完毕！");