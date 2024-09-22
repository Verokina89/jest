//products.js: Para poder testear las distintas funciones, tendremos que asumir que las funciones resetProducts y getProducts funcionan correctamente.

let products = [];  //array que almacena productos agregados
let id = 0;  //contador que se incrementa cuando se añada un producto nuevo (con id unico)

//funcion que reinicia lista d productos. (hac que cad test comience en una lista limpia)
function resetProducts () {
    products = [];
    id = 0;
}

//function para agregar prductos. verifica si nombre y precio no estan definidos.
function addProduct(name, price) {
    if (!name || !price) {
        throw new Error('Name and Price must be defined');
    }
    const productExists = products.some(product => product.name === name);
    if (productExists) {
        throw new Error('Product already exists');
    }
//incrementa id y lo agrega, crea un objeto (product) con id, name, price y agrega al arr products (con push)
    id += 1;
    const product = {id, name, price}
    products.push(product);  
}

//function que remueve productos por el id.
function removeProduct(id) {
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex === -1) {
        throw new Error('Product not found');
    }

    products.splice(productIndex, 1); // Elimina el producto del array
}

//function para obtner todos los productos (devuelve la lista de products) vrificando en los test que los productos se agregaron correctament
function getProducts() {
    return products;
}

//function para devolver un solo producto por su id (acceder a cada individualmente). (esto evita tener que iterar en toda la lista)
function getProduct(id) {
    const product = products.find(product => product.id === id);
    if (!product) {    //lanza error si no se encuentra el producto 
        throw new Error('Product not found');
    }
    return product;
}

//function buscar productos por id
function updateProduct(id, name, price) {
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex === -1) {
        throw new Error('Product not found');
    }
    // Verifica si el nuevo nombre ya existe en otro producto
    const nameExists = products.some((product, i) => product.name === name && i !== productIndex);
    if (nameExists) {
        throw new Error('Product with the same name already exists');
    }
    
    products[productIndex] = { id, name, price };
}

//Exporta las funciones para los tests
module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct
};


