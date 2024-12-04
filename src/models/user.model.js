/*
id string pk
email string
password string
username string
fullName string
avatar string
cover string
refreshToken string
watchHistory ObjectId[] videos
createdAt Date
updatedAt Date
*/

import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String, // s3, cloudinary (later)
        required: true,
    },
    cover: {
        type: String, // s3, cloudinary (later)
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        },
    ],
    refreshToken: {
        type: String,
    },
},
    { timestamps: true }
)

export const User = mongoose.model("User", userSchema)