import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosResponse, AxiosResponseHeaders} from 'axios';
import React, {useState, createContext, useEffect} from 'react';
import {LOGIN, REGISTER} from '../../constant/APIBase';

interface ContextProps {
  loggedIn?: boolean;
  token?: string;
  login: (email: string, password: string) => Promise<void>;
  register: (
    userName: string,
    email: string,
    password: string,
  ) => Promise<void>;
  logout: () => void;
}
interface AuthProps {
  children: React.ReactNode;
}
export const AuthContext = createContext<ContextProps>({
  login: async () => undefined,
  register: async () => undefined,
  logout: () => undefined,
});
export const AuthProvider: React.FC<AuthProps> = ({children}) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string>('');
  const [userInfo, setUserInfo] = useState<AxiosResponse>();
  const login = async (email: string, password: string) => {
    setLoggedIn(true);

    try {
      let res: AxiosResponse = await axios.post(LOGIN, {
        email,
        password,
      });
      if (res.data.success === true) {
        setUserInfo(res);
        setUserToken(userInfo!.data.token);
        AsyncStorage.setItem('userToken', userInfo!.data.token);
        setLoggedIn(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const register = async (
    userName: string,
    email: string,
    password: string,
  ) => {
    setLoggedIn(true);

    try {
      let res: AxiosResponse = await axios.post(REGISTER, {
        userName,
        email,
        password,
      });
      if (res.data.success === true) {
        setUserInfo(res);
        setUserToken(userInfo!.data.token);
        AsyncStorage.setItem('userToken', userInfo!.data.token);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const logout = () => {
    setLoggedIn(true);
    setUserToken('null');
    AsyncStorage.removeItem('userToken');
    console.log(userToken);
    setLoggedIn(false);
  };
  const isLoggedIn = async () => {
    try {
      setLoggedIn(true);
      let userToken = await AsyncStorage.getItem('userToken');
      setUserToken(userToken!);
      setLoggedIn(false);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loggedIn: loggedIn,
        login: login,
        register: register,
        token: userToken,
        logout: logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
