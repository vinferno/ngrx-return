import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../..';
import * as postFeature from '../../reducers/post/post.reducer';
import { selectedUserSelector } from '../user/user.selectors';

export const postFeatureSelector = createFeatureSelector<AppState, postFeature.State>(postFeature.postFeatureKey);

export const postsSelector = createSelector(
  postFeatureSelector,
  (postsState) => postsState.posts
);
export const selectedPostSelector = createSelector(
  postFeatureSelector,
  (postState) => postState.selectedPost
);




