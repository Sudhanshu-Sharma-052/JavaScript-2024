// console.dir(document.querySelectorAll('h1'))

// console.dir(document.querySelector('#description'))

// console.dir(document.querySelector('.oldImg'))

// console.dir(document.querySelector('div a'))

// console.dir(document.querySelectorAll('div a'))

// let links = document.querySelectorAll('.box a')

// for(let i=0; i<links.length; i++){
//     links[i].style.color = 'yellow'
// }

// for(link of links){
//     link.style.color = 'purple'
// }


// let para1 = document.createElement('p')
// para1.innerText='hey i am red!'
// document.querySelector('body').append(para1)
// para1.classList.add('red')

// let h3 = document.createElement('h3')
// h3.innerText='hey i am blue h3!'
// document.querySelector('body').append(h3)
// h3.classList.add('blue')


// let div = document.createElement('div')
// let h1 = document.createElement('h1')
// let para2 = document.createElement('p')

// h1.innerText = 'i am a div'
// para2.innerText = 'me too!'

// div.append(h1)
// div.append(para2)
// div.classList.add('box12')

// document.querySelector('body').append(div)

let smallImages = document.getElementsByClassName('oldImg')
for(let i=0;i<smallImages.length;i++){
//   console.dir(smallImages[i])
// console.dir(smallImages[i].src)
smallImages[i].src = "assets/spiderman_img.png" 
console.log(`value of image no. ${i} is changed`);  
}