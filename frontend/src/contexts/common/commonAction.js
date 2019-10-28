import * as commonContext from './commonContext';

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
