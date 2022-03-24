let a = undefined;
let b = 2;
let c = a++;

a = "" + a;
console.log(typeof a);

b = "" + b;
console.log(typeof b);

c = "" + c;
console.log(typeof c);

let d = a;
console.log(typeof d);

let e = b;
console.log(typeof b);

let f = c;
console.log(typeof f);
