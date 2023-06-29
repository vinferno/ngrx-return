import { createSelector } from "@ngrx/store";
import { postsSelector, selectedPostSelector } from "../post/post.selectors";
import { selectedUserSelector, usersSelector } from "../user/user.selectors";

export const postsByUserSelector = createSelector(
  postsSelector,
  selectedUserSelector,
  (posts, user) => {
    if (!user) {
      return posts
    } else {
      return posts.filter(post => post.userId === user.id)
    }
  }
);
export const userBySelectedPostSelected = createSelector(
  selectedPostSelector,
  usersSelector,
  (selectedPost, users) => {
    return !selectedPost ? users : users.filter(user => selectedPost?.userId === user.id)
  }
)
