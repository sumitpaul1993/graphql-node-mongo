import { getAllUsers, addUser } from '../../service/userService.js';

export default {
    Mutation: {
        addUser: addUser
    },
    Query: {
        users: getAllUsers,
    },
}