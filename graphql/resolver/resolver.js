import { getAllUsers, getUsersDetails } from '../../service/userService.js';
import { getAllProducts, getProductsDetails } from '../../service/productService.js';

export const GraphQLResolver = {
    Query: {
        users: getAllUsers,
        products: getAllProducts,
        product: getProductsDetails
    },
    Product: {
        created_by: async (parent) => {
            return await getUsersDetails(parent.created_by)
        }
    }
}