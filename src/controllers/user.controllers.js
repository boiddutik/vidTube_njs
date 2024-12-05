import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiResponse } from "../utils/apiResponse.js"
import { ApiError } from "../utils/apiError.js"
import { User } from "../models/user.model.js"


const registerUser = asyncHandler(async (req, res) => {
    const { userName, fullName, email, password } = req.body;
    if (
        [userName, fullName, email, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }
    const existingUser = await User.findOne({
        $or: [{ userName }, { email }]
    })
    if (existingUser) {
        throw new ApiError(409, "User already exists")
    }
    const avatar = req.files?.avatar?.[0]?.path;
    const cover = req.files?.cover?.[0]?.path;
    if (!avatar) {
        throw new ApiError(400, "Avatar is missing")
    }
    const createdUser = await User.create(
        {
            userName: userName,
            fullName,
            avatar: avatar,
            cover: cover || "",
            email,
            password,
        },
    )
    const user = await User.findById(createdUser._id).select("-password -refreshToken")
    if (!user) {
        throw new ApiError(500, "Something went wrong while registering user")
    }
    return res.status(201).json(new ApiResponse(201, user, "User registration complete."))
})

export {
    registerUser
}