import Comments from '../models/comments.js'

export const getComments = async (req, res) => {
    try {
        const comment = await Comments.find()
        res.status(200).json(comment)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const getComment = async (req, res) => {
    const _id = req.params.id
    try {
        const comment = await Comments.findById({_id})
        res.status(200).json(comment)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createComment = async (req, res) => {
    const comment = req.body;
    // res.setHeader("Content-Type", "application/json");
    const newComment = new Comments(comment);
    try {
        const data = await newComment.save();
        res.status(201).json(data)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}