const express = require('express');
const Warehouse = require('../models/Warehouse.js');
const Product = require('../models/Product.js');

const router = express.Router();

router.get('/', async (req, res) =>{
    try{
        const warehouses = await Warehouse.find().populate('products');
        res.json(warehouses);
    }catch(error){
        res.status(500).json({error: 'Server error while fetching warehouses'});
    }
    
});


module.exports = router;
