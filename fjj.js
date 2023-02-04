// function add(num1 , num2) {
//   console.log('going to add:',num1 , num2)
//   var sum = num1+num2;
//   console.log('sum:',sum)
// }

// add( 10, 10 );

// function add(number1, number2) {
//     var sum= number1 + number2;
//     // console.log(sum);
//     return sum;
// }
// var total = add(80, 20);
// console.log(total)


// function bringSingara(money) {
//     var singarasPrice = 10;
//     var quantity = money/singarasPrice;
//     return quantity;
// }
// var myTaka= 500;
// var singaras = bringSingara(myTaka);
// console.log(singaras)

// var number = 12;
// for(var i=1; i<=10; i++){
//     console.log(number + 'X'+ i +'='+ number*i)
// }

// function multiply(number){
//     for(var i = 1; i<=10; i++){
//         console.log(number+'X'+i+'='+number*i)
//     }
// }

// multiply(13);

// function getTotal (assin1, assin2, assin3){
//     var totalMark = assin1 + assin2 + assin3;
//     var submitAssin = 3;
//     var avarage = totalMark / submitAssin;
//     return avarage;
// }

// var myMark = getTotal(57, 54, 48);
// console.log('My average so far:', myMark)

// function add(num1, num2) {
//     const sum = num1 + num2;
//     return sum;
// }

// const result1 = add(12, 12)
// const result2 = add(10, 10);
// const finalResult = result1 + result2;
// console.log(result1)
// console.log(result2)
// console.log(finalResult)


// console.log(2000%4)

// function inchToFeet(inch){
//      var feet = inch/12; 
//      return feet; 
//     }

//     var findFeet = inchToFeet(144)
//     console.log(findFeet)

// for(let i = 0; i<10; i++){ 
//     console.log(i)
// }

// for( let i = 10; i>=1; i--){ 
//     console.log(i)
// }

// function print(a, b, c){
//     return a+2;
//     return a*b;
//     return b*c+a;
//   }
//   console.log(print(1,2,3));

// let  a = 50;

// if(item => 50){

// };

// if(false){

// }

// for(let i =1; i<=20; i++){
//     console.log(i);
//     if (i>5) {
//         continue;
//     }
// }


// var array = [5, 15, 25, 35, 45, 55, 65, 75, 33, 44, 66, 115]

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if(element>=90){
//         continue;
//     }
//     console.log(element)
//   }


// for (var i =10; i>0; i-- ){
//     console.log(i)
// }


// var array = [5, 15, 25, 35, 45, 55, 65, 75, 33, 44, 66, 115]

// for (let i = array.length-1; i >= 0; i--) {
    // const element = array[i];
    // console.log(element)
// 


// var applePrice = 150;
// // applePrice= 170;

// // applePrice = applePrice+40;

// applePrice +=60;
// console.log(applePrice)

// var nameHis ="Abdul+' '+Hamid";
// console.log(nameHis)

// var price = 30;
// price *= 10;
// console.log(price)



// var Items = ['numeric', 'string', 'boolean', 'indexof', 'shorthand', 'parseInt', 'parseFloat', 'toFixed', 'remainder', 'push', 'pop', 'shift', 'unshift', 'operators', 'if', 'else', 'while loop', 'for loop']

// // console.log(Items)
// var i = 0;
 
// while(i < Items.length){
//     var item = Items[i];
//     i++;
//     console.log(item);
// }

// var mobileUses = ["nokia 1100", 'nokia 1200', 'symphony', 'samsung button', 'sansung galaxy j3', 'redmi 9']
// var i = 0;
// while (i<mobileUses.length) {
//     var mobileUse = mobileUses[i];
//     i++;
//     console.log(mobileUse)
// }

var bookPrices = [100, 150, 180, 130, 250, 230, 300, 450, 170, 150, 120];

for(var i = 0; i<bookPrices.length; i++){
    var bookPrice = bookPrices[i];
    if(bookPrice>200){
        continue;
    }
    console.log(bookPrice);
    
}

