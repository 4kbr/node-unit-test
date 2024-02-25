import winston, { transports } from "winston";

describe("logger with console & file transport level", () => {
  test("create & update application.log", () => {
    const logger = winston.createLogger({
      level: "info",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        winston.format.json()
      ),
      transports: [
        new transports.File({
          filename: "application.log",
          dirname: `logs/`,
        }),
        new transports.File({
          level: "error", //menentukan levelnya
          filename: "application-error.log",
          dirname: `logs/`,
        }),
      ],
    });

    logger.info("Hello word1");
    logger.info("Hello word2");
    logger.info("Hello word3");
    logger.error("Hello word3");
  });
});
