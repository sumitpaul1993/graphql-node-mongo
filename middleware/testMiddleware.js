export const graphqlMiddleware = async (req, res, next) => {
    let token = req.headers.authorization
    if(!token) {
        return res.status(200).json({ "status": true, "result": 'Token Missing!' })
    }

    if(token != 12345) {
        return res.status(200).json({ "status": true, "result": 'Wrong Token!' })
    }
    req.data = "Authenticated"
    next()
} 