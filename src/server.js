const express = require("express");
const path = require("path");
var bodyParser = require("body-parser"); 
const enableHotReload = require("./hot-reload");

const app = express();

var exemploController = require("./controllers/exemplo")

var produtoController = require("./controllers/produto")

// Configurações do seu app Express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: false}));
// Habilitar hot-reload
enableHotReload(app);

// Rotas
app.get("/", exemploController.mostrarTelaDeExemplo);
app.get("/produto", produtoController.mostrarTela);
app.post("/adicionar-produto", produtoController.adicionarProduto);

// Inicie o servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});