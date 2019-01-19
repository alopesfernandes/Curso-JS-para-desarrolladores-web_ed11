//ASYNC / AWAIT

const apiUrl = 'https://api.randomnumber.com'

async function llamadaApi(){
    let randomNumbers = await fetch(apiUrl)
    randomNumbers = await randomNumbers.json()
    console.log(randomNumbers)
}

//Promesas

const apiUrl = 'https://api.randomnumber.com'

fetch(apiUrl).then(fun)