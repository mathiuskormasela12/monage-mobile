// ========== Home
// import all modules
import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {IReduxStates} from '../interfaces';
import {setTempToken, setToken} from '../redux/actions';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const accessToken: string = useSelector(
    (states: IReduxStates) => states.auth.accessToken,
  );
  const accessTokenTemp: string = useSelector(
    (states: IReduxStates) => states.authTemp.accessToken,
  );

  const handleClick = () => {
    if (accessToken === '') {
      dispatch(setToken(String(Date.now()), String(Date.now())));
    } else {
      dispatch(setToken('', ''));
    }
  };

  const handleClick2 = () => {
    if (accessTokenTemp === '') {
      dispatch(setTempToken(String(Date.now()), String(Date.now())));
    } else {
      dispatch(setTempToken('', ''));
    }
  };

  return (
    <SafeAreaView>
      <Text style={styled.title} onPress={handleClick}>
        Persisted Token
      </Text>
      <Text style={styled.title} onPress={handleClick2}>
        Temporary Token
      </Text>
      {accessToken !== '' && (
        <Text style={styled.token}>There are persisted tokens</Text>
      )}

      {accessTokenTemp !== '' && (
        <Text style={styled.token}>There are temporary tokens</Text>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styled = StyleSheet.create({
  title: {
    fontSize: 28,
    color: 'red',
  },
  token: {
    fontSize: 20,
    color: 'blue',
  },
});
