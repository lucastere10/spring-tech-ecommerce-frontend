import axios from "axios";
import { getSession } from 'next-auth/react';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080/api",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(async (config) => {
  const session = await getSession();
  if (session) {
    config.headers.Authorization = session.token;
  }
  return config;
});

export const fetchProducts = async () => {
  try {
    const response = await api.get(`/produtos`);
    return { data: response.data, error: null };
  } catch (err: any) {
    if (err.response) {
      console.error('Error fetching data:', err.response.data);
      return { data: null, error: err.response.data };
    } else {
      console.error('Error:', err.message);
      return { data: null, error: err.message };
    }
  }
};

export const fetchCarrinho = async () => {
  try {
    const response = await api.get(`/usuarios/carrinho`);
    return { data: response.data, error: null };
  } catch (err: any) {
    if (err.response) {
      console.error('Error fetching data:', err.response.data);
      return { data: null, error: err.response.data };
    } else {
      console.error('Error:', err.message);
      return { data: null, error: err.message };
    }
  }
};

export const fetchProductById = async (id: string) => {
  try {
    const response = await api.get(`/produtos/${id}`);
    return { data: response.data, error: null };
  } catch (err: any) {
    if (err.response) {
      console.error('Error fetching data:', err.response.data);
      return { data: null, error: err.response.data };
    } else {
      console.error('Error:', err.message);
      return { data: null, error: err.message };
    }
  }
};

export const fetchOrderById = async (id: string) => {
  try {
    const response = await api.get(`/pedidos/${id}`);
    return { data: response.data, error: null };
  } catch (err: any) {
    if (err.response) {
      console.error('Error fetching data:', err.response.data);
      return { data: null, error: err.response.data };
    } else {
      console.error('Error:', err.message);
      return { data: null, error: err.message };
    }
  }
};



export const registerUser = async (data: RegisterRequest): Promise<boolean> => {
  try {
    await api.post('/auth/register', {
      nome: data.nome,
      login: data.login,
      senha: data.senha,
      role: data.role
    });
    alert('Usuário registrado com sucesso!');
    return true;
  } catch (error: any) {
    console.error(error);
    alert(error.response.data.userMessage);
    return false;
  }
};

export const registerUserWithGoogleOrGithub = async ({login, senha, nome}:{login:string,senha:string,nome:string}): Promise<string | boolean> => {
  try {
    const response = await api.post('/auth/googleLogin', {
      nome: nome,
      login: login,
      senha: senha,
    });
    return response.data.token;
  } catch (error: any) {
    console.error(error);
    return false;
}
};

export const fetchUser = async () => {
  try {
    const response = await api.get(`/auth/user`);
    console.log("Usuario :", response.data)
    return response.data;
  } catch (err: any) {
    if (err.response) {
      console.error('Error fetching data:', err.response.data);
      return { data: null, error: err.response.data };
    } else {
      console.error('Error:', err.message);
      return { data: null, error: err.message };
    }
  }
}

export const fetchSecret = async () => {
  try {
    const response = await api.get(`/auth/totp/setup`);
    return response.data;
  } catch (err: any) {
    if (err.response) {
      console.error('Error fetching data:', err.response.data);
      return { data: null, error: err.response.data };
    } else {
      console.error('Error:', err.message);
      return { data: null, error: err.message };
    }
  }
}

export const verifySecret = async (code:string) => {
  try {
    const response = await api.post(`/auth/totp/verify?code=${code}`);
    console.log("Verify :", response.data)
    return response.data;
  } catch (err: any) {
    if (err.response) {
      console.error('Error fetching data:', err.response.data);
      return { data: null, error: err.response.data };
    } else {
      console.error('Error:', err.message);
      return { data: null, error: err.message };
    }
  }
}

export const checkEmail = async (email: string) => {
  try {
    const response = await api.get(`/usuarios/verificar/${email}`);
    return { data: response.data, error: null };
  } catch (err: any) {
    if (err.response) {
      console.error('Error fetching data:', err.response.data);
      return { data: null, error: err.response.data };
    } else {
      console.error('Error:', err.message);
      return { data: null, error: err.message };
    }
  }
};



export default api;
