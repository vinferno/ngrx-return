import { Action, createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/models/post';
import { loadPostsSuccess, selectPost } from '../../actions/post/post.actions';


export const postFeatureKey = 'post';

export interface State {
  posts: Post[];
  selectedPost: Post | null;
}

export const initialState: State = {
  posts: [],
  selectedPost: null,
};

export const reducer = createReducer<State>(
  initialState,
  on(loadPostsSuccess, (state, action): State => {
    return {...state, posts: action.data}
  }),
  on(selectPost, (state, action): State => {
    return {...state, selectedPost: action.data}
  })
);

