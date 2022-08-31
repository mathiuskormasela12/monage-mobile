// ========== App
// import all modules
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import pesistedStore from './src/redux/store';
import Wrapper from './src/Wrapper';

const App: React.FC = () => {
  const {store, persistor} = pesistedStore;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Wrapper />
      </PersistGate>
    </Provider>
  );
};

export default App;
