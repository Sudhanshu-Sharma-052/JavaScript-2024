// take one or multiple functions as arguments

// function multipleGreet(fun,n){
//     for(let i=1;i<=n;i++){
//         fun()
//     }
// }

// let greet = function(){
//     console.log('hello...');
// }
// multipleGreet(greet,2)


// Return as an output

function oddOrEvenFactory(request){
    if(request == 'odd'){
        let odd = function(n){
            console.log(!(n%2 == 0));
        }
        return odd;
    }
    else if(request == 'even'){
        let even = function(n){
            console.log(n%2 == 0);
        }
        return even;
    }
    else{
        console.log('Wrong request...');
    }
}
let request = 'odd'