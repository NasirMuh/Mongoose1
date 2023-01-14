import express from 'express'
const router = express.Router();
// these all function imported from Person controller
// these all function defined in from person Controller there already defined
import {
    CreateSinglePerson,
    CreateMultiplePerson,
    getDefault,
    searchById,
    searchByName,
    deleteSingleData
} from '../controllers/personFromController.js'

router.get('/', getDefault)
router.get('/searchById/:id', searchById)
router.get('/searchByName/:name', searchByName)
router.delete('/deleteSingleData/:id', deleteSingleData)
router.post('/CreateSinglePerson', CreateSinglePerson)
router.post('/CreateMultiplePerson', CreateMultiplePerson)

export default router;