const { Product, Category } = require("../model");

exports.findAll = (req, res) => {
    Product.findAll({
        include: Category
    })
    .then(data => {
        return res.status(200).json({ data: data });
    })
    .catch(err => {
        res.status(500).send({ message: err.message || "Somthing went wrong" });
    });
}

exports.findByProductId = (req, res) => {
    Product.findOne({
        where: { id: req.params.productId },
        include: Category
    })
    .then(data => {
        if (!data) {
            return res.status(404).json({ message: "Product not found", data: null });
        }
        return res.status(200).json({ data: data });
    })
    .catch(err => {
        res.status(500).send({ message: err.message || "Somthing went wrong" });
    });
}

exports.findProductByCategoryId = (req, res) => {
    Product.findAll({
        where: { categoryId: req.params.categoryId },
        include: Category
    })
    .then(data => {
        if (!data) {
            return res.status(404).json({ message: "Product not found", data: null });
        }
        return res.status(200).json({ data: data });
    })
    .catch(err => {
        res.status(500).send({ message: err.message || "Somthing went wrong" });
    });
}