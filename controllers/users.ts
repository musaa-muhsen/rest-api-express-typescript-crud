import {v4 as uuidv4} from 'uuid';
//let users = []
import rawData from '../users.json';
import {User} from '../types'
import fs from 'fs';
import path from 'path';
import express from 'express';



let users: User[] = rawData as User[];

const writeUsersToJson: () => void = () => {
    fs.writeFileSync(path.join(__dirname, '../users.json'), JSON.stringify(users))
}

export const getUsers = (req : express.Request,res: express.Response) => {
    res.send(users);
}


export const createUser = (req : express.Request,res: express.Response) => {
    const user = req.body;
    users.push({...user, id: uuidv4()});
    writeUsersToJson();
     res.status(201).json(`User with the name: ${user.firstName} added to the database.`)
    // when working with post request we getting access to request.body
}

export const getUser = (
    req: express.Request,
    res: express.Response
) => {
    const {id} = req.params;
    const foundUser = users.find(user => user.id === id);
    //console.log('foundUser',foundUser)
    res.send(foundUser);
}

export const deleteUser = (
    req: express.Request,
    res: express.Response
) => {
    const { id } = req.params;
    users = users.filter(user => user.id !== id);
    //console.log('users delete',users)
    // 204 no content
    res.status(204).json(`User: ${id} is deleted from database `)
 }

 export const updateUser = (req: express.Request,res: express.Response) => {
    const { id } = req.params;
    
    const {firstName, lastName, age} = req.body;
   // console.log('firstName, lastName, age', firstName, lastName, age)
   const user = users.find(user => user.id === id);
   if (user) {
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.age = age || user.age
    writeUsersToJson();

    res.send(`User with id ${id} has been updated.`)
   } else {
      res.status(404).send('User not found');
   }
 
 
 }