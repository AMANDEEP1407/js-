//Date

let mydate=new Date()
console.log(mydate);
console.log(mydate.toString()); 
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(typeof mydate);
//
//let createdate=new Date(2024,0,23,5,4)//date and time
let createdate=new Date("2024-01-23")//yy-mm-dd
console.log(createdate.toLocaleString());
//
let mytime=Date.now()
console.log(mytime);
console.log(mydate.getTime());
console.log(Math.floor(Date.now()/1000));
//
let newdate=new Date()
console.log(newdate.getMonth()+1);
console.log(mydate.getMinutes());
console.log(newdate.getHours());
console.log(newdate.getDay());