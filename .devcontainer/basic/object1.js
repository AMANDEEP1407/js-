//object litral
const mysym=Symbol('mykey')

const detail={
    name:"aman",
    [mysym]:"mykey1",

    age: 18,
    location:"15sector",
    email:"aman@googlr.com",
    islogin:false,
    lastlogin:['monday','wedsday']

}
console.log(detail.email);//method 1 to access object element
console.log(detail["email"]);// 2 method
console.log([mysym])
detail.email="amandeep@google.com"//can vaule
console.log(detail['email'])

//Object.freeze(detail)// can freez value 
detail.email="amandeeop2@google.com"
//console.log(detail)

detail.greeting=function()
{
    console.log("hello,this is js");

}
detail.greeting2=function()
{
    console.log('this is js');

}
console.log(detail.greeting())
console.log(detail.greeting2())





