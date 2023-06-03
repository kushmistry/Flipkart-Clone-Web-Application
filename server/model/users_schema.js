import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true,
        trim: true,
        min: 5,
        max: 5
    },
    lastname: {
        type: String,
        require: true,
        trim: true,
        min: 5,
        max: 5
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    username: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        require: true,
        type: String
    },
    phone: {
        type: Number,
        require: true
    }
})

const User = mongoose.model('user', userSchema);

export default User;