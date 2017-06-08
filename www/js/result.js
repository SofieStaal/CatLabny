food;

var match = Number(sessionStorage.getItem('product'));
var product = food[match];

console.log(product);

document.getElementById('gram').innerHTML = product.gram;
document.getElementById('name').innerHTML = product.name;


var name = sessionStorage.getItem('catName');
document.getElementById('yourCatName').innerHTML = name;
