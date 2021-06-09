import mongoose, { models } from 'mongoose';
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxLength: 32,
        required: true
    }
    ,
    photo: {
        data: Buffer,
        contentType: String
    },

}, { timeStamps: true });
module.exports = mongoose.model("Category", categorySchema)