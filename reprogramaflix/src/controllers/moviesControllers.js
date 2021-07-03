const { request } = require("express")
const movies = require("../models/filmes.json") //importanto arquivo json dos filmes 
//dos meus dados 

const home = (request, response) =>{
    response.status(200).send("Olá, pessoa. Seja muito bem vinda ao {reprograma}Flix!!! ")
}


//app.get("/", (request, response) =>{

    //response.status(200).send("Olá, pessoa. Seja muito bem vinda ao {reprograma}Flix!!! <3")
    //})

    const getAll = (request, response)=>{
        response.status(200).send(movies)
    }

    const getById = (request, response)=>{
        const idRequerido = request.params.id;
        // find(elemento) => elemento + a logica
        const idFiltrado = movies.find(movie=>movie.id == idRequerido)

        response.status(200).send(idFiltrado)
    }

    const getByTitle = (request, response)=>{
        const requestdTitle = request.query.title.toLowerCase()
        //enviar uma resposta pra minha requisição
        const filteredTitle = movies.find(movie=>movie.title.toLowerCase().includes(requestedTitle))

        if(filteredTitle ==="" || filteredTitle === undefined){
            response.status(400).send({
                "massage": "Por favor, insira um título válido"
            })
            
        }

        response.status(200).send(filteredTitle)

        
    }
    
    module.exports = {home,getAll, getById, getByTitle}