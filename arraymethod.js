// push,pop,shift,unshift
let cars =['audi','bmw','xuv','maruti','honda']
cars.push('toyota')
console.log(cars);
cars.pop()
console.log(cars);


let cars1 =['audi','bmw','xuv','maruti','honda']
cars1.unshift('toyota')
console.log(cars1);
 cars1.shift()
 console.log(cars1);


 let followers = ['a','b','c','d']
  let blocked = followers.shift()
 console.log(followers);


//  indexOf
let primary = ['red','yellow','blue']
console.log(primary.indexOf('yellow'))
console.log(primary.indexOf('Yellow'))

// concat
let primary1 =['audi','bmw','xuv','maruti','honda']
let primary2 = ['red','yellow','blue']
console.log(primary1.concat(primary2));
// reverse
console.log(primary1.reverse());


// sort = Arrange in ascending/descending order 
let days = ['Monday','Sunday','Tuesday','Thursday','Wednesday']
console.log(days.sort());

let nums = [8,5,9,6,3,4,2]
console.log(nums.sort());


// slice = copies a portion of an array
let colors2 = ['red','yellow','blue','green','pink','orange']
//  let colors1 = colors2.slice(2,3)
 let colors1 = colors2.slice(-2)
 console.log(colors1);


//  splice = iteration,delete,update;
 let colors = ['red','yellow','blue','green','pink','orange']
  colors.splice(1,3)
 //  colors.splice(2,4,"niki","ashu")
 console.log(colors);

