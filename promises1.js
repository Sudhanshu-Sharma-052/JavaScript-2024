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
.then(()=>{
    // console.log('promise was resolved');
    console.log('data1 saved');
    // savetoDb('hii nikki..')
    // .then(()=>{
    //     console.log('data2 saved ');
    // })

    return savetoDb('hii nikki..')
})
.then(()=>{
    console.log('data2 saved');
})

.catch(()=>{
    console.log('promise was rejected');
})