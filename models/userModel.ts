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
        console.log('user id',user.id)
        resolve(`User with the id of ${user.id} has been added to the database 🤖.`)
    })
}

const findById = (id: string): Promise<User | undefined> => {
    return new Promise((resolve, reject) => {
        const user = users.find(user => user.id === id);
        resolve(user)
    })
}

const removeById = (id: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        users = users.filter(user => user.id !== id);
        resolve(`User: ${id} is deleted from database.`)
    })
}

const updateById = (
      id: string, 
      updatedUser: Partial<User>
    ): Promise<string> => {
        return new Promise((resolve,reject) => {
            const userIndex = users.findIndex(user => user.id === id);
            if (userIndex === -1){
                reject('User not found');
                return;
            }

            console.log('users[userIndex]', users[userIndex])
            console.log('updatedUser', updatedUser)

            users[userIndex] = {...users[userIndex], ...updatedUser}

            resolve(`User with id ${id} has been updated.`)

        })
}


export default {
    findAll,
    create,
    findById,
    removeById,
    updateById
}