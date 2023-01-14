mongoose.set('strictQuery', false); // it is useful to remove warning from console
import dotenv from "dotenv"; // it is use to import for .env files
import mongoose from "mongoose"
import express from 'express' // these import libraires should be install
dotenv.config();
const app = express();
const port = process.env.PORT || 33200;
// this way connect to database and it will be run default port
mongoose.connect(process.env.DATABASE_URL)
    .then(() => app.listen(port, () => { console.log(`Connected to Database & Server is running on ${port} port`); }))
    .catch((error) => console.error(error.message))
app.use(express.json()); // it is use for body perser means when we send data from 
// frontend or thunderclient api body it convert data to string
// all controller in defined in controller folder 
import postRouter from './routes/postsFromRoute.js'
import personRouter from './routes/personFromRoute.js'
// all routes defined in routes folder
app.use('/posts', postRouter)
app.use('/', personRouter)
