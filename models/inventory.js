/*
    inventory.js
    Student's name: Yuk Hong Ma
    Student ID: 301210312
    Date: June 17, 2022
*/

let mongoose = require('mongoose');

// Create a model class
let inventoryModel = mongoose.Schema(
    {
        name: String,
        number: Number,
        email: String,
    },
    {
        collection: "inventory"
    }
);

module.exports = mongoose.model('Inventory', inventoryModel);