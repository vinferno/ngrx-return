import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap} from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';
import { loadUsers, loadUsersSuccess } from '../../actions/user/user.actions';



@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
    mergeMap(() => this.usersService.getAll()
      .pipe(
        map(users => (loadUsersSuccess({data: users}))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}

}
