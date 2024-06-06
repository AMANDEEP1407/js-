const score=400
console.log(score);

const balance=new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(typeof balance);
console.log(balance.toFixed(2));//
//
const onumber=123.345
console.log(onumber.toPrecision(1))
console.log(onumber.toPrecision(2))
console.log(onumber.toPrecision(3))
console.log(onumber.toPrecision(4))
//to represent the vaule better like currency
const hund=1000000
console.log(hund.toLocaleString('en-IN'))


//+++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(Math);

console.log(Math.abs(-4));// covert sign - to + vaule

console.log(Math.round(4.3))// round off the number

console.log(Math.ceil(4.1))// always give upper vaule

console.log(Math.floor(4.9));// always give lower vaule

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);


