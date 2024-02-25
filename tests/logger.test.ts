import winston from "winston";

describe("create new logger", () => {
  test("test 1", () => {
    const logger = winston.createLogger({});
    logger.log({
      level: "info",
      message: "Hello logging",
    });
  });
});
