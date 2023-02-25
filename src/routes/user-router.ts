import express from 'express'
import {userTest} from '../controllers/user-controller'

const router=express.Router();

router.get("/",userTest)

module.exports=router;