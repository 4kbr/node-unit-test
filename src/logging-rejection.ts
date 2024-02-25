import winston, { transports } from "winston";
const callAsync = async () => {
  return Promise.reject("Ups");
};

const logger = winston.createLogger({
  level: "info",
  transports: [
    new transports.File({
      filename: "exception.log",
      dirname: `logs/`,
      handleExceptions: true,
      handleRejections: true,
    }),
  ],
});

callAsync();
