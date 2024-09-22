let url = 'http://universities.hipolabs.com/search?name='

let btn = document.querySelector('button')
btn.addEventListener('click',async()=>{
    // console.log('button was clicked');
    let country = document.querySelector('input').value
    console.log(country);

    let colgArr = await getColleges(country)
    show(colgArr);
})
function show(colgArr){
    let list = document.querySelector('#list')
    list.innerText = ''
     
    for(colg of colgArr){
        console.log(colg.name);

        let li = document.createElement('li')
        li.innerText = colg.name
        list.appendChild(li)
    }
}

 async function getColleges(country) {
    try{
        let res = await axios.get(url+country)
        return res.data
    } catch(err){
        console.log('error',err);
        return []
    }
 }