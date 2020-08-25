const { Product, Category, Order, OrderDetails, User, Sequelize } = require("../model");
const op = Sequelize.Op;

exports.findAll = (req, res) => {
    OrderDetails.findAll({
        include: [{
            model: Order,
            as: 'order',
            required: true,
            include: { model: User, required: true, }
        }, {
            model: Product,
            as: 'product',
            required: true
        }]
    })
        .then(data => {
            return res.status(200).json({ data: data });
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Somthing went wrong" });
        });
}

exports.findByOrderId = (req, res) => {
    OrderDetails.findAll({
        where: { '$order.id$': req.params.orderId },
        include: [{
            model: Order,
            as: 'order',
            required: true,
            include: { model: User, required: true }
        }, {
            model: Product,
            as: 'product',
            required: true
        }]
    })
        .then(data => {
            return res.status(200).json({ data: data });
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Somthing went wrong" });
        });
}


exports.create = (req, res) => {
    const { userId, product } = req.body;
    if (userId !== null && userId > 0) {
        Order.create({
            userId: userId
        }).then(order => {
            if (order) {
                product.forEach(p => {
                    console.log("From loop")
                    console.log(p.incart)
                    Product.findOne({
                        where: { id: p.id }
                    }).then(cartProduct => {
                        console.log("From query")
                        console.log(cartProduct.quantity)
                        let cardQuantity = parseInt(p.incart);
                        if (cartProduct.quantity > 0) {
                            cartProduct.quantity = cartProduct.quantity - cardQuantity;
                            if (cartProduct.quantity < 0) {
                                cartProduct.quantity = 0;
                            }
                        } else {
                            cartProduct.quantity = 0;
                        }

                        OrderDetails.create({
                            orderId: order.id,
                            productId: p.id,
                            quantity: cardQuantity
                        }).then(orderDetails => {

                            Product.update({
                                quantity: cartProduct.quantity
                            }, {
                                where: { id: p.id }
                            }).then(updatedProduct => {
                            }).catch(err => {
                                res.status(500).send({ message: err.message });
                            });

                        }).catch(err => {
                            res.status(500).send({ message: err.message });
                        });

                    })
                        .catch(err => {
                            res.status(500).send({ message: err.message || "Product not found" });
                        });
                });
            } else {
                res.json({ message: 'Place order failed while adding order details', success: false });
            }
            res.send({ message: "Order successfully placed", success: true, orderId: order.id, product: product });

        }).catch(err => {
            res.status(500).send({ message: err.message });
        });
    } else {
        res.json({ message: 'Place order failed', success: false });
    }

}