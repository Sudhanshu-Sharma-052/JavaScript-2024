let fruits = ['mango','apple','banana','litchi','orange']

fruits.push('pineapple')

//  for(let i=0;i<fruits.length;i++){

    // reverse
    for(let i=fruits.length-1;i>=0;i--){

        // 

    // for(let i=1;i<fruits.length;i=i+2){

        // for(let i=0;i<fruits.length;i=i+2){


    console.log(i,fruits[i]);
}


// for of loop=element of collection

let fruits1 = ['mango','apple','banana','litchi','orange']
for(fruit of fruits1){
console.log(fruit);
}


for(char of 'apna college'){
 console.log(char);   
}

// Nested for of loop

let heroes = [['ironman','spiderman','thor'],['superman','flash','wonder woman']]

for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}
