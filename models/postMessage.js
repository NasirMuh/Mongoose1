import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const postSchema = new Schema({
    fullName: String,
})
const PostMessage = models.PostMessage || model("PostMessage", postSchema)
export default PostMessage;

// complete part in README