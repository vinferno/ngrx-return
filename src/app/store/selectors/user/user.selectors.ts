import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../..';
import * as userFeature from '../../reducers/user/user.reducer';
import { selectedPostSelector } from '../post/post.selectors';

export const userFeatureSelector = createFeatureSelector<AppState, userFeature.State>(userFeature.userFeatureKey);

export const usersSelector = createSelector(
  userFeatureSelector,
  (userState) => userState.users
);
export const selectedUserSelector = createSelector(
  userFeatureSelector,
  (userState) => userState.selectedUser
);




