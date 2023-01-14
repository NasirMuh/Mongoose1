import express from 'express'

import { getComments, getComment, createComment } from '../controllers/commentFromController.js'
const router = express.Router();

router.get('/', getComments)
router.get('/:id', getComment)
router.post('/', createComment)



export default router;