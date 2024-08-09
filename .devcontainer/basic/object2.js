const tinderuser={}
tinderuser.name="raman"
tinderuser.id="abc123"
tinderuser.isloggedIn=false
//console.log(tinderuser);     
const reuser=
{
    email:"some@gmail.com",
    fullname:{ 
             username:{
        firstname:"raman",
        lastname:"B"
    }
}          
}                                                            
//console.log(reuser.fullname);
const obj1={a:"1",b:"2"};
const obj2={c:"3",d:"4"};
//const obj3={obj1,obj2};
//console.log(obj3);
//const obj3= Object.assign({},obj1,obj2);
//console.log(obj3);

//also use spreade opreator
const obj3={...obj1,...obj2}
//console.log(obj3)

const user=[
    {name:"aman"
    },
    {name1:"raman"
    },
    {name3:"anuj"        
    }
]
user[1].email
console.log(tinderuser);
console.log(Object.values(tinderuser));
console.log(Object.keys(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isloggedIn'));