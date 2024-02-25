import winston, { transports } from "winston";

describe("exception handle", () => {
  test("exception", () => {
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
  });
});
