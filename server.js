import morgan from 'morgan';
import express from 'express';

import bodyParser from 'body-parser';
import cors from 'cors';
import logger from './core/logger/app-logger';

import config from './core/config/config.dev';
import midis from './routes/midis.route';
import spotifyRoutes from './routes/spotify.route';
import controllerRoutes from './routes/prediction.route';
import connectToDb from './db/connect';

const port = config.serverPort;
logger.stream = {
  write(message) {
    logger.info(message);
  },
};

connectToDb();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev', { stream: logger.stream }));

app.use(midis);
app.use(spotifyRoutes);
app.use(controllerRoutes);

// Index route
app.get('/', (req, res) => {
  res.send('Invalid endpoint!');
});

app.listen(port, () => {
  logger.info('server started - ', port);
});
