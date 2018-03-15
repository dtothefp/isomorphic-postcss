import { init as initType } from './action-types';

export const init = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: initType.PENDING
    });

    return await new Promise((res) => {
      setTimeout(res, 2000);
    }).then(() => {
      dispatch({type: initType.SUCCESS});
    });
  };
};
