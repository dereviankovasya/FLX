//1

function findTypes(){
	const types = [];
	let i;
  for (i = 0; i < arguments.length; i++) {
     types.push(typeof arguments[i]);

 }
 return types;
}

findTypes('dsdsd',21,'sasas',null,11,'dsdsd');

//2

function executeforEach(ar, funk){
let el;
for(let i = 0; i < ar.length; i++){
el = ar[i];
	funk(el);
}
}
executeforEach([1,2,3], function(el) { 
console.log(el) 
}); // logs 1 2 3

//3

function mapArray(ar, funk){
	let mas = [];
	executeforEach(ar, el => mas.push(funk(el)));
	return mas;
}
mapArray([2, 5, 8], function(el) { 
return el + 3 
}); // returns [5, 8, 11]

//4

function filterArray(ar, funk){
	let mas = [];
	executeforEach(ar, el => {
 if(funk(el)){
 mas.push(el);
 } 
}); return mas;
}
filterArray([2, 5, 8], function(el) {
 return el > 3 
 }); // returns [5, 8]

//5

function getAmountOfAdultPeople(data) {
	return mapArray(filterArray(data, el => 
		el.age > 18),el => el.name).length;
}
const data =[
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];

getAmountOfAdultPeople(data); // 3

//6

function getGreenAdultBananaLovers(data){
	return mapArray(filterArray(data, el => 
		el.age > 18 && el.favoriteFruit === 'banana' && el.eyeColor === 'green'),el => el.name);
}
getGreenAdultBananaLovers(data); // returns [‘George]

//7

function keys(object){
let mas = [];
 for(let key in object) {
   if(object.hasOwnProperty(key)) {
      mas.push(key);
   }
 }
return mas;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3}); // returns [“keyOne”, “keyTwo”, “keyThree”]

//8

function values(object){
 let mas = [];
 for(let key in object) {
   if(object.hasOwnProperty(key)) {
      mas.push(object[key]);
   }
 }
return mas;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3}); // returns [1, 2, 3]

//9

function showFormattedDate(someDate){
 const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
 const d = allMonths[someDate.getMonth()];
 return 'Date: ' + someDate.getDate() + ' of ' + d + ', ' + someDate.getFullYear();
}
showFormattedDate(new Date('2019-01-27T01:10:00')); // returns ‘Date: 27 of Jan, 2019’

//10

function isEvenYear(someDate){
	const d = someDate.getFullYear();
if (d%2 === 0){
		return true;
	}else{
		return false;
	}
}
isEvenYear(new Date('2019-01-27T01:10:00')); 

//11

function isEvenMonth(someDate){
	const d = someDate.getMonth();
	const Month = d+1;
if (Month%2 === 0){
		return true;
	}else{
		return false;
	}
}
isEvenMonth(new Date('2019-02-27T01:10:00')); 

