

const create=()=>{
    return fetch('https://jsonplaceholder.typicode.com/todos',{ method: 'POST' })
    .then(response => response.json())
    .then(json => console.log(json))

}

const read=(indice)=>{
    return fetch(`https://jsonplaceholder.typicode.com/todos/${indice}`,{ method: 'GET' })
    .then(response => response.json())
    .then(json => console.log(json))

}


const update=(indice)=>{
    return fetch(`https://jsonplaceholder.typicode.com/todos/${indice}`,{ method: 'PUT' })
    .then(response => response.json())
    .then(json => console.log(json))

}

const delet =(indice)=>{
    return fetch(`https://jsonplaceholder.typicode.com/todos/${indice}`,{ method: 'DELETE' })
    .then(response => response.json())
    .then(json => console.log(json))

}