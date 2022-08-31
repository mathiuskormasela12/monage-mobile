// ========== Types
// import all modules
import {IAuthReduxActions} from '../interfaces';

export type SetTokenFunc = (
  accessToken: string,
  refreshToken: string,
) => IAuthReduxActions;
