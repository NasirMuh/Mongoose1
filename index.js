mongoose.set('strictQuery', false); // it is useful to remove warning from console
import dotenv from "dotenv"; // it is use to import for .env files
dotenv.config();

import express from 'express'
const app = express();
const port = process.env.PORT || 33200;

import mongoose from "mongoose"
import Persons from "./Person.js"; // .mjs extension is required now

import postRouter from './routes/postsFromRoute.js'
import commentRouter from './routes/commentFromRoute.js'


// This part is database  And port Run Seprate Way
// mongoose.connect(process.env.DATABASE_URL, () => {
//     console.log("Connected to MongoDB ");
// }, e => console.error(e.message))
// app.listen(port, () => {
//     console.log(`Server is running on ${port} port`);
// })

// this way connect to database and it will be run default port
mongoose.connect(process.env.DATABASE_URL)
.then(()=> app.listen(port, () => {
    console.log(`Connected to Database & Server is running on ${port} port`);
}))
.catch((error)=> console.error(error.message))

app.use(express.json()); // it is use for body perser means when we send data from 
// frontend or thunderclient api body it convert data to string

app.use('/posts',postRouter)
app.use('/comments',commentRouter)


// create Single data
app.post('/CreateSinglePerson', async (req, res) => {
    // step 1: it is useable to single value
    // const name = req.body.Name; // it is useable for single value like NAME
    // const person = await Persons.create({ Name: name})
    // res.status(200).json({ message: person })

    // step 2: it send object to data base
    // const fullName = {
    //     fName: req.body.fName,
    //     lName: req.body.lName,
    // }
    // const person = await Persons.create(fullName)

    // step 3: direct put req.body in create database

    const person = await Persons.create(req.body)
    res.status(200).json({ message: person })
})

// create Multiple data 
app.post('/CreateMultiplePerson', async (req, res) => {
    const person = await Persons.insertMany(req.body)
    res.status(200).json({ message: person })
})

//get all data
app.get('/', async (req, res) => {
    const person = await Persons.find({})
    res.status(200).json({ message: person })
})

// get single data using id
app.get('/person/:id', async (req, res) => {
    const _id = req.params.id;
    const person = await Persons.findById(_id)
    res.status(200).json({ message: person })
})
// get single data using Name
app.get('/personByName/:name', async (req, res) => {
    const person = await Persons.find({ fName: req.params.name })
    res.status(200).json({ message: person })
})
 
// search value first name last name any data field defined in schema
app.get('/personBySearch/:nameSearch', async (req, res) => {
    const person = await Persons.find({lName:req.params.nameSearch})
    res.status(200).json({ message: person })
})


// const person3 = await Persons.deleteMany({})
// console.log(person3)




