import { ProductsModel } from "../model/product.js";
import mongoose from 'mongoose'

export const getAllProducts = async () => {
    const products = await ProductsModel.find();
    return products;
}

export const getProductsDetails = async (parent, arg) => {
    const { id } = arg
    const product = await ProductsModel.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(id)
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "created_by",
                foreignField: "_id",
                as: "created_by",
            },
        },
        { $unwind: "$created_by" }
    ]);
    return product[0];
}