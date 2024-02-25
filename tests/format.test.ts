import winston from "winston";

describe("log with format", () => {
  test("loging format fields", () => {
    const logger = winston.createLogger({
      level: "info",
      //format: winston.format.json(),
      //format: winston.format.simple(),
      format: winston.format.logstash(),
      transports: [new winston.transports.Console({})],
    });

    logger.info("Hello Format");
  });

  test("loging with printf format", () => {
    const logger = winston.createLogger({
      level: "info",
      //format: winston.format.json(),
      //format: winston.format.simple(),
      // format: winston.format.logstash(),
      format: winston.format.printf((log) => {
        return `${new Date()}: ${log.level.toUpperCase()}: ${log.message}`;
      }),
      transports: [new winston.transports.Console({})],
    });

    logger.info("Hello Format");
  });

  test("loging with combine format", () => {
    const logger = winston.createLogger({
      level: "info",
      //format: winston.format.json(),
      //format: winston.format.simple(),
      // format: winston.format.logstash(),
      // format: winston.format.json(),
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        winston.format.json()
      ),
      transports: [new winston.transports.Console({})],
    });

    logger.info("Hello Format");
    logger.warn("Hello Format");
    logger.error("Hello Format");
  });
});
