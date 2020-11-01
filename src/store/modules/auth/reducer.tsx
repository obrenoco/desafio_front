import { Reducer } from 'redux';
import produce from 'immer';
import { IAuthState, ActionTypes } from './types';
import { IUser } from '../../../interfaces';

const INITIAL_STATE: IAuthState = {
  token: '',
  user: {} as IUser,
  loading: false,
  // signed: false
};

const auth: Reducer<IAuthState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.authSuccess: {
        const { user, token } = action.payload;

        draft.user = user;
        draft.token = token;
        draft.loading = false;
        // draft.signed = true;

        // localStorage.setItem('SiteBlindado:User', JSON.stringify(user));
        // localStorage.setItem('SiteBlindado:Token', token);

        break;
      }

      case ActionTypes.logout: {
        draft.user = null;
        draft.token = '';

        // localStorage.removeItem('SiteBlindado:User');
        // localStorage.removeItem('SiteBlindado:Token');

        break;
      }

      case ActionTypes.setLoading: {
        const { loading } = action.payload;

        draft.loading = loading;
        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default auth;
