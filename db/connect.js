import Mongoose from 'mongoose';
import logger from '../core/logger/app-logger';
import config from '../core/config/config.dev';

Mongoose.Promise = global.Promise;

const connectToDb = async () => {
  const dbHost = config.dbHost;
  const dbPort = config.dbPort;
  const dbName = config.dbName;
  const remoteDbHost = config.remoteDbHost;
  const remoteDbPort = config.remoteDbPort;
  const remoteDbPassword = config.dbPassword;
  const dbUserName = config.dbUserName;
  try {
    if (config.dbStat === 'local') {
      await Mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, { useMongoClient: true });
    } else {
      const connectionString = `mongodb://${dbUserName}:${remoteDbPassword}@${remoteDbHost}:${remoteDbPort}/${dbName}`;
      await Mongoose.connect(`mongodb://${dbUserName}:${remoteDbPassword}@${remoteDbHost}:${remoteDbPort}/${dbName}`, { useMongoClient: true });
    }
    logger.info('Connected to mongo!!!');
  } catch (err) {
    logger.error(`Could not connect to MongoDB (err) => ${err}`);
  }
};

export default connectToDb;
