import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/post';

export const loadPosts = createAction(
  '[Post] Load Posts'
);

export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{ data: Post[] }>()
);

export const loadPostsFailure = createAction(
  '[Post] Load Posts Failure',
  props<{ error: any }>()
);
export const selectPost = createAction(
  '[Post] Select Post',
  props<{ data: Post | null }>()
);
