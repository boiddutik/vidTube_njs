import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"

const app = express();
// --
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true, }))
app.use(express.json({ limit: "16Kb" }))
app.use(express.urlencoded({ extended: true, limit: "16Kb" }))
app.use("/api/v1/public", express.static("public"));
app.use(cookieParser())
// --
import healthCheckRouter from "./routes/healthcheck.routes.js"
import userRouter from "./routes/user.routes.js"
// --
app.use("/api/v1/healthcheck", healthCheckRouter)
app.use("/api/v1/user", userRouter)


export { app };


//
// git rm -r --cached node_modules
// git commit -m "Removed node_modules from Git tracking"
// git push
//
// git rm -r --cached public/temp/*
// git commit -m "Removed public/temp from Git tracking"
// git push