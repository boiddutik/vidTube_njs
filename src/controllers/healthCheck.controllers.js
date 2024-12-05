import { ApiResponse } from "../utils/apiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"


const healthChecker = asyncHandler(async (req, res) => {
    console.log('Reached health check controller')
    return res.
        status(200).
        json(new ApiResponse(200, "data is OK", "Health Check Passed"))
})

// const healthChecker = async (req, res) => {
//     try {
//         res.status(200).json()
//     } catch {
//     }
// }

export { healthChecker }