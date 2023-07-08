import {User} from '../types';
import rawData from '../users.json';
import {v4 as uuidv4} from 'uuid'; 
let users: User[] = rawData as User[];


import fs from 'fs';
import path from 'path';

const writeUsersToJson: () => void = () => {
    fs.writeFileSync(path.join(__dirname, '../users.json'), JSON.stringify(users))
}


const findAll = (): Promise<User[]> => {
    return new Promise((resolve, reject) => {
        resolve(users);
    });
}

const create = (user: Partial<User>): Promise<string> => {
    console.log('user create model',user)
    return new Promise((resolve, reject) => {
        const newUser = {
            id: uuidv4(),
            ...user
        }
        users.push(newUser as User);
        writeUsersToJson()
       
        resolve(`User with the id of ${user.firstName} ${user.lastName}has been added to the database 🤖.`)
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
        writeUsersToJson()
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

            // console.log('users[userIndex]', users[userIndex])
            // console.log('updatedUser', updatedUser)

            users[userIndex] = {...users[userIndex], ...updatedUser}
            writeUsersToJson()
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