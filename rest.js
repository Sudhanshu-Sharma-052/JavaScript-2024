// Rest Method
 
// function sum(...args){
//     for(let i=0; i<args.length; i++){
//         console.log('you give us',args[i]);
//     }
// }

// function min(a,b,c,d){
//     console.log(arguments);
// }

// function sum(...args){
//     return args.reduce((sum,el)=>sum+el)
// }

function min(msg,...args){
    console.log(msg);
        return args.reduce((min,el)=>{
            if(min>el){
                return el
            }
            else{
                return min
            }
        }) 
}