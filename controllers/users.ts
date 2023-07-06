import {v4 as uuidv4} from 'uuid';
//let users = []
import rawData from '../users.json';
import {User} from '../types'
import fs from 'fs';
import path from 'path';
import express from 'express';
import userModel from '../models/userModel';


let users: User[] = rawData as User[];

const writeUsersToJson: () => void = () => {
    fs.writeFileSync(path.join(__dirname, '../users.json'), JSON.stringify(users))
}

export const getUsers = async (req : express.Request,res: express.Response) => {

    try {
        const users = await userModel.findAll();
        res.send(users);
    } catch (error){
        console.log(error)
    }
    
}


export const createUser = async (req : express.Request,res: express.Response) => {

    const message = await userModel.create(req.body);
    res.send(message);
    // const user = req.body;
    // users.push({...user, id: uuidv4()});
    // writeUsersToJson();
    //  res.status(201).json(`User with the name: ${user.firstName} added to the database.`)
    // when working with post request we getting access to request.body
}

export const getUser = async (
    req: express.Request,
    res: express.Response
) => {
    const user = await userModel.findById(req.params.id);
    res.send(user)
    // const {id} = req.params;
    // const foundUser = users.find(user => user.id === id);
    // //console.log('foundUser',foundUser)
    // res.send(foundUser);
}

export const deleteUser = async (
    req: express.Request,
    res: express.Response
) => {

    const message = await userModel.removeById(req.params.id);
    res.send(message)
    // const { id } = req.params;
    // users = users.filter(user => user.id !== id);
    // //console.log('users delete',users)
    // // 204 no content
    // res.status(204).json(`User: ${id} is deleted from database `)
 }

 export const updateUser = async (
    req: express.Request,
    res: express.Response
    ) => {

    const message = await userModel.updateById(req.params.id, req.body);
    res.send(message)
//     const { id } = req.params;
    
//     const {firstName, lastName, age} = req.body;
//    // console.log('firstName, lastName, age', firstName, lastName, age)
//    const user = users.find(user => user.id === id);
//    if (user) {
//     user.firstName = firstName || user.firstName;
//     user.lastName = lastName || user.lastName;
//     user.age = age || user.age
//     writeUsersToJson();

//     res.send(`User with id ${id} has been updated.`)
//    } else {
//       res.status(404).send('User not found');
//    }
 
 
 }