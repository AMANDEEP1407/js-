const arr=[1,2,3,4,5]
const arry1=new Array(1,2,34,5)


console.log(arry1[3]);
// array method


arry1.push(45)// add vaule
console.log(arry1);

arry1.pop()//remove vaule form last
console.log(arry1);


arry1.unshift(6)//add vaules in starting of array
console.log(arry1);


arry1.shift()
console.log(arry1);//remove vaule on strting


const array2=new Array(0,12,2,36,4,5)
console.log(array2.includes(34));// you ask wheather element is in or not
console.log(array2.indexOf(23));

const array3=array2.join()//join can convert values to string
console.log(array3);
//
console.log("---------")
//
const array4=new Array(0,1,2,3,4,5)
const aryn=array4.slice(1, 3)//slice the value

console.log(aryn);
console.log("b",array4);

const aryn2=array4.splice(1,3);

console.log(aryn2);
console.log("c",array4);

