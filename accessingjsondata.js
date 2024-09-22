let jsonRes = 
    `{"fact":"A cat's field of vision is about 200 degrees.","length":45}`;
// console.log(jsonRes);

let validRes = JSON.parse(jsonRes)  
console.log(validRes.fact)