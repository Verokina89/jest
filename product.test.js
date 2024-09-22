//Aqui vamos a escribir los test unitarios para las funciones definidas en product.js.

const { resetProducts, addProduct, removeProduct, getProducts,getProduct, updateProduct} = require('./product');

beforeEach(() => {
    resetProducts();
});

/* addProduct:
-Agregar un producto.
-Incrementar el id en 1 cada vez que se añada un producto.
-Lanzar un error si el nombre o el precio no están definidos.
-Lanzar un error si el producto ya existe. 
*/
describe('addProduct', () => {
    it('should addProduct two numbers', ()=> {
        expect(addProduct(1, 2)).toBe(3);
    });
    it('should throw an error if a or b not numbers', () => {
        expect(() => addProduct(1, '2')).toThrow('a and b must be numbers');
    });
});


afterEach(() => {
    resetProducts();
});

