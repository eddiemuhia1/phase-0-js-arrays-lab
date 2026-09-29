// Write your code here
const products = ["Laptop","Phone","Headphones","Monitor"] 

function logFirstProduct (products){
   console.log(products[0]);
}
logFirstProduct()

function addProduct(products){
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
