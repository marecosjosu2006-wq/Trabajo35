import Product from "../models/product.model.js";

const getServiceAllProducts = () => {
    return Product.find().sort({ createdAt: -1 });
};

const createServiceProduct = (productData) => {
    return new Product(productData).save();
};

const getServiceProductById = (productId) => {
    return Product.findById(productId);
};

const updateServiceProduct = (productId, productData) => {
    return Product.findByIdAndUpdate(productId, productData, {
        new: true,
        runValidators: true
    });
};

const deleteServiceProduct = (productId) => {
    return Product.findByIdAndDelete(productId);
};

export {
    getServiceAllProducts,
    createServiceProduct,
    getServiceProductById,
    updateServiceProduct,
    deleteServiceProduct
};
