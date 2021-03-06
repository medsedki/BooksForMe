import {createStore} from 'redux';
import toggleFavorite from './Reducers/favoriteReducer';
import {persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';
//commit
const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
export default createStore(persistReducer(rootPersistConfig, toggleFavorite));
