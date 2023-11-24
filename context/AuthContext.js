import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext({});

export function AuthProvider({children}) {
    const [user, setUser] = useState(null); // Alterado para armazenar o objeto do usuário

    async function login(credenciais) {
        const resp = await axios.get("http://localhost:3000/usuarios");        
        const usuarios = resp.data;

        const usuario = usuarios.find(u => u.email === credenciais.email);

        if (usuario && usuario.senha === credenciais.senha) {
            setUser({ nome: usuario.nome, id: usuario.id }); // Armazenando nome e ID do usuário
            return true;
        }
        return false;
    }

    return (
        <AuthContext.Provider value={{user, login}}>
            {children}
        </AuthContext.Provider>
    );
}