import { createLogger, format, transports } from "winston";
const { combine, timestamp, json, colorize } = format;

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
    format.colorize(),
    format.printf(({ level, message, timestamp }) => {
        return `${level}: ${message}`;
    })
);

// Create a Winston logger
const logger = createLogger({
    level: "info",
    format: combine(colorize(), timestamp(), json()),
    transports: [
        new transports.Console({
            format: consoleLogFormat,
        }),
        new transports.File({ filename: "app.log" }),
    ],
});

// ***(index.js)***
// import logger from './logger.js';
// import morgan from 'morgan';
// const morganFormat = ':method, :url, :status, :response-time ms'
// app.use(
//     morgan(morganFormat, {
//       stream: {
//         write: (message) => {
//           const logObject = {
//             method: message.split(" ")[0],
//             url: message.split(" ")[1],
//             status: message.split(" ")[2],
//             responseTime: message.split(" ")[3],
//           };
//           logger.info(JSON.stringify(logObject));
//         },
//       },
//     })
//   );
// logger.info("This is an info message");
// logger.error("This is an error message");
// logger.warn("This is a warning message");
// logger.debug("This is a debug message");


export default logger;