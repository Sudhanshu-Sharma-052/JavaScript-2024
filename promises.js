function savetoDb(data,success,failure) {
    let internetSpeed = Math.floor(Math.random()*10)+1
    if (internetSpeed > 4){
        success()
        // console.log('your data was saved',data);
    }
    else {
        // console.log('week connection, data not saved');
        failure()
    }
}
savetoDb("Hello Nikki....!", ()=> {
    console.log('Success: your data was saved');

    savetoDb('hello promises',()=>{
        console.log('Success2: data2 saved');
        
           savetoDb('Sudhanshu Sharma',() =>{
            console.log('Success3: data3 saved');
           },()=>{
            console.log('Failure3: week connection')
           })

    },()=>{
       ; console.log('Failure2: week connection')
    })
},
()=>{
    console.log('Failure: week connection, data not saved');
})