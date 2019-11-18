const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(10, 1);

const buf3 = Buffer.allocUnsafe(10);//更快，但是返回的Buffer实例可能包含旧数据
const buf4 = Buffer.from([1, 2, 3]);

const buf5 = Buffer.from('tést');
const buf6 = Buffer.from('tést', 'latin1');

const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, ox5]);
const json = JSON.stringify(buf);
console.log(json);

