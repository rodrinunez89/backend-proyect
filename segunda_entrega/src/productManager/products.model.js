import mongoose from 'mongoose';

const collection = 'products';

const schema = new mongoose.Schema({
    internalCode: Number,

    description: { type: String, required: true },
    price: Number,
    title: String,
    description: String,
    stock: Number
});

const productModel = mongoose.model(collection, schema);

export default productModel;