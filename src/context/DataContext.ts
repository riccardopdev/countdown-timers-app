import React from 'react';
import { State } from '../state/State';
import { DataContextType } from '../types/DataContextType';

export const DataContext = React.createContext<DataContextType>({
  state: State,
  dispatch: () => {},
});
