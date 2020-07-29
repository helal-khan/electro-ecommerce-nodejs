const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./app/model');
const data = require("./app/model/data");

const app = express();

app.use(cors({ origin: "http://localhost:8080"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

//db.sequelize.sync();
db.sequelize.sync({force: true}).then(() => {
    console.log("Generating Data...");
    data.role.forEach(role =>  db.role.create(role));
    data.user.forEach(user =>  db.user.create(user));
    data.address.forEach(address =>  db.address.create(address));
    data.category.forEach(category => db.category.create(category));
    data.product.forEach(product => db.product.create(product));
    //data.order.forEach(order => db.order.create(order));
    //data.orderDetails.forEach(orderDetails => db.orderDetails.create(orderDetails));
});

require("./app/route/product.route.js")(app);

app.get("/", (req, res) => {
	res.json({ message : "Welcome to ELECTRO ecommerce API"});
});
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Page not found!"
    })
});

const PORT = process.env.PORT || 8085;
app.listen(PORT, () =>{
    console.log(`App is running on port: ${PORT}`);
});