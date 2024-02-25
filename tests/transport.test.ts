import winston, { LogEntry } from "winston";
import TransportStream from "winston-transport";

describe("create new transport", () => {
  test("create new logger with new transpor", () => {
    class MyTransport extends TransportStream {
      constructor(option: TransportStream.TransportStreamOptions) {
        super(option);
      }
      log(info: LogEntry, next: any) {
        console.log(
          `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`
        );
        next();
      }
    }
    const logger = winston.createLogger({
      transports: [
        new MyTransport({
          level: "silly",
        }),
      ],
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
