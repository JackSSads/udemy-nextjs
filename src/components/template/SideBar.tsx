// Import icons
import { IconHome, IconBell, IconNew, IconSettings, IconLogout } from "../icons";

//import logo
import Logo from "./Logo";

//Import components
import MenuItem from "./MenuItem";

// component JSX SideBar
export default function SideBar() {
    return (
        <aside className={`
            flex flex-col
            position: fixed
            h-full
            bg-gray-200 text-gray-700
            dark:bg-gray-900 `}>

            {/* ícone logo */}
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-500
                h-20 w-20`}>

                <Logo /> {/* Inserindo logo */}

            </div>

            {/* ícones do menu lateral */}
            <ul className={`flex-grow`}>
                <MenuItem url="/" text="Todas as OS" icon={IconHome} />
                <MenuItem url="/managers" text="Gestores" icon={IconBell} />
                <MenuItem url="/collaborators" text="Colaboradores" icon={IconNew} />
                <MenuItem url="/clients" text="Clientes" icon={IconNew} />
                <MenuItem url="/create-os" text="Criar OS" icon={IconSettings} />
            </ul>

            {/* botão logout */}
            <ul>
                <MenuItem
                    text="Sair"
                    icon={IconLogout}
                    onClick={() => console.log("Logout")}
                    className={`
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white`} />
            </ul>
        </aside>
    );
};