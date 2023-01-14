import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const personsSchema = new Schema({
    fName: String,
    lName: String,
})
const Persons = models.Persons || model("Persons", personsSchema)
export default Persons;

// complete part in README