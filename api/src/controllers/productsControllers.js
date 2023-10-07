const Product = require('../models/Product')

const createProduct = async (req, res) => {
    try {
        const { name, category, price, imgUrl, imgUrlArray } = req.body;

        const newProduct = new Product({
            name,
            category,
            price,
            imgUrl,
            imgUrlArray,
        });

        const savedProduct = await newProduct.save();

        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('Error al crear el producto:', error);
        res.status(500).json({ error: 'Error al crear el producto' });
    }
};

/////////////////////////////////////////////////////////////////////////////////////////////////
// --------------------------------------------------------------------------------------------//
/////////////////////////////////////////////////////////////////////////////////////////////////

const deleteProductById = async (req, res) => {
    try {
        const { productId } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.status(200).json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar el producto por ID:', error);
        res.status(500).json({ error: 'Error al eliminar el producto por ID' });
    }
};

/////////////////////////////////////////////////////////////////////////////////////////////////
// --------------------------------------------------------------------------------------------//
/////////////////////////////////////////////////////////////////////////////////////////////////

const updateProductById = async (req, res) => {
    try {
        const { productId } = req.params;
        const updatedData = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(productId, updatedData, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error('Error al actualizar el producto por ID:', error);
        res.status(500).json({ error: 'Error al actualizar el producto por ID' });
    }
};

/////////////////////////////////////////////////////////////////////////////////////////////////
// --------------------------------------------------------------------------------------------//
/////////////////////////////////////////////////////////////////////////////////////////////////

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};

/////////////////////////////////////////////////////////////////////////////////////////////////
// --------------------------------------------------------------------------------------------//
/////////////////////////////////////////////////////////////////////////////////////////////////

const getProductById = async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error('Error al buscar el producto por ID:', error);
        res.status(500).json({ error: 'Error al buscar el producto por ID' });
    }
};


module.exports = {createProduct, deleteProductById, updateProductById, getProducts, getProductById};
