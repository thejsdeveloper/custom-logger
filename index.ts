// Import stylesheets
import "./style.css";

import { Logger } from "./logger/logger";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const logger = new Logger();
const log = logger.log.bind(logger);

log(`Welcome to New Logger`);
