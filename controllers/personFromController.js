import Persons from "../models/Person.js"; // .mjs extension is required now

// create Single data
export const CreateSinglePerson = async (req, res) => {
    try {
        const person = await Persons.create(req.body)
        res.status(201).json({ message: person })
    } catch (error) {
        es.status(409).json({ message: error.message })
    }
}

// create Multiple data 
export const CreateMultiplePerson = async (req, res) => {
    try {
        const person = await Persons.insertMany(req.body)
        res.status(201).json({ message: person })
    } catch (error) {
        es.status(409).json({ message: error.message })
    }
}

//get all data
export const getDefault = async (req, res) => {
    try {
        const person = await Persons.find({})
        res.status(200).json({ message: person })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}
// get single data using id
export const searchById = async (req, res) => {
    const _id = req.params.id;
    try {
        const person = await Persons.findById(_id)
        res.status(200).json({ message: person })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
// get single data using Name
export const searchByName = async (req, res) => {
    try {
        const person = await Persons.find({ fName: req.params.name })
        res.status(200).json({ message: person })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// search value first name last name any data field defined in schema
export const deleteSingleData = async (req, res) => {
    const _id = req.params.id;
    try {
        const person = await Persons.deleteOne({ _id })
        res.status(200).json({ message: person }) 
    } catch (error) {
        res.status(404).json({ message: error.message })
        
    }
}
