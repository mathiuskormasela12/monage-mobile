// ========= IReduxStates

export interface IReduxStates {
  auth: {
    accessToken: string;
    refreshToken: string;
  };
  authTemp: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface IAuthReduxStates {
  accessToken: string;
  refreshToken: string;
}
