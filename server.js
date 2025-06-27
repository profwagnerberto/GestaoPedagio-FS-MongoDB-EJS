// Adding require statement for express
const express = require("express");

// Making app variable using express
const app = express();

// Adding require statement for mongoose package
const mongoose = require("mongoose");

// Adding require statement for ejs
const ejs = require("ejs");

// Setting view engine to ejs
app.set("view engine", "ejs");

// Adding require statement for body-parser
const bodyParser = require("body-parser");

// Allowing our app to use bodyParser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

require("dotenv").config();

// Line below will connect our app to the local
// database with the name "transacoes-db"
// which will store all of our toll transactions
/* connection string - idonow */
const mongoDB = process.env.MONGODB_URI;
async function main() {
  await mongoose.connect(mongoDB);
}
main().catch((err) => console.log(err));
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro de conexão do MongoDB:"));
db.once("open", () => {
  console.log("Conectado ao MongoDB");
});

// Transacao schema is the schema for our
// records that we are going to store
// It contains placaDoVeiculo in the form of
// string, date as string, time as string
// and the toll valorDoPedagio as number
const transacaoSchema = new mongoose.Schema({
  placaDoVeiculo: String,
  data: String,
  horario: String,
  valorDoPedagio: Number,
});

// Creating the schema below
const Transacao = mongoose.model("Transacao_", transacaoSchema);

// Handling the home route
app.get("/", async function (req, res) {
  try {
    // Finding all the transactions
    const docs = await Transacao.find({});
    // We are not going to use res.send() function res.send(docs);
    // Using res.render() method instead of res.send() method we can pass data to the front-end
    res.render("index", {
      docs: docs,
    });
  } catch (err) {
    res.status(500).send("Erro ao buscar dados");
  }
});

// Handling the novoRecibo route
// passing the novoRecibo.html file on this route
app.get("/novoRecibo", function (req, res) {
  res.sendFile(__dirname + "/novoRecibo.html");
});

// Handling post request on the /novoRecibo route
app.post("/novoRecibo", function (req, res) {
  // Getting the vehicle Number from the request,
  // which was entered in the novoRecibo.html
  // page
  let vNo = req.body.placaDoVeiculo;

  // Getting the valorDoPedagio from the request.
  let amt = req.body.valorDoPedagio;

  // Creating a new transaction which we
  // are going to save in database.
  var t = new Transacao({
    placaDoVeiculo: vNo,
    data: pegarData(),
    horario: pegarHorario(),
    valorDoPedagio: amt,
  });

  // Saving the transaction in the database.
  t.save();

  // Sending response that we have saved the data
  res.send("Dados salvos.<br><br> <a href='/'>Página principal</a>");
});

// Function to get the current date
function pegarData() {
  // Creating new date object
  var data = new Date();
  var dia = data.getDay().toString().padStart(2, "0");
  var mes = data.getDay().toString().padStart(2, "0");

  return dia + "/" + mes + "/" + data.getFullYear();
}

// Function to get the current time
function pegarHorario() {
  var hoje = new Date();

  var horas = hoje.getHours().toString().padStart(2, "0");
  var minutos = hoje.getMinutes().toString().padStart(2, "0");
  var segundos = hoje.getSeconds().toString().padStart(2, "0");

  return horas + ":" + minutos + ":" + segundos;
}

// Allowing our app to listen on port 8080
app.listen(8080, function () {
  console.log("Servidor executando na porta 8080.");
});

