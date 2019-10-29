import * as commonContext from './commonContext';

export async function setRoatting(dispatch, rotating) {
  const setRoattingActionCreator = commonContext.setRotating(rotating);
  dispatch(setRoattingActionCreator);
}

export async function openModal(dispatch, type) {
  const setModalActionCreator = commonContext.setModal({ type, visible: true });
  dispatch(setModalActionCreator);
}

export async function closeModal(dispatch, type) {
  const setModalActionCreator = commonContext.setModal({
    type,
    visible: false,
  });
  dispatch(setModalActionCreator);
}

export async function openAlert(dispatch, type, title, description) {
  const setAlertActionCreator = commonContext.setAlert({
    visible: true,
    type,
    title,
    description,
  });
  dispatch(setAlertActionCreator);
}

export async function closeAlert(dispatch) {
  const setAlertActionCreator = commonContext.setAlert({
    visible: false,
    type: '',
    title: '',
    description: '',
  });
  dispatch(setAlertActionCreator);
}

export async function setRoulette(dispatch, type) {
  const setRouletteActionCreator = commonContext.setRoulette(type);
  dispatch(setRouletteActionCreator);
}
