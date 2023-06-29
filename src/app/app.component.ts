import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Post } from './models/post';
import { User } from './models/user';
import { AppState } from './store';
import { loadPosts, selectPost } from './store/actions/post/post.actions';
import { loadUsers, selectUser } from './store/actions/user/user.actions';
import { postsByUserSelector, userBySelectedPostSelected } from './store/selectors/combined/combined.selectors';
import { selectedPostSelector } from './store/selectors/post/post.selectors';
import {  selectedUserSelector, usersSelector } from './store/selectors/user/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-return';
  users$: Observable<User[]>;
  posts$: Observable<Post[]>;
  selectedUser$: Observable<User | null>;
  selectedPost$: Observable<Post | null>;
  constructor(private store: Store<AppState>){
    this.store.dispatch(loadUsers());
    this.store.dispatch(loadPosts());
    this.users$ = this.store.select(userBySelectedPostSelected);
    this.posts$ = this.store.select(postsByUserSelector);
    this.selectedUser$ = this.store.select(selectedUserSelector);
    this.selectedPost$ = this.store.select(selectedPostSelector);


  }

  selectUser(user: User | null) {
    this.store.dispatch(selectUser({data: user}))
  }
  selectPost(post: Post | null) {
    this.store.dispatch(selectPost({data: post}))
  }
}
