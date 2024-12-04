/*
id string pk
owner ObjectId users
videoFile string
thumbnail string
title string
description string
duration number
views number
isPublished boolean
createdAt Date
updatedAt Date
*/

import mongoose, { Schema } from "mongoose"

const videoSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    videoFile: {
        type: String, // s3, cloudinary (later)
        required: true,
    },
    thumbnail: {
        type: String, // s3, cloudinary (later)
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    views: {
        type: Number,
        default: 0,
    },
    duration: {
        type: Number,
    },
    isPublished: {
        type: Boolean,
        default: true,
    },
},
    { timestamps: true }
)

export const Video = mongoose.model("Video", userSchema)