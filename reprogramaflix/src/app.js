const express = require("express"); // importanto express

const app = express(); // instanciando o express para acessar
// as funcionalidades contidas nele

// chamar as rotas

const series = require("./routes/seriesRoutes")


// definir roda raiz
app.use("/", series)

module.exports = app