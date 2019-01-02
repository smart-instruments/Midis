import path from 'path';

const config = {};

config.logFileDir = path.join(__dirname, '../../log');
config.logFileName = 'app.log';
config.dbHost = process.env.dbHost || 'localhost';
config.dbPort = process.env.dbPort || '27017';
config.remoteDbHost = process.env.remoteDbHost || 'ds145484.mlab.com';
config.remoteDbPort = process.env.remoteDbPort || '45484';
config.dbName = process.env.dbName || 'midis';
config.dbStat = process.env.dbStat || 'remote';
config.dbUserName = process.env.dbUserName || 'smartinstruments';
config.dbPassword = process.env.dbPassword || 'smartinstruments1dc';
config.serverPort = process.env.PORT || 5000;

export default config;
