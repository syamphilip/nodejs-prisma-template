import {Request,Response} from 'express'

export const userTest=(req:Request,res:Response)=>{
   return res.json("Hello User")
}