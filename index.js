import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();

const PORT = 5007;

// initilize body parser middleware 
// this is going to tell the script that we're going to use json data in our whole application
// JSON = javascript object notation - each key/value needs to be wrapped in quatation marks
app.use(bodyParser.json());

// we set all the starting paths for all the routes in the users file
// all paths are starting with /users
app.use('/users', usersRoutes)

app.get('/', (req,res) => {
    console.log('[TEST]!')
    res.send('Hello from homepage')
})
// 
app.listen(PORT, () =>
console.log(`Server running on port: http://localhost:${PORT} `) )
