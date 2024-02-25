import winston, { transports } from "winston";

describe("create new logger with console & file transport", () => {
  test("create & update application.log", () => {
    const logger = winston.createLogger({
      level: "info",
      transports: [
        new transports.File({
          filename: "application.log",
          dirname: `logs/`,
        }),
      ],
    });

    logger.info("Hello word1");
    logger.info("Hello word2");
    logger.info("Hello word3");
  });
});
