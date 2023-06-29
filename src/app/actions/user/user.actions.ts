import { createAction, props } from '@ngrx/store';

export const selectUsers = createAction(
  '[User] Select Users'
);

export const selectUsersSuccess = createAction(
  '[User] Select Users Success',
  props<{ data: any }>()
);

export const selectUsersFailure = createAction(
  '[User] Select Users Failure',
  props<{ error: any }>()
);
