import mongoose from 'mongoose'

const Schema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        }
    },
    { timestamps: true }
)

export const Users = mongoose.model('users', Schema)