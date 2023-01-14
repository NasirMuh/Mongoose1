import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const commentSchema = new Schema({
    comment: String,
})
const Comments = models.Comments || model("Comments", commentSchema)
export default Comments;
