// const square = (n) => n*n;
// console.log(square(4));


//  hello world 5 times
let id = setInterval(() =>{
    console.log('Hello World');
},2000)
setTimeout(()=>{
    clearInterval(id)
    console.log('clear interval run');
},10000)