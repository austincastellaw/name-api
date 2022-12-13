const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
        'age':29,
        'name':'joseph',
        'location':'london'
    },
    'chance':{
        'age':29,
        'name': 'chancellor',
        'location': 'chicago'
    },
    'dylan':{
        'age':29,
        'name': 'dylan',
        'location': 'dylan'
    },

}

app.get('/', (request, response)=>{
    response.sendFile(__dirname+ '/index.html')
})

app.get('/api/:rapperName', (request,response)=>{
    const rappersName= request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])

    }else{
        response.json(rappers['Dylan'])
    }
    // response.json(rappers)
})

app.listen(PORT, ()=>{
    console.log(`the server is running on port ${PORT} you better catch it`)
})