const marvel_hero=['iman','hulk','thor']
const dc_hero=['flash','superhero','batman']

//marvel_hero.push(dc_hero)
//console.log(marvel_hero)
//console.log(marvel_hero[3][2])

const allhero=marvel_hero.concat(dc_hero)// concate oprator
//console.log(allhero)

const all_new_hero=[...marvel_hero,...dc_hero]//seprate oprator
console.log(all_new_hero)

const ano_array=[1,2,3,[4,5],6,[7,8,9,[10,11]]]// if array inside the array
const new_ano_array=ano_array.flat(Infinity)
console.log(new_ano_array)

console.log(Array.isArray('aman'))//ask question is this array or not//fasle
console.log(Array.from('aman'))// convert into array
console.log(Array.from({name:"aman"}))// intrview// it cannot change 

const score1=200;
const score2=400;
const score3=600;

console.log(Array.of(score1,score2,score3));// method to convert array
