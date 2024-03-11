import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from './features/user-slice';
import carrinhoReducer from './features/carrinho-slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    carrinho: carrinhoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
