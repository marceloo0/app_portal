import axios, { AxiosError } from 'axios';
// import { signOut } from '../contexts/AutContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_REFRESH } from '../constants/endpoints/auth'

const api = axios.create({
  baseURL: 'https://hom.api.portal.coopersystem.com.br/api/v1',
});

api.interceptors.response.use(response => {
  return response
}, async (error: AxiosError) => {
  const originalRequest = error.config
  if (error.response?.status === 401) {

    const [acessToken, refreshToken] = await AsyncStorage.multiGet([
      '@PortalApp:acessToken',
      '@PortalApp:refreshToken',
    ]);

    const token = await api.post(AUTH_REFRESH, { refresh: refreshToken[1] })

    originalRequest.headers['Authorization'] = `Bearer ${token.data.access}`
    return axios(originalRequest)
  }
  return Promise.reject(error)
})

export default api

