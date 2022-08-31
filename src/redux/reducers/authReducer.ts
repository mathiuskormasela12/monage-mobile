// ========== Auth Reducer
// import all modules
import {IAuthReduxActions, IAuthReduxStates} from '../../interfaces';

const initialState: IAuthReduxStates = {
  accessToken: '',
  refreshToken: '',
};

const authReducer = (
  state: IAuthReduxStates = initialState,
  action: IAuthReduxActions,
): IAuthReduxStates => {
  switch (action.type) {
    case 'SET_TOKEN': {
      return {
        ...state,
        accessToken: action.payload.data.accessToken,
        refreshToken: action.payload.data.refreshToken,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default authReducer;
