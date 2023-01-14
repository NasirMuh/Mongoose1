import PostMessage from '../models/postMessage.js'
 
export const getPosts = async (req, res) => {
    try {
        const post = await PostMessage.find()
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const getPost = async (req, res) => {
    const _id = req.params.id;
    try {
        const post = await PostMessage.find({_id})
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newMessage = new PostMessage(post);
    try {
        const data = await newMessage.save();
        res.status(201).json(data)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}