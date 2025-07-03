import mongoose from 'mongoose'

export const connectDB = (uri) => {
    mongoose.connect(uri, {dbName: 'graphql'}).then((d) => {
        console.log(`Db Connected with ${d.connection.name}`)
    }).catch((e) => {
        console.log(e)
    })
}