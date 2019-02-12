function reverseNumber(x){
 let reverse = parseInt(x.toString().split('').reverse().join(''));
 let negative = -parseInt(x.toString().split('').reverse().join(''));
if(x < 0){
 return negative; 
 }else{
 return reverse;
 }	     
}
reverseNumber(123);