// Import stylesheets
import './style.css';

import Logger from './logger/logger';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;


const log = new Logger().log;

log(`Welcome to New Logger`)

