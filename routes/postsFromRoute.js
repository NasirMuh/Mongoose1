import express from 'express'
const router = express.Router();
import {
    getPosts,
    createPost,
    getPost,
    updatePost,
    deletePost
} from '../controllers/postsFromController.js'

router.post('/', createPost)
router.get('/', getPosts)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)

export default router;