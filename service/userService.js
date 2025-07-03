import { UsersModel } from "../model/user.js";
import mongoose from 'mongoose'
import { ProductsModel } from "../model/product.js";

export const getAllUsers = async () => {
    const users = await UsersModel.find();
    return users;
}

export const getUsersDetails = async (id) => {
    const users = await UsersModel.findById(id);
    return users;
}

export const addUser = async (parent, args) => {
    console.log(args)
    return "add this use to db"
}