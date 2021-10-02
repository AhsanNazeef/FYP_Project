import mongoose from 'mongoose'
import { IBlog } from '../config/interface'

const blogSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: 'user' },
  title: {
    type: String,
    require: true,
    trim: true,

    maxLength: 50
  },
  content: {
    type: String,
    require: true,
    minLength: 10
  },
  description: {
    type: String,
    require: true,
    trim: true,

    maxLength: 200
  },
  thumbnail: {
    type: String,
    require: true
  },
  category: { type: mongoose.Types.ObjectId, ref: 'category' }
}, {
  timestamps: true
})


export default mongoose.model<IBlog>('blog', blogSchema)