import { createAction, props } from '@ngrx/store';



export const loginComplete = createAction(
  '[Login Page] Successful Login',
  props<{ email: string; password: string }>()
);


  