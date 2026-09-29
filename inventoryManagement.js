// Write your code here
const products = ["Laptop","Phone","Headphones","Monitor"] 

function logFirstProduct (){
  console.log(products[0]);
}

function addProduct(productName){
  products.push(productName);
}

function updateProductName (index, newName){
  products[index] = newName;
}

function removeLastProduct(){
  products.pop()
}



// Export the necessary parts for testing
module.exports = {
  products,
  logFirstProduct,
  addProduct,
  updateProductName,
  removeLastProduct
};
