const name="aman"
const anynum= 50
console.log(name+anynum) //not a good approch
console.log(`my is dname ${name}and my rollno is${anynum}`);// good approch
// we can declear string this way also
const game=new String('aman-s-d')
console.log(game);
console.log(game[0]);
// syntax console.log(game.__proto__);
console.log(game.length);
console.log(game.toUpperCase());// uppercase
console.log(game.charAt(3));// indexvaule ka alphabet[0,1,2,3]
console.log(game.indexOf('a'));

const anstring=game.substring(0,2)// slicing od string but end vaule nevr count
console.log(anstring);
const anostring=game.slice(-2,4)
console.log(anostring)

const nstring="    anuj    "// trim the unwanted space and charater
console.log(nstring)
console.log(nstring.trim());
//
const url="https://www.amandeeo.com/amandeep20%singh"
console.log(url.replace('20%','-'));//find some words
console.log(url.includes('strong'));
//to slipt
console.log(game.split('-'))
//endwith()
const str1='this is a answer'
console.log(str1.endsWith('answer'));//expected output is true.
const str2='this is a question?'
console.log(str2.endsWith('question'));//expected output is false.

