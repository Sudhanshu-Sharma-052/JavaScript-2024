// let btn = document.querySelector('button')
// console.dir(btn)

// btn.onclick = function(){
//     // console.log('button was clicked');
//     alert('button was clicked')
// };

let btns = document.querySelectorAll('button')

for(btn of btns){
    // btn.onclick = sayHello

    // btn.addEventListener('click', sayHello);
    // btn.addEventListener('click', sayName);

    btn.addEventListener('dblclick', function(){
        console.log('you double clicked me');
    });



    btn.onmouseenter = function(){
        console.log('you entered a button!');
    }
    console.dir(btn)
}

function sayHello(){
    alert('Hello!')
}

function sayName(){
    alert('Hello Sudhanshu !')
}