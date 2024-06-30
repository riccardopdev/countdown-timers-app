import { ActionsType } from './ActionsType';
import { DataType } from './DataType';

export type DataContextType = {
  state: DataType;
  dispatch: React.Dispatch<ActionsType>;
};
