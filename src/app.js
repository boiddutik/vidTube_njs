import express from "express";
import cors from "cors";

const app = express();
// --
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true, }))
app.use(express.json({ limit: "16Kb" }))
app.use(express.urlencoded({ extended: true, limit: "16Kb" }))
app.use(express.static("public"))
// --
import healthCheckRouter from "./routes/healthcheck.routes.js"
// --
app.use("/api/v1/healthcheck", healthCheckRouter)


export { app };