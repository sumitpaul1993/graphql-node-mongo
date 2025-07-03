export const graphqlMiddleware = async (req) => {
    let token = req.headers.authorization
    if(!token) {
        throw new Error('token not found')
    }

    if(token != 12345) {
        throw new Error('wrong token')
    }
} 