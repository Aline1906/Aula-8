const { request } = require("express")
const series = require("../models/series.json") //importanto arquivo json dos filmes 
//dos meus dados 

const home = (request, response) =>{
    response.status(200).send("Olá, pessoa. Seja muito bem vinda ao {reprograma}Flix Series!!! ")
}


//app.get("/", (request, response) =>{

    //response.status(200).send("Olá, pessoa. Seja muito bem vinda ao {reprograma}Flix Series!!! <3")
    //})

    const getAll = (request, response)=>{
        response.status(200).send(series)
    }

    const getById = (request, response)=>{
        const idRequerido = request.params.id;
        // find(elemento) => elemento + a logica
        const idFiltrado = series.find(serie=>serie.id == idRequerido)

        response.status(200).send(idFiltrado)
    }

    const getByTitle = (request, response)=>{
        const requestdTitle = request.query.title.toLowerCase()
        //enviar uma resposta pra minha requisição
        const filteredTitle = series.find(serie=>serie.title.toLowerCase().includes(requestedTitle))

        if(filteredTitle ==="" || filteredTitle === undefined){
            response.status(400).send({
                "massage": "Por favor, insira um título válido"
            })
            
        } else{
            response.status(200).send(filteredTitle)
        }
    }


        const getByGenre = (request, response) =>{
            const requestedGenre = request.query.genre.toLowerCase();
            const filteredGenre = series.filter(serie => {
              const filter = serie.genre.find(genre => genre.toLowerCase().includes(requestedGenre))
        
              
            });
        
            if (filteredGenre.length == 0){
                response.status(404).send({"message": "Favor insira um genero válido"
                })
            }else{
                response.status(200).send(filteredGenre)
            }

        
        }
    
    module.exports = {home,getAll, getById, getByTitle, getByGenre}
    