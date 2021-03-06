import path from 'path';

const config = {};

config.logFileDir = path.join(__dirname, '../../log');
config.logFileName = 'app.log';
config.dbHost = process.env.dbHost || 'localhost';
config.dbPort = process.env.dbPort || '27017';
config.remoteDbHost = process.env.remoteDbHost || 'ds145484.mlab.com';
config.remoteDbPort = process.env.remoteDbPort || '45484';
config.dbName = process.env.dbName || 'midis';
config.dbStat = process.env.dbStat || 'remote'; // "local"
config.dbUserName = process.env.dbUserName || 'smartinstruments';

config.dbPassword = process.env.dbPassword;
config.serverPort = process.env.PORT || 5000;

config.spotifyUsersDb = process.env.spotifyUsersDb || 'spotify_users';
config.remoteSpotifyUsersHost = process.env.remoteSpotifyUsersHost || 'ds113915.mlab.com';
config.remoteSpotifyUsersHostPort = process.env.remoteSpotifyUsersHostPort || '13915';
config.spotifyDbName = process.env.spotifyDbName || 'spotify_users';
config.spotifyDbPassword = process.env.spotifyDbPassword;

config.classifyServerUri = 'https://smart-instruments-class.herokuapp.com/'; // 'http://localhost:9990/'
config.classifyApiPath = 'classification/';
config.classifyApiPathRegularFields = 'classification_text_fields/';

export default config;
