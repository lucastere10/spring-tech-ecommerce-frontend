import { fetchCarrinho } from "@/services/api/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type ProdutoType = {
    produtoCarrinhoId: number;
    quantidade: number;
    precoUnitario: number;
    precoTotal: number;
    desconto: number | null;
    produto: {
        produtoId: number;
        nome: string;
        descricao: string;
        preco: number;
    }
}

type UsuarioType = {
    usuarioId: number;
    nome: string;
    email: string;
    usuarioTipo: string;
    usuarioStatus: string;
}

type CarrinhoType = {
    carrinhoId: number;
    valor: number;
    usuario: UsuarioType;
    produtoCarrinho: ProdutoType[];
}

type InitialState = {
    value: CarrinhoType;
}

const initialState: InitialState = {
    value: {
        carrinhoId: 0,
        valor: 0,
        usuario: {
            usuarioId: 0,
            nome: '',
            email: '',
            usuarioTipo: '',
            usuarioStatus: '',
        },
        produtoCarrinho: [{
            produtoCarrinhoId: 0,
            quantidade: 0,
            precoUnitario: 0,
            precoTotal: 0,
            desconto: null,
            produto: {
                produtoId: 0,
                nome: '',
                descricao: '',
                preco: 0,
            }
        }],
    },
};

export const fetchCarrinhoInfo = createAsyncThunk(
    'user/fetchCarrinhoInfo',
    async (_, thunkAPI) => {
        try {
            const response = await fetchCarrinho();
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const carrinho = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        // ...other reducers
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCarrinhoInfo.fulfilled, (state, action) => {
            if (action.payload) {
                state.value = action.payload;
            }
        });
        builder.addCase(fetchCarrinhoInfo.rejected, (state, action) => {
            // Lidar com erros aqui
        });
    },
})


export const { } = carrinho.actions;
export default carrinho.reducer;