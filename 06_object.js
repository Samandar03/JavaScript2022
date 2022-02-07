// // Обьекты


// const person={
//   name:'Samandar',
//   age:18,
//   iaProgrammer:true,
//   languages:['ru','en','de'],
//   'complex key': 'Comple Value',
//   ['key_'+(1+3)]: 'Computed Key', // key_4
//   greet(){
//  console.log('greet from person');
//   },
//   info(){
//     // console.log('this:',this);
//     console.info( 'Информация про человека по имени:',this.name)
//   }
// }

// // console.log(person);
// // const saam = ['']
// // console.log(person.name);
// // const ageKey = 'age'
// // console.log(person[ageKey]);
// // console.log(person['complex key']);
// // const sam = ['key_'+4]
// // console.log(person[sam]);
// // person.greet()
// //
// //
// // person.age++
// // person.languages.push('by')
// // person['key-4']= undefined
//  /* CamelCase (с англ. — «ВерблюжийРегистр», также «ГорбатыйРегистр», «СтильВерблюда») — стиль написания составных слов, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри фразы пишется с прописной буквы. Стиль получил название CamelCase, поскольку прописные буквы внутри слова напоминают горбы верблюда (англ. Camel).

// Частным случаем стиля является lowerCamelCase, когда с прописной буквы пишутся все слова, кроме первого. */
// // delete person['key_4'] // delete ochirish
// //
// // console.log(person);
// // console.log(person['key-4']);


// // const {name,age: personAge=10 ,languages} = person  // age: personAge=10
// //
// //
// // console.log(name,personAge,languages)


// // for ( let key in person){ // in obekitga qollaniladi
// //   if (person.hasOwnProperty) {  // has Own Propert-o'z mulkiga ega
// //     console.log('key',key);
// //     console.log('value',person[key]);
// //   }

// //  }
 
// // Object.keys(person).forEach( (key)=>{  // әрқайсысы үшін- forEach
// //    console.log('key:',key);
// //    console.log('value:',person[key]);
// // })
//  //// keys-kalitlari masifga aylantirdi
//  //// Object.keys usuli to'g'ridan-to'g'ri ob'ektning o'zida joylashgan sanab o'tilgan xususiyatlarning nomlariga mos keladigan 
//  ////qator elementlarini qaytaradi. Xususiyatlarning tartibi ob'ektdagi xususiyatlarni tsikl orqali qo'lda sanab o'tish bilan bir xil. 
// // Context
// // person.info()

// const logger ={
//   keys(){
//     console.log('Object Keys ', Object.keys(this))
//   },
//   keysAndValues(){
//     // "key": value
//   // Object.keys(this).forEach( key =>{
//   //   console.log(`"${key}": ${this[key]}`);
//   // })   
//   // const self = this

//   Object.keys(this).forEach( function (key){
//     console.log(`"${key}": ${this[key]}`);
//   }.bind(this)) 
//   },
//   withParams(top = false,between =false, bottom=false){
//     if (top){
//       console.log('----Start----');
//     }
//      Object.keys(this).forEach(( key ,index ,array) =>{
//     console.log(`"${key}": ${this[key]}`);
//       if (between && index !==array.length-1) {
//         console.log('--------');
//       }
//     },


//   )   
//     if (bottom) {
//       console.log('----End----');
//     }

//   }
// }
// const bound =logger.keys.bind(person)
// bound()
// logger.keys.call(person)

// logger.keysAndValues.call( person)
// logger.withParams.call(person,true,true,true)
// logger.withParams.apply(person,[true,true,true]) // apply ikki parametirni o'z ichiga oladi
