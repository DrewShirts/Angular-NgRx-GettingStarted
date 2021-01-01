import {createAction, props} from "@ngrx/store";
import {User} from "../user";

export const toggleMaskUserName = createAction(
  '[User] Mask User Name'
);

export const setCurrentUser = createAction(
  '[User] Set Current User',
  props<{ user: User }>()
);

export const clearCurrentUser = createAction(
  '[User] Clear Current User'
);

export const initializeCurrentUser = createAction(
  '[User] Initialize Current User'
);

export const loadUser = createAction(
  '[User] Load'
);

export const loadUserSuccess = createAction(
  '[User] Load Success',
  props<{ user: User[] }>()
);

export const loadUserFailure = createAction(
  '[User] Load Fail',
  props<{ error: string }>()
);
