import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import { AUTH } from '../constants/endpoints/auth'

interface AuthState {
  acessToken: string;
  refreshToken: string;
  username: string
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  username: string
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut: () => void
  isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);
  const isAuthenticated = !!data

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [ acessToken, refreshToken, username ] = await AsyncStorage.multiGet([
        '@PortalApp:acessToken',
        '@PortalApp:refreshToken',
        '@PortalApp:username',
      ]);

      if (acessToken[1] && refreshToken[1] && username[1]) {
        api.defaults.headers.authorization = `Bearer ${acessToken[1]}`;

        setData({
          acessToken: acessToken[1],
          refreshToken: refreshToken[1],
          username: username[1]
        });
      }

      setLoading(false);
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ username, password }) => {

      const response = await api.post(AUTH, {
        username,
        password,
      });

      const { access, refresh } = response.data;

      await AsyncStorage.multiSet([
        ['@PortalApp:acessToken', access],
        ['@PortalApp:refreshToken', refresh],
        ['@PortalApp:username', username],
      ]);

      api.defaults.headers.authorization = `Bearer ${access}`;

      setData({ acessToken: access, refreshToken: refresh, username });

  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@PortalApp:acessToken', '@PortalApp:username']);
    setData({} as AuthState)
  }, []);

  return (
    <AuthContext.Provider value={{ loading, signIn, isAuthenticated, username: data.username, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
