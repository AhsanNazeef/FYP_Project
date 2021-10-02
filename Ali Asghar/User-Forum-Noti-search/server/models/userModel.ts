import mongoose from 'mongoose'
import { IUser } from '../config/interface'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add your name"],
    trim: true,
    maxLength: [20, "Your name is up to 20 chars long."]
  },
  email: {
    type: String,
    required: [true, "Please add your email"],
    trim: true,
    unique: true
  },
  username: {
    type: String,
    required: [true, "Please add your Username"],
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please add your password"]
  },
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
  },
  role: {
    type: String,
    default: 'user' // admin 
  },
  type: {
    type: String,
    default: 'register' // login
  },
  notification: {
    type: Array
  },
  rf_token: { type: String, select: false }
}, {
  timestamps: true
})

export default mongoose.model<IUser>('user', userSchema)