/*
const buf = Buffer.from('runoob', 'ascii');
console.log(buf.toString('ascii'));
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));


const buf1 = Buffer.alloc(10);
console.log(buf1.toString('hex'));
const buf2 = Buffer.alloc(10, 1);
console.log(buf2.toString('hex'));

const buf3 = Buffer.allocUnsafe(10);
console.log(buf3.toString('hex'));//更快，但是返回的Buffer实例可能包含旧数据
const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4.toString('hex'));

const buf5 = Buffer.from('tést');
console.log(buf5.toString('latin1'));
const buf6 = Buffer.from('tést', 'latin1');
console.log(buf6.toString('latin1'));

const buf8 = Buffer.alloc(256);
len=buf8.write("www.runoob.com");
console.log("写入字节数："+ len);

const buf9 = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
    buf9[i] = i + 97;
}
  
  console.log( buf9.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
  console.log( buf9.toString('ascii',0,5));   // 输出: abcde
  console.log( buf9.toString('utf8',0,5));    // 输出: abcde
  console.log( buf9.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

const buf10 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf10);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer' ?
    Buffer.from(value.data) :
    value;
});

// 输出: <Buffer 01 02 03 04 05>
console.log(copy);

var buffer1 = Buffer.from(('111'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer 3 内容: "+buffer3.toString());


var buffer3 = Buffer.from('ABC');
var buffer4 = Buffer.from('ABCD');
var result=buffer3.compare(buffer4);
if(result<0){
  console.log(buffer1 + "在" + buffer2 +"之前");
}
else if(result==0)
  console.log("same......");
else{
  console.log(bufer1+"is after "+buffer2);
}

var bufferSlice = Buffer.from('runboo');
var buffers = bufferSlice.slice(0,2);
console.log("buffer Slice content: (from 0 to 2)  "+buffers.toString());
*/
