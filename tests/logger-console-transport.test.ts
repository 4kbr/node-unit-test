import winston, { loggers, transports } from "winston";

describe("create new logger with console transport", () => {
  test("test 1", () => {
    const logger = winston.createLogger({
      transports: [new transports.Console()],
    });
    logger.log({
      level: "info",
      message: "Hello logging",
    });
  });
  test("console with level", () => {
    const logger = winston.createLogger({
      level: "debug", //kalau gk diatur yang di print cuma sampai info biasanya
      transports: [new transports.Console()],
    });

    logger.log({
      level: "error",
      message: "Hello logging",
    });
    logger.log({
      level: "warn",
      message: "Hello logging",
    });
    logger.log({
      level: "info",
      message: "Hello logging",
    });
    logger.log({
      level: "http",
      message: "Hello logging",
    });
    logger.log({
      level: "verbose",
      message: "Hello logging",
    });
    logger.log({
      level: "debug",
      message: "Hello logging",
    });
    logger.log({
      level: "silly",
      message: "Hello logging",
    });
    // error kalau levenlnya ngasal
    // logger.log({
    //   level: "wadu",
    //   message: "Hello logging",
    // });
  });

  test("console with logger shortcut function", () => {
    const logger = winston.createLogger({
      level: "debug", //kalau gk diatur yang di print cuma sampai info biasanya
      transports: [new transports.Console()],
    });

    logger.error("Hello Error");
    logger.warn("Hello Warn");
    logger.info("Hello Info");
    logger.http("Hello Http");
    logger.verbose("Hello Verbose");
    logger.debug("Hello Debug");
    logger.silly("Hello Silly");
  });
});
