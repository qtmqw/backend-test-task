const express = require("express");
const router = express.Router();
const db = require('../config/db')

// get all products
router.get("/", (req, res) => {
    const q = "SELECT * FROM `sql7588516`.`products`"
    db.query(q, (err, data) => {
        res.json(data)
    })
})

// add product
router.post("/add", (req, res) => {
    const q = "INSERT INTO `sql7588516`.`products` (`Sku`, `Name`, `Price`, `Size`, `Weight`, `Width`, `Lenght`, `Height`, `ProductType`) VALUES (?)"
    const values = [
        req.body.Sku,
        req.body.Name,
        req.body.Price,
        req.body.Size,
        req.body.Weight,
        req.body.Width,
        req.body.Lenght,
        req.body.Height,
        req.body.ProductType
    ]

    db.query(q, [values], (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

// delete one or many products
router.delete("/delete/:id", (req, res) => {
    db.query(`DELETE FROM products WHERE id IN(${req.params.id}) `, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

module.exports = router;