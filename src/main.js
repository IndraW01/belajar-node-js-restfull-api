import { web } from "./application/web.js";
import { logger } from "./application/logging.js";
import process from "process";

const HOST = process.env.APP_HOST || "localhost";
const PORT = process.env.APP_PORT || 3000;

web.listen(PORT, HOST, () => {
  logger.info(`App start at http://${HOST}:${PORT}`);
});
