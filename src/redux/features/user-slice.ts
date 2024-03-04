import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUser } from '@/services/api/api';

export const fetchUserInfo = createAsyncThunk(
    'user/fetchUserInfo',
    async (_, thunkAPI) => {
      const response = await fetchUser();
      return response;
    }
  );

type InitialState = {
    value: UsuarioLogadoType;
}

const initialState = {
    value: {
        usuarioId: 0,
        nome: "",
        email: "",
        usuarioTipo: "",
        usuarioStatus: ""
    } as UsuarioLogadoType,
} as InitialState;

export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
      // ...other reducers
    },
    extraReducers: (builder) => {
      builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.value = action.payload;
      });
    },
  });

export const { } = user.actions;
export default user.reducer;