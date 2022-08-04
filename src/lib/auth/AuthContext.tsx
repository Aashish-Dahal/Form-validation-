import React, {useState,createContext} from 'react';
import { boolean } from 'yup';

interface ContextProps{
  loggedIn?: boolean;
}
interface AuthProps {
  children: React.ReactNode;
}
export const AuthContext = createContext<ContextProps>({});
export const AuthProvider: React.FC<AuthProps> = ({ children })=> {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <AuthContext.Provider value={{
      loggedIn:loggedIn
    }}>
      {children}
    </AuthContext.Provider>
  
  );
}