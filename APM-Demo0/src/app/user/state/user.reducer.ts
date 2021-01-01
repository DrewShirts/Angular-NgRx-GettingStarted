import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as AppState from '../../state/app.state';
import * as UserActions from './user.actions';

import {User} from '../user';

export interface State extends AppState.State {
  user: UserState;
}

export interface UserState {
  maskUserName: boolean,
  currentUser: User
}

const initialState: UserState = {
  maskUserName: false,
  currentUser: null
};

const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);

export const userReducer = createReducer(
  initialState,
  on(UserActions.toggleMaskUserName, (state): UserState => {
    return {
      ...state,
      maskUserName: !state.maskUserName
    };
  }),
  on(UserActions.setCurrentUser, (state, action): UserState => {
    return {
      ...state,
      currentUser: action.user
    };
  }),
  on(UserActions.clearCurrentUser, (state): UserState => {
    return {
      ...state,
      currentUser: null
    };
  }),
  on(UserActions.initializeCurrentUser, (state): UserState => {
    return {
      ...state,
      currentUser: {
        id: 0,
        userName: '',
        isAdmin: false
      }
    };
  })
);
