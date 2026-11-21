import mongoose from "mongoose";
import * as productService from "../services/product.service.js";

export async function listProducts(req, res) {
    try {
        const products = await productService.getServiceAllProducts();
        return res.status(200).json(products);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}

export async function createProduct(req, res) {
    try {
        const newProduct = await productService.createServiceProduct(req.body);
        return res.status(201).json(newProduct);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            return res.status(400).json({
                error: "Error de Validacion",
                details: Object.values(error.errors).map(item => item.message)
            });
        }
        console.error(error);
        return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}

export async function getProductById(req, res) {
    try {
        const product = await productService.getServiceProductById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: "PRODUCT_NOT_FOUND" });
        }
        return res.status(200).json(product);
    } catch (error) {
        if (error instanceof mongoose.Error.CastError) {
            return res.status(400).json({ error: "INVALID_PRODUCT_ID" });
        }
        console.error(error);
        return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}

export async function updateProduct(req, res) {
    try {
        const product = await productService.updateServiceProduct(req.params.id, req.body);
        if (!product) {
            return res.status(404).json({ error: "PRODUCT_NOT_FOUND" });
        }
        return res.status(200).json(product);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            return res.status(400).json({
                error: "Error de Validacion",
                details: Object.values(error.errors).map(item => item.message)
            });
        }
        if (error instanceof mongoose.Error.CastError) {
            return res.status(400).json({ error: "INVALID_PRODUCT_ID" });
        }
        console.error(error);
        return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}

export async function deleteProduct(req, res) {
    try {
        const product = await productService.deleteServiceProduct(req.params.id);
        if (!product) {
            return res.status(404).json({ error: "PRODUCT_NOT_FOUND" });
        }
        return res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        if (error instanceof mongoose.Error.CastError) {
            return res.status(400).json({ error: "INVALID_PRODUCT_ID" });
        }
        console.error(error);
        return res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
    }
}
