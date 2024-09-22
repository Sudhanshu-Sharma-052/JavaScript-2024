// Arrow Function
  
const sum = (a,b)=>{
    console.log(a+b);
}

const cube = (n) => {
    return n*n*n
}

const pow = (a,b) =>{
    return a**b
}


// Implicit return

const mul = (a,b) => (a*b)

const sub = (a,b)=> a-b


// Set timeout(function,timeout)

// console.log('hello js...');
// setTimeout(()=>{
//     console.log('Hii sudhanshu...');
// },5000)
// console.log('welcome...');

 
// setInterval(function,setTimeout)

// setInterval(()=>{
//     console.log('hello nikki');
// },5000)

// let id = setInterval(()=>{
//          console.log('hello nikki');
//      },3000)
//      console.log(id);

//      let id2 = setInterval(()=>{
//         console.log('hello nikki sharma');
//     },4000)
//     console.log(id2);


// this with arrow function

const student = {
    name: 'aman',
    marks: 90,
    property: this, //global scope

    getName: function() {
        console.log(this);
        return this.name
    },

    getMarks: () => {
        console.log(this);  //parent's scope
        return this.marks
    },

    getInfo1: function(){
        setTimeout(() =>{
            // console.log('hello...');
            console.log(this);  //student
        },4000)
    },

    getInfo2: function(){
        setTimeout(function() {
            // console.log('nikki...');
            console.log(this);  //window
        },4000)
    },
}; 

