import router from "next/router.js";

import { createContext, useState } from "react";
import firebase from "../../firebase/config.js";
import User from "../../model/User.js";

interface AuthContextProps {
    user?: User;
    loginGoogle?: () => Promise<void>;
};

async function userNormalization(userFirabase: firebase.User): Promise<User> {

    const token = await userFirabase.getIdToken();
    
    return {
        uid: userFirabase.uid,
        name: userFirabase.displayName,
        email: userFirabase.email,
        token,
        provider: userFirabase.providerData[0].providerId,
        imageUrl: userFirabase.photoURL
    };
};

const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props) {
    const [user, setUser] = useState<User>(null);

    async function loginGoogle() {
        
        const res = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        );

        // validação de login com Google
        if(res.user?.email) {
            const user = await userNormalization(res.user);
            setUser(user);
    
            router.push("/");
        };
    };

    return(
        <AuthContext.Provider value={{
            user,
            loginGoogle
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;