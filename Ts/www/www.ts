import httpServer from "../src/app"
import logging from'../src/config/logging';
import config from '../src/config/config';
import * as color from 'colors'

color.enable()

const NAMESPACE = 'Server';

httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));

