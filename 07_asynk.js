
// Асинхронны -Асинхрония (Асинхронизм) (грек тілінен. Α – терістеу, συν – бірге, χρονος – уақыт) – уақыт бойынша ешнәрсемен сәйкес келмеу; біркелкі емес, бір мезгілде емес, синхронды емес [1] – уақыт бойынша сәйкес келмейтін процестерді сипаттайды [2]. Арнайы әдебиеттерде белгілі бір қолдану үшін қолданылатын термин,
// жалпы мағынада бұл синхрондалмаған күй [3]. Белгілі бір салаларда контекстке немесе тарихи пайдалану дәстүріне байланысты бір немесе басқа пішін қолданылады.
// Event Loop-Voqealar sikli

// const timeout = setTimeout(  () =>{
//   console.log('After timeound');   // After timeound- Vaqt o'tgandan keyin
// },2500)
//  clearTimeout(timeout)  // timeout-vaqt tugadi , setTimeout-Vaqt tugashini belgilang , clearTimeout- Vaqt tugashini belgilang

//  const interval = setInterval(  () =>{
//   console.log('After interval');   // After interval- Үзілістен кейін
// },1000)
//  clearInterval(interval)  // interval-oraliq ,setInterval-аралық орнату  ,  clearInterval-aniq oraliq

const delay = (wait = 1000) =>{
    const promise = new Promise( (resolve , reject)=>{
      setTimeout( () =>{
        reject('Что-то пошле не так. Повтщрите попытку')
        // resolve()
      },wait )
    })
  return promise
  
   }
  // delay(2500) 
  // .then(() =>{
  //   console.log('After 2 second')
  // })
  // .catch( err => console.error('error:',err) )
  // .finally( () => console.log('Finally'))
  
  
   //// wait-Kutmoq , delay-kechikish ,promise-va'da, new-yangi, new Promise-yangi va'da
   //// resolve-hal qilish,reject-rad qilish,catch-tutmoq,then-keyin,finally-nihoyat
   
   const getData = () => new Promise(resolve => resolve([
     1,1,2,3,5,8,13
   ]))
  
  //  getData().then( data => console.log(data))
   
   async function asyncExampl(){ //getData-ma'lumotlarni olish , await-kuting  , promise-va'da, try-harakat qilib ko'ring,
    try{
      await delay(3000)
   const data = await getData()
   console.log('Data', data);
    }  catch (s) {
       console.log(s);
       }
     finally{
       console.log('finally');
     }
   }
  
  asyncExampl()
  