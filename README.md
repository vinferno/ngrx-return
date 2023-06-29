# NgrxReturn

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Process
## step 1
```
ng add @ngrx/schematics@latest --defaultCollection true
```
## step 2
```
npm install @ngrx/{store,effects,entity,store-devtools} --save
```
## step 3
```
ng generate store AppState --root --module app.module.ts --state-path store --state-interface AppState
```
## step 4
```
ng g action store/users --group --api --flat false --skip-tests --prefix load --creators true
```
## step 5
```
ng g ef store/user --group --api --flat false --module app.module.ts --root --skip-tests --creators true
```
## step 6
add to effect above constructor
```
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType('[Users Page] Load Users'),
    mergeMap(() => this.usersService.getAll()
      .pipe(
        map(users => ({ type: '[Users API] Users Loaded Success', payload: users })),
        catchError(() => EMPTY)
      ))
    )
  );
```
