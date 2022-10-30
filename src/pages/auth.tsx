import { GoogleOutlined } from "@ant-design/icons";
import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconWarn } from "../components/icons";
import useAuth from "../data/hooks/useAuth";

export default function Auth() {

    const { user, loginGoogle } = useAuth();

    const [auth, setAuth] = useState<"login" | "cadastro">("login");

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confPass, setConfPass] = useState("");
    const [error, setError] = useState(null);

    function showError(message, time = 5) {
        setError(message);
        setTimeout(() => setError(null), time * 1000);
    };

    function onSubmit() {
        if (auth === "login") {
            showError("Ocorreu um erro no Login", 7);
        } else {
            showError("Ocorreu um erro no Cadastro", 7);
        };
    };

    return (
        <div className={`flex h-screen items-center justify-center`}>
            <div className={`hidden md:block bd:w-1/2 lg:w-2/3`}>
                <img
                    src="https://source.unsplash.com/random"
                    alt="Imagem da Tela de login"
                    className={`h-screen w-full object-cover`} />
            </div>
            <div className={`m-10 w-full md:w-1/2 lg:w1/3`}>
                <h1 className={`
                text-3xl font-bold mb-5`}>

                    {auth === "login" ? "Entre com seu usuário e senha"
                        : "Cadastre-se na plataforma"}
                </h1>

                {error ? (
                    <div className="
                        flex items-center justify-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg">
                        {IconWarn()}
                        <span className="ml-3">{error}</span>
                    </div>
                ) : false}

                <AuthInput label="E-mail" type="email"
                    value={email} changeValue={setEmail} required />

                <AuthInput label="Senha" type="password"
                    value={pass} changeValue={setPass} required />

                <AuthInput label="Confirmar senha" type="password"
                    value={confPass} changeValue={setConfPass}
                    required notRendered={auth === "login"} />

                <button onClick={onSubmit} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400 text-white
                    rounded-lg px-4 py-3 mt-6`}>

                    {auth === "login" ? "Entrar" : "Cadastrar"}
                </button>

                <hr className={`my-6 border-gray-300 w-full`} />

                <button onClick={loginGoogle}
                    className={`
                    w-full bg-red-600 hover:bg-red-500 text-white
                    rounded-lg px-4 py-3 flex justify-center items-center`}>

                    <GoogleOutlined /><span className="ml-3">Entar com a conta do Google</span>
                </button>

                {auth === "login" ? (
                    <p className="mt-5"> Você é novo por aqui?
                        <a onClick={() => setAuth("cadastro")}
                            className="text-blue-500 hover:texte-blue-700 
                            font-semibold cursor-pointer"> Crie sua Conta.</a>
                    </p>
                ) : (
                    <p className="mt-5"> Você já possui uma conta?
                        <a onClick={() => setAuth("login")}
                            className="text-blue-500 hover:texte-blue-700 
                            font-semibold cursor-pointer"> Entre com suas Credenciais.</a>
                    </p>
                )}
            </div>
        </div>
    );
};