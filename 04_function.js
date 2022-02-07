// 1 Функции
// Function Declaration
// Function Expretion


// // Function Declaration
// function greet(name) {
//   console.log('Пирвет-',name);
//
// }

// // Function Expretion
// const greet2 = function greet2(name){
//   console.log('Пирвет 2-',name);
//
// }


// console.log(typeof greet);
// console.dir(greet)

// // 2 Ананимные функции
// let counter =0
// const interval = setInterval(function(){ // setTimeout
//   if (counter===5) {
// clearInterval(interval)
// }
// else {
//   console.log(++counter);
// }
// },1000)

// 3 Стрелочные функции


// function greet() {
//   console.log('Пирвет-');
//
// }
//
// const arrow = (name,age) => {
//   console.log('Пирвет-',name,age);
// }
// const arrow2 = (name2) => console.log('Пирвет-',name2);
// // arrow2('Samandar')
// const pow2= num =>  num**2
//
// // console.log(pow2(5));
//
//
// const num= (a=10,b=a*2) => a+b
// console.log(num(4,5));
// console.log(num())

// function sumAll(...all){
// let result=50
// for ( let num of all){
//   result *= num
// }
// return result
// }
//
// const res=sumAll(515,662,666666,66)
// console.log(res);

// const names = ['mers','bmv','lada','opel','jentra']
// let result=10
// for (var uzb of names)
// result+=uzb
// console.log(result);

// 5 Замыкания
 /*
 function ya(...jj){
 let x=0
 for (let ss of jj){
   x+=ss
 }


  return x;
}
const saman=ya(1,15,55)
console.log(saman);
let d=55
console.log(d);



let x =Math.random()*10
let f=Math.trunc(x)
if (f===9) {
console.log(f**55 ,"g");
}
else {
  console.log(f);
}
*/

//      function creatMember(name){
//        return function(lastName){
//          console.log(name+lastName);
//        }
//      }
//
// const logWithLastName=creatMember('Samandar')
// console.log(logWithLastName('Saydikarimov'));
// console.log(logWithLastName('Otabek'));
