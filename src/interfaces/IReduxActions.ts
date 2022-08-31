// ========== IReduxActions
// import all modules
import {IAuthReduxStates} from './IReduxStates';

export interface IAuthReduxActions {
  type: 'SET_TOKEN' | 'SET_TEMP_TOKEN';
  payload: {
    data: IAuthReduxStates;
  };
}
