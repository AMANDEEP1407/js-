(function fun1()
    {
console.log("xyz")
    }) ();
    //named iife        
    (function fun2(){
        console.log("hello")
    }) ();

    // unnamed iife
((name)=> {
    console.log("welcome ",name);
})("hitesh")

