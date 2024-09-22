// async function return promise

async function greet(){
    // abc.abc()
     throw'404 page not found'
    return 'hello shivam......!'
}

greet()
.then((result)=>{
    console.log('promise was resolved');
    console.log('result was:',result);
})
.catch((error)=>{
    console.log('promise was rejected with error:',error);
})

let demo = async()=>{
    return 'nikki00052!'
}
