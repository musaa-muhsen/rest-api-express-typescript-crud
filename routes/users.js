import express from 'express';
import {createUser, getUsers, getUser, deleteUser, updateUser} from '../controllers/users.js';

const router = express.Router();


// each CB in express has the req/res
// is slash/ because of middle use starts at users/
// all routes in here are starting with /users
router.get('/', getUsers)

router.post('/', createUser)

// //users/2 => req.params {id: 2}
router.get('/:id', getUser);

router.delete('/:id', deleteUser)

// like PUT https://www.geeksforgeeks.org/difference-between-put-and-patch-request/
router.patch('/:id', updateUser)

export default router