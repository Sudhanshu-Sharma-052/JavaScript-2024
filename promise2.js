function savetoDb(data) {
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1
        if(internetSpeed>4){
            resolve('Success: data was saved')
        }else {
            reject('Failure: week connection')
        }
    })
}
savetoDb('Hello Nikki....')
.then((result)=>{
    console.log('data1 saved');
    console.log('result of promise:',result);

    return savetoDb('hii nikki..')
})
.then((result)=>{
    console.log('data2 saved');
    console.log('result of promise:',result);
})

.catch((error)=>{
    console.log('promise was rejected');
    console.log('error of promise:',error);
})