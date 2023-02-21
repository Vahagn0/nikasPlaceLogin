import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.DB_URL)

const userSchema = new mongoose.Schema({
    username : String,
    password: String,
    token: String
  }) 

const User = mongoose.model("users",userSchema)

const app = express()
app.use(cors())

app.get("/:username/:password", async (req,res)=>{
    const {username,password} = req.params
    const user = await User.findOne({username : username})
    const token = jwt.sign({username, password}, process.env.SECRET )
    if(user && user.password === password){
        res.send({status: true, token: token})
      }else{
        res.send(false)
    }
  })

app.listen(process.env.PORT)