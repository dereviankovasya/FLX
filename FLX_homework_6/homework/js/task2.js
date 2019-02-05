function discountPrice() {
const money = parseFloat(prompt('your money: ', '0')),
    discount = parseFloat(prompt('your discount: ', '0'));
if((money >= 9999999 || money <= 0) || (discount <= 0 || discount >= 99) || (isNaN(money) || isNaN(discount))) {
	return 'Invalid input data';
}else{
	let saved = Math.round(((money / 100) * discount)*100)/100;
     let discountMoney = money - saved;
   return 'Price without discount: ' + money + '\nDiscount: ' + discount +'%'
    + '\nPrice with discount: ' + discountMoney + '\nSaved: ' + saved;   
} 
  }
alert(discountPrice());
//використав alert, console.log видає error (ESlint)



 