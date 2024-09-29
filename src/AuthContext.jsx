import React, { createContext, useEffect, useState } from 'react';
import { AuthClient } from '@dfinity/auth-client';

export const AuthContext = createContext();//se crea Authcontext para que modifique is Autheticated que define si se puede entrar
export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(()=>{init();},[]);//ejecuta init cada vez que se recargue la pagina
    async function init() {//esta funcion es para que al recargar pagina no se salga de la autenticacion
        const authcliente=await AuthClient.create();
        const identidad=authcliente.getIdentity();
        const principal=identidad.getPrincipal();
        if(!principal.isAnonymous()){
            setIsAuthenticated(true);
        }
    }
    const login = async() => {//esta funcion se va al boton de login para que la use al dar cic al boton y hacer que " isAuthenticated"
        const authcliente=await AuthClient.create();//con esto se utiliza el identity internet el await indica que hasta que no termine de crearse no continua
        
        authcliente.login ({
            identityProvider:"http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/",
            onSuccess: async()=>{//onSucces es de que hacer cuando si pase la autenticación
                setIsAuthenticated(true);
            },
            onError:(err)=>{//en caso de que falle
                console.error(err);
            }
        });
        
    };
    const logout =  async() => {
        const authcliente=await AuthClient.create();
        await authcliente.logout();
        setIsAuthenticated(false);
    };
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}