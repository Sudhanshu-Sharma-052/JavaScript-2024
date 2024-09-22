// let nums = [10,20,30,40]
// let ans = nums.every((el)=>el%10==0)
// console.log(ans);


// Minimum Number
let nums = [10,20,30,40]
//  let min = nums.reduce((min,el)=>{
//     if(min<el){
//         return min
//     }
//     else{
//         return el
//     }
//  })
//  console.log(min);


 function getMin(nums){
    let min = nums.reduce((min,el)=>{
        if(min<el){
            return min
        }
        else{
            return el
        }
     })
     return min
 }
