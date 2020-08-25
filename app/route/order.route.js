const dotenv = require("dotenv");
const controller = require("../controller/order.controller");

dotenv.config();

module.exports = (app) => {
    const router = require("express").Router();

    router.get("/", controller.findAll);
    router.get("/:orderId", controller.findByOrderId);
    router.post("/", controller.create);
    
    app.use(process.env.BASE_URL+"/order", router);
}