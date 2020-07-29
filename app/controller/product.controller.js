const { product, category } = require("../model");

exports.findAll = (req, res) => {
    product.findAll({
        include: category
    })
    .then(data => {
        return res.status(200).json({ data: data });
    })
    .catch(err => {
        res.status(500).send({ message: err.message || "Somthing went wrong" });
    });
}

exports.findByProductId = (req, res) => {
    product.findOne({
        where: { id: req.params.productId },
        include: category
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
    product.findAll({
        where: { categoryId: req.params.categoryId },
        include: category
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