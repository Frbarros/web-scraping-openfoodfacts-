var title = document.querySelector(".title-1");
var quantity = document.querySelector("#field_quantity .field_value");
var brands = document.querySelectorAll("#field_brands a");
var ingredient = document.querySelector(".panel_text");
var scores = document.querySelectorAll("#attributes_grid .attr_title");

var messageNotFound = "Dados não encontrado"

var product = new Object();
product.title = title != null ? title.innerText : messageNotFound
product.quantity = quantity != null ? quantity.innerText : messageNotFound;
var list =  Array.from(brands).map(brand => brand.innerText);
product.brands = list.join(', ');
product.ingredient = ingredient != null ? ingredient.innerText : messageNotFound;
product.nutriScore = scores[0] != null ? scores[0].innerText : messageNotFound;
product.nova = scores[1]!= null ? scores[1].innerText : messageNotFound;
product.ecoScore = scores[2] != null ? scores[2].innerText : messageNotFound;


console.log(product)