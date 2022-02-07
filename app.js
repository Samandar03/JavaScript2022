 // Работа с DOM-Document Object Model
//  window.alert(1)

// window.prompt('Как тибя завуд?')
// window.confirm('Как тибя завуд?')
// window.setInterval()

// console.dir(heading);  // dir- ichidagi malumotini korsatadi
// console.dir(heading.id); 
// console.dir(heading.textContent);
// heading.textContent='Chang from JavaScript!' 
// console.dir(heading.textContent);
// heading.style.color='red'
// heading.style.textAlign= 'center'
// heading.style.backgroundColor = 'black'
// heading.style.padding = '2rem'


const heading= document.getElementById('hello')       // getElementById- id ni chaqirish
// const heading2 = document.getElementsByTagName('h2')[0]  //getElementsByTagName- Elementni chaqirish
// const heading2 =document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('.h2-class')  // слектир-qul
// const heading2 = document.querySelector('#sub-hello') // Всегда 1 элемент
const heading2 = document.querySelector('h2')
console.dir(heading2)


// const heading3 = heading2.nextElementSibling
// console.log(heading3);
const h2List = document.querySelectorAll('h2')
console.log(h2List);
const heading3 = h2List[h2List.length-1]
console.log(heading3);



setTimeout( () => {
   addStylesTo(heading,'JavaScript')
    
},500)

const link = heading3.querySelector('a')
link.addEventListener('click', (event) => {
    event.preventDefault()  // preventDefault-bosganda chiqarib beradi consolga
    console.log('click on link',event.target.getAttribute('href')); // target-сама силка
    const url = event.target.getAttribute('href')

    window.location =url
})
setTimeout( () => {
    addStylesTo(link,'Практика',color='blue')
     
 },3000)

setTimeout( () => {
    addStylesTo(heading2,'И все получится!' , color='yellow', fontSize='2rem')
     
 },4500)




function addStylesTo(node,text, color = 'red', fontSize){
    node.textContent= text
    node.style.color=color
    node.style.textAlign= 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width ='100%'
    // false: '', undefined, null, 0 , fale .
    if (fontSize) {
     node.style.fontSize = fontSize




        
    }
}

heading.onclick = () => {  // oncklick ustiga basganda qoshib keta beradi
      // mdn mouseevent сабити мыши
      if (heading.style.color === 'red') {
       heading.style.color='#000'
       heading.style.backgroundColor= '#fff'  
      }
      else{
          heading.style.color = 'red'
          heading.style.backgroundColor= '#000'
      }
}


heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'yellow') {
        heading2.style.color='#000'
        heading2.style.backgroundColor= '#fff'  
       }
       else{
           heading2.style.color = 'yellow'
           heading2.style.backgroundColor= '#000'
       }
})