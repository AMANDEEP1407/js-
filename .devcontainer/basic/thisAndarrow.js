const user={
    username:"aman",
    price:299,
    welcome:function(){
        console.log(this.username,'welcome to website')
        console.log(this)
    }
}
//user.welcome()
//user.username="hitesh"
//user.welcome()



//console.log(this)

function fun()
{
    let username="aman"
    console.log(this)
}
//fun()
function fun2()
{
    let username="aman"
    console.log(this.username) //this context work here
}
//fun2()

//const chai=function()
//{
  //  let username="aman"
    //console.log(this.username)
//}
//chai()


const chai= () =>
{
    let username="aman"
    console.log(this.username)
}
//chai()
//++++++++++++++++++++++++++++ arrow fun

const a1= (num1,num2) => {

    return num1+num2
}
console.log(a1(2,3))

const a2= (num3,num4)=>( num3+num4)

console.log(a2(2,6))
const a3=(num1,num2)=>({username:"raman"})

console.log(a3())