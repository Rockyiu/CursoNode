const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");


app.use(express.static("public"));


const products = [
  { id: "1", name: "Teclado Mecânico", price: 350.00, category: "Periféricos" },
  { id: "2", name: "Mouse Gamer", price: 150.00, category: "Periféricos" },
  { id: "3", name: "Monitor 144Hz", price: 1200.00, category: "Monitores" }
];


app.get("/", function (req, res) {
  res.render("home", { products });
});


app.get("/produto/:id", function (req, res) {

  const productId = req.params.id;
  

  const product = products.find((p) => p.id === productId);


  if (product) {
    res.render("product", { product });
  } else {
    res.send("Produto não encontrado!");
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000!");
});