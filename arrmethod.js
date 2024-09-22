//forEach Method 
// let arr =[
//     {
//         name:'aman',
//         marks:95,
//     },
//     {
//         name:'ram',
//         marks:90,
//     },
//     {
//         name:'shyam',
//         marks:85,
//     }
// ]
// arr.forEach((student)=>{
//     // console.log(student);
//     console.log(student.marks);
// })

// let arr = [1,2,3,4,5]
// arr.forEach((el) => {
//     console.log(el);
// });

// arr.forEach(function(el){
//     console.log(el);
// });

// let print = function(el){
//     console.log(el);
// }
// arr.forEach(print)


// Map Method 
// let students =[
//         {
//             name:'aman',
//             marks:95,
//         },
//         {
//             name:'ram',
//             marks:90,
//         },
//         {
//             name:'shyam',
//             marks:85,
//         }
//     ]
//     let gpa = students.map((el)=>{
//         return el.marks/10
//     })

    // let num = [1,2,3,4]
    // let double = num.map((el)=>{
    //     return el **2
    // })


    // // Filter Method 
    //  let num = [1,2,3,4,5,6,7,8,9,10,11,12]
    //  let ans = num.filter((el)=>{
    //     // return el % 2 == 0  
    //     return el % 2 != 0    // Even -> True, Odd ->False
    //  })


    //  Every Method /{Some Method->Logical OR }
     let nums1 = [2,4,6,8]
        let ans1 = nums1.every((el)=>{
        // return el % 2 != 0  
        return el % 2 == 0    // Return -> True/False
     })

    //  Reduce Method
    let nums = [1,2,3,4]
    // let finalValue = nums.reduce((res,el)=>res+el)
    let finalValue = nums.reduce((res,el)=>{res+el
        console.log(res);
        return res+el
    })
    console.log(finalValue);
        