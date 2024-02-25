import winston, { transports } from "winston";

const logger = winston.createLogger({
  level: "info",
  transports: [
    new transports.File({
      filename: "exception.log",
      dirname: `logs/`,
      handleExceptions: true,
    }),
  ],
});
let yanto;

(yanto as any)();
