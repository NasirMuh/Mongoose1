import express from 'express'
const router = express.Router();
import {
    getPosts,
    createPost,
    getPost
} from '../controllers/postsFromController.js'

router.get('/', getPosts)
router.get('/:id', getPost)
router.post('/', createPost)

export default router;