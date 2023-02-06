const e = require('express');
const express = require('express');
const restoModel = require('../model/Restaurant');
const app = express();

//Read All
//http://localhost:3000/restaurants

//Sort
//http://localhost:3000/restaurants?sortBy=ASC
//http://localhost:3000/restaurants?sortBy=DESC

app.get('/restaurants', async (req, res) => {
    let resto
    let order = req.query.sortBy
    if (order == null) {
        resto = await restoModel.find({});
    }
    else {
        resto = await restoModel.find({}).byRestoList(order)
    }


    try {
        res.status(200).send(resto);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Sort Cuisine
//http://localhost:3000/restaurants/cuisine/Japanese
//http://localhost:3000/restaurants/cuisine/Bakery
//http://localhost:3000/restaurants/cuisine/Italian

app.get('/restaurants/cuisine/:resCuisine', async (req, res) => {
    const resCuisine = req.params.resCuisine
    const resto = await restoModel.find({ cuisine: resCuisine });

    try {
        res.status(200).send(resto);
    } catch (err) {
        res.status(500).send(err);
    }
});

//Show multiple filters
//http://localhost:3000/restaurants/Delicatessen

app.get('/restaurants/Delicatessen', async (req, res) => {
    const resto = await restoModel.getDelicatessen('Delicatessen')

    try {
        res.status(200).send(resto);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = app