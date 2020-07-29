const dotenv = require("dotenv");
const controller = require("../controller/product.controller");

dotenv.config();

module.exports = (app) => {
    const router = require("express").Router();

    router.get("/", controller.findAll);
    router.get("/:productId", controller.findByProductId);
    router.get("/category/:categoryId", controller.findProductByCategoryId);
    
    app.use(process.env.BASE_URL+"/product", router);
}