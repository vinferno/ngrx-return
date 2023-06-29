import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap} from 'rxjs/operators';
import { PostService } from 'src/app/services/post.service';
import { loadPosts, loadPostsSuccess } from '../../actions/post/post.actions';

@Injectable()
export class PostEffects {
  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(loadPosts),
    mergeMap(() => this.postsService.getAll()
      .pipe(
        map(posts => (loadPostsSuccess({data: posts}))),
        catchError(() => EMPTY)
      ))
    )
  );


  constructor(private actions$: Actions, private postsService: PostService) {}

}
