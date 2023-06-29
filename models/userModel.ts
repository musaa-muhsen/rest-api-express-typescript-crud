import {User} from '../types';
import rawData from '../users.json';

let users: User[] = rawData as User[];

const findAll = (): Promise<User[]> => {
    return new Promise((resolve, reject) => {
        resolve(users);
    });
}

const create = (user: User): Promise<string> => {
    return new Promise((resolve, reject) => {
        users.push(user);
        resolve(`User with the id of ${user.id} has been added to the database 🤖.`)
    })
}

const findById = (id: string): Promise<User | undefined> => {
    return new Promise((resolve, reject) => {
        const user = users.find(user => user.id === id);
        resolve(user)
    })
}


export default {
    findAll,
    create,
    findById
}