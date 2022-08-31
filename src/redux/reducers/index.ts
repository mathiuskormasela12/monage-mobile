// ========== Root Reducer
// import all modules
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import all reducers
import authReducer from './authReducer';
import authTempReducer from './authTempReducer';

const rootPersistConfig = {
  key: 'root',
  blacklist: ['authTemp'],
  storage: AsyncStorage,
};

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  authTemp: authTempReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
