import spotifyUserModel from '../models/spotifyUser.model';
import logger from '../core/logger/app-logger';

const controller = {};

controller.addSpotifyUser = async (req, res) => {
  const doc = req.body;
  const spotifyUser = spotifyUserModel(doc);

  if (!doc.userId) {
    logger.error('[spotifyUserController.addSpotifyUser] - Error while Adding spotify data (user-data,err)', JSON.stringify(doc), 'No user id was sent');

    return res.status(500).send(`Error Saving document (document) no id was sent => ${JSON.stringify(doc)}`);
  }

  try {
    spotifyUser.created = Date.now();
    spotifyUser.lastUpdate = Date.now();

    const savedUser = await spotifyUserModel.addSpotifyUser(spotifyUser);
    logger.info('[spotifyUserController.addSpotifyUser] - Adding Spotify user', doc);

    return res.status(200).send(JSON.stringify(savedUser));
  } catch (err) {
    logger.error('[spotifyUserController.addSpotifyUser] - Error while Adding spotify data (user-data,err)', JSON.stringify(doc), err);

    return res.status(500).send(`Error Saving document (document) => ${JSON.stringify(doc)}`);
  }
};

export default controller;
