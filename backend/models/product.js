const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    quantity: {
        type: Number,
    },
    price: {
        type: Number,
        required: true,
        maxlength: 32
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
   
    sold: {
        type: Number,
        default: 0
    },
    shipping: {
        // type: String,
        // trim: true,
        // required: true,
        // maxlength: 32
        // required: false,
        type: Boolean
    }
}, { timestamps: true })

module.exports = mongoose.model("Product", productSchema);