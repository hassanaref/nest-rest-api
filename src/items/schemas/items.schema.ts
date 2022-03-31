import * as mongoose from 'mongoose'

export const itemSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    discription: String
});