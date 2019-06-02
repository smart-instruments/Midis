import rp from 'request-promise';
import controllerModel from '../models/controllerModel';
import ribaSetupModel from '../models/ribaSetupModel';
import userModel from '../models/user.model';
import logger from '../core/logger/app-logger';
import config from '../core/config/config.dev';

const controller = {};


function request(method, uri, body) {
  const options = {
    method,
    uri,
    body,
    json: true,
  };

  logger.info(options);
  return rp(options);
}

function extractFieldsForPrediction(user) {
  return {
    size_genres: user.genres.length,
    size_equipment: user.equipment.length,
    size_influences: user.influences.length,
    size_instruments: user.instruments.length,
    size_languages: user.languages.length,
    description: user.musicalBackground.descripion,
  };
}

controller.getController = async (req, res) => {
  try {
    const clr = await controllerModel.getController();
    logger.debug('[predictionController.getController] - Getting controller ');

    return res.status(200).send(JSON.stringify(clr));
  } catch (err) {
    logger.error('[predictionController.getController] - Error while getting controller (err)', err);
    return res.status(500).send('Error while getting controller');
  }
};

controller.getSizesClassification = async (body) => {
  try {
    logger.info('[predictionController.getSizesClassification] - requesting classifications for (user) => ', JSON.stringify(body));
    const classifications = await request('POST', config.classifyServerUri + config.classifyApiPath, body);

    logger.info('[predictionController.getSizesClassification] - classifications for (user) done => ', JSON.stringify(classifications));

    return classifications;
  } catch (err) {
    logger.error('[predictionController.getSizesClassification] - Error while getting classification (err)', err);
    throw new Error(err);
  }
};

controller.getUserClassification = async (req, res) => {
  const id = req.param('id');
  try {
    logger.info('[predictionController.getUserClassification] - requesting classifications for (user) => ', id);
    const user = await userModel.getUser(id);
    logger.info('[predictionController.getUserClassification] - requesting user data for (user data) => ', JSON.stringify(user));

    const data = extractFieldsForPrediction(user);
    logger.info('[predictionController.getUserClassification] - requesting user data for (extracted user data) => ', JSON.stringify(data));

    const classifications = await controller.getSizesClassification(data);

    logger.info('[predictionController.getUserClassification] - classifications for (user, classification) done => ', id, JSON.stringify(classifications));

    const response = {
      regularFields: {
        harmony: classifications.harmony,
        melody: classifications.melody,
        rythem: classifications.rythem,
        sophisticationLevel: classifications.sophisticationLevel,
      },
      freeText: {
        rythem: classifications.rythemFreeText,
      },
    };

    return res.status(200).send(JSON.stringify(response));
  } catch (err) {
    logger.error('[predictionController.getUserClassification] - Error while getting classification - (err)', err);
    return res.status(500).send('Error while getting classification');
  }
};

controller.getSetup = async (req, res) => {
  const controllerId = req.param('controllerId');
  if (!controllerId) {
    logger.warn('[predictionController.getSetup] - No controller Id was sent (id)', controllerId);
    return res.status(500).send('Error Getting setup for controller => (controllerId)', controllerId);
  }

  try {
    const model = mapControllerIdForModel(controllerId);
    const setup = await model.getSetup();
    logger.debug('[predictionController.getSetup] - Getting setup ');

    return res.status(200).send(JSON.stringify(setup));
  } catch (err) {
    logger.error('[predictionController.getSetup] - Error while getting setup (err)', err);
    return res.status(500).send('Error while getting setup');
  }
};

function mapControllerIdForModel(controllerId) {
  if (!controllerId) {
    return false;
  }

  return ribaSetupModel;
}

export default controller;
