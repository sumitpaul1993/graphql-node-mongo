import mongoose from 'mongoose'

const Schema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        created_by: {
            type: mongoose.Types.ObjectId,
            require: true,
        }
    },
    { timestamps: true }
)

export const ProductsModel = mongoose.model('products', Schema)