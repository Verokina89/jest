//products.test.js: Aqui vamos a escribir los test unitarios para las funciones definidas en product.js.
const { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

//reinicia lista de productos (antes de cada test)
beforeEach(() => {
    resetProducts();
});

// addProduct.
describe('addProduct', () => {   //agrupa los tests relacionados con la función addProduct.
//1-Agregar un producto.
    it('should add a product', () => {
        addProduct('Monitor 29"', 240); //añade el primer producto 
        const products = getProducts (); //obtener lista de los productos
        expect(products.length).toBe(1); //verifica que se agrego el producto(array con 1 producto)
        expect(products[0].name).toBe('Monitor 29"'); //Verifica coincidncia del nombre
        expect(products[0].price).toBe(240); //Verificacion del precio del producto
    });
//2-Incrementar el id en 1 cada vez que se añada un producto.
    it('should increment the id with each product', () => {
        addProduct('Monitor 29"', 240);
        addProduct('Teclado Mecanico', 52);
        const products = getProducts();
        expect(products[0].id).toBe(1); //asigna el id 1 al primer producto.
        expect(products[1].id).toBe(2); //el siguiente producto tiene id 2.
    });
//-Lanzar un error si el nombre o el precio no están definidos.
    it('should throw an error if name or price is missing', () => {
        expect(() => addProduct(undefined, 240)).toThrow('Name and Price must be defined');
        expect(() => addProduct('Monitor 29"', undefined)).toThrow('Name and Price must be defined')
    })
//-Lanzar un error si el producto ya existe. Verifica que la function addProduct dara un error si el nombre o el precio no estan definidos(paramtros necesarios pra gregar un poducto)
    it('should throw an error if the product already exists', () => {
        addProduct('Monitor 29"', 240);
        expect(() => addProduct('Monitor 29"', 200)).toThrow('Product already exists')
    }); 
    
});

//test para removeProduct.
describe('removeProduct', () => {
//elimina el producto por id
    it('should remove a product by id', () => {
        addProduct('Monitor', 300); //añade
        addProduct('Teclado', 100); //añad
        
        const productsBeforeRemove = getProducts();
        expect(productsBeforeRemove.length).toBe(2); //confirma existencia de dos productos

        removeProduct(1); // Elimina el producto con id 1 (Monitor)

        const productsAfterRemove = getProducts(); //devuelve lista cn cambios
        expect(productsAfterRemove.length).toBe(1); //verifica que haya solo un producto
        expect(productsAfterRemove[0].name).toBe('Teclado'); //confirma que el producto restante es el 'Teclado'
    });
//tst producto no encontrado. elimina prducto cn id no existente
    it('should throw an error if the product is not found', () => {
        expect(() => removeProduct(999)).toThrow('Product not found');
    });
});

//test para updateProduct
describe('updateProduct', () => {
    it('should update a product by id', () => {
        addProduct('Monitor 29"', 240); //Añade un producto
        updateProduct(1, 'Monitor 32"', 300); //actualiza el producto con id 1
        const product = getProduct(1); //obtener el producto actualizado
        expect(product.name).toBe('Monitor 32"'); //comprueba el nombre nuevo
        expect(product.price).toBe(300); //comprueba el nuevo precio
    });

    it('should throw an error if product does not exist', () => {
        expect(() => updateProduct(1, 'Teclado Mecanico', 52)).toThrow('Product not found');
    });
});


afterEach(() => {
    resetProducts();
});


