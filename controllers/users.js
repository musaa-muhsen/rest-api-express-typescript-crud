import {v4 as uuidv4} from 'uuid';
let users = [
]
export const getUsers = (req,res) => {
    res.send(users);
}

export const createUser = (req,res) => {
    const user = req.body;
    const userId = uuidv4();

    const userWithId = {...user, id: userId}
    //console.log(userWithId)
    users.push(userWithId)
    res.send(`User with the name: ${user.firstName} add to the database.`)
    // when working with post request we getting access to request.body
}

export const getUser = (req,res) => {
    const {id} = req.params;
    const foundUser = users.find(user => user.id === id);
    //console.log('foundUser',foundUser)
    res.send(foundUser);
}

export const deleteUser = (req,res) => {
    const { id } = req.params;
    users = users.filter(user => user.id !== id);
    //console.log('users delete',users)
    res.send(`User: ${id} is deleted from database `)
 
 }

 export const updateUser = (req,res) => {
    const { id } = req.params;
    
    const {firstName, lastName, age} = req.body;
    console.log('firstName, lastName, age', firstName, lastName, age)
    users = users.find(user => user.id === id);
 
    users.firstName = firstName || users.firstName;
    users.lastName = lastName || users.lastName;
    users.age = age || users.age
 
 //if (firstName) userToBeUpdated.firstName = firstName;
 //    userToBeUpdated.lastName = lastName || userToBeUpdated.lastName;
 //    userToBeUpdated.age = age
 
 
 
    res.send(`User with id ${id} has been updated.`)
 }