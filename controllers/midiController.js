import midiModel from '../models/midi.model';
import logger from '../core/logger/app-logger';

const controller = {};

controller.getMidi = async (req, res) => {
  const id = req.param('id');
  if (!id) {
    logger.warn('[midiController.getMidi] - No id was sent (id)', id);
    res.send('Error - no id was sent');
  }

  try {
    const midi = await midiModel.getMidi(id);
    logger.debug('[midiController.getMidi] - Getting midi (id)', id);
    res.send(midi);
  } catch (err) {
    logger.error('[midiController.getMidi] - Error while getting midi (id,err)', id, err);
    res.send('Got error in getMidi');
  }
};

controller.addMidi = async (req, res) => {
  const doc = req.body;
  const midi = midiModel(doc);
  try {
    const savedMidi = await midiModel.addMidi(midi);
    logger.info('[midiController.getMidi] - Adding midi', doc);
    res.send('added: midi (midi)', JSON.stringify(savedMidi));
  } catch (err) {
    logger.error('[midiController.addMidi] - Error while Adding midi (midi,err)', JSON.stringify(doc), err);
    res.send('Got error in getAll');
  }
};

export default controller;
