import winston, { transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

describe("logger with console & file transport level", () => {
  test("create & update application.log", () => {
    const logger = winston.createLogger({
      level: "info",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
      transports: [
        new DailyRotateFile({
          filename: `app-%DATE%.log`,
          dirname: `logs/`,
          zippedArchive: true,
          datePattern: "YYYY-w",
          maxSize: "1m",
        }),
        new DailyRotateFile({
          level: "error", //menentukan levelnya
          filename: "app-error-%DATE%.log",
          dirname: `logs/`,
          zippedArchive: true,
          datePattern: "YYYY-w",
          maxSize: "1m",
        }),
      ],
    });

    for (let i = 0; i < 100000; i++) {
      logger.info("Hello word1");
      logger.info("Hello word2");
      logger.info("Hello word3");
      logger.error("Hello word3");
    }
  });
});
