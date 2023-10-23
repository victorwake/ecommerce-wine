const mongoose = require('mongoose');
import {Schema, model} from 'mongoose'

const wineSchema = new mongoose.Schema({
    name: String,
    varietal: String,
    color_type: String,
    winery: String,
    price: Number,
    image: String,
    stock: Number,
    year: Number,
    province: String,
    region: String,
    alcohol: Number,
    volume: Number,
    url: String,
    description:String,
}, {
    timestamps: true,
    versionKey: false,
})

export default model('Wine', wineSchema);

   