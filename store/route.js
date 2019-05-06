
export const actions = {
    async CREATE ({ commit }) {
        const create=()=>{
        return fetch('https://jsonplaceholder.typicode.com/todos',{ method: 'POST' })
        .then(response => response.json())
        .then(json => console.log(json))

    }
    commit('SET_CREATE', data)
},
async READ ({ commit }) {
    const read=(indice)=>{
        return fetch(`https://jsonplaceholder.typicode.com/todos/${indice}`,{ method: 'GET' })
        .then(response => response.json())
        .then(json => console.log(json))

    }
    commit('SET_READ', data)
},
async UPDATE ({ commit }) {

    const update=(indice)=>{
        return fetch(`https://jsonplaceholder.typicode.com/todos/${indice}`,{ method: 'PUT' })
        .then(response => response.json())
        .then(json => console.log(json))

    }
    commit('SET_UPDATE', data)
},
async DELETE ({ commit }) {
    const delet =(indice)=>{
        return fetch(`https://jsonplaceholder.typicode.com/todos/${indice}`,{ method: 'DELETE' })
        .then(response => response.json())
        .then(json => console.log(json))

    }
    commit('SET_DELETE', data)
}
}