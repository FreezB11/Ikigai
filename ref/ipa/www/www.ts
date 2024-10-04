import httpServer from "../ipa"
import logging from'../config/logging';
import config from '../config/config';
import * as color from 'colors'

color.enable()

const NAMESPACE = 'Server';

httpServer.listen(config.server.port, () => logging.info(NAMESPACE.blue, `Server is running ${config.server.hostname}:${config.server.port}`));

