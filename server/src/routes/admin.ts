import express from 'express';
const router = express.Router();

import {createAdminSchema, loginAdminSchema, openAccountSchema} from '../validation/validation'
import {loginAdmin, createAdmin} from '../controllers/admin';
import {openAccount, closeAccount} from '../controllers/Account'
import Decode from '../middleWares/decode'

/* admin login. */
router.post('/login', async(req, res) => {
    const {error} = loginAdminSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
    })
    if(error){
        res.status(400).json({
            message: 'Error'
        })
    }

    const{username, password} = req.body;
    try{
        const login = await loginAdmin(username, password);
        return res.status(200).json({data: login})
    } catch (err){
        return res.status(500).json({message: err.message})
    }
});

router.post('/signup', async(req, res) => {
    const {error} = createAdminSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
    })
    if(error){
        res.status(400).json({
            message: 'Error'
        })
    }

    const{username, password, firstname, lastname, email} = req.body;
    try{
        const signup = await createAdmin(username, password, firstname, lastname, email);
        return res.status(200).json({data: signup})
    } catch (err){
        return res.status(500).json({message: err.message})
    }
})



router.post('/createaccount', async(req, res) => {
    const {error} = openAccountSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
    })
    if(error){
        res.status(400).json({
            message: 'Error'
        })
    }

    const{accountOpeningDetails} = req.body;
    try{
        const signup = await openAccount(accountOpeningDetails);
        return res.status(200).json({data: signup})
    } catch (err){
        return res.status(500).json({message: err.message})
    }
})

router.use(Decode)

router.patch('/closeaccount', async(req, res) => {
  
    const{accoundID} = req.body;
    try{
        const signup = await closeAccount(accoundID);
        return res.status(200).json({data: signup})
    } catch (err){
        return res.status(500).json({message: err.message})
    }
})

export default router;
