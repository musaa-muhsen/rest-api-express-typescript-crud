import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from '../routes/users';

const app = express();

const PORT: number = 5007;

// initilize body parser middleware 
// this is going to tell the script that we're going to use json data in our whole application
// JSON = javascript object notation - each key/value needs to be wrapped in quatation marks
//app.use(bodyParser.json()); // you don't have to call next() here bc it's already been called within bodyParser
app.use(express.json());

// app.use(function (req, res, next) {
//   // console.log(typeof req)
//     console.log('Time:', Date.now());
//     next();
//   });
// we set all the starting paths for all the routes in the users file
// all paths are starting with /users
app.use('/users', usersRoutes)

// app.get('/', (req: express.Request ,res: express.Response) => {
//     console.log('[TEST]!')
//     res.send('Hello from homepage')
// })
// 


app.listen(PORT, () =>
console.log(`Server running on port: http://localhost:${PORT}`) )

