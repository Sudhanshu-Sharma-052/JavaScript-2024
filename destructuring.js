// Destructuring Method 
// Storing values of array into multiple variables

let names = ['nikki','shivam','sachin','himanshu','asd','cvdgcvf']
// let winner = names[0]
// let winnerup = names[1]
// let secondRunnerup = names[3]

let [winner,winnerup,secondRunnerup,...other] = names


// Destructuring for object 

const student = {
    name: 'ram',
    age: 23,
    class: 12, 
    subjects: ['hindi','english','maths','science'],
    username: 'sudhanshu@123',
    password: 'zxasde',
}
let{username: user,password} = student