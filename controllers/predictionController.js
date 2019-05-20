import controllerModel from '../models/controllerModel';
import ribaSetupModel from '../models/ribaSetupModel';
import logger from '../core/logger/app-logger';

const controller = {};

controller.getController = async (req, res) => {
  // const id = req.param('id');
  // if (!id) {
  //   logger.warn('[controllerController.getController] - No id was sent (id)', id);
  //   return res.status(500).send('Error Getting document');
  // }

  try {
    const clr = await controllerModel.getController();
    logger.debug('[predictionController.getController] - Getting controller ');

    return res.status(200).send(JSON.stringify(clr));
  } catch (err) {
    logger.error('[predictionController.getController] - Error while getting controller (err)', err);
    return res.status(500).send('Error while getting controller');
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

