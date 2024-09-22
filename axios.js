// Library to make HTTP requests


let btn =document.querySelector('button')
let url2 = 'https://dog.ceo/api/breeds/image/random'

    btn.addEventListener('click', async()=>{
    let link = await getImage()
    // console.log(link);
    let img = document.querySelector('#result')
    img.setAttribute('src', link)
    console.log(link);
    })

    async function getImage() {
             try{
             let res = await axios.get(url2)
              return res.data.message
            // console.log(res.data.message);
        
             } catch(err){
                 console.log('Error----',err);
                 return 'No image found....'
             }
         }


// btn.addEventListener('click', async()=>{
//     let fact = await getFacts()
//     console.log(fact);
//     let p = document.querySelector('#result')
//     p.innerText = fact
// })

// let url = 'https://catfact.ninja/fact'
// async function getFacts() {
//     try{
//     let res = await axios.get(url)
//     return res.data.fact

//     } catch(err){
//         console.log('Error----',err);
//         return 'No fact found....'
//     }
// }