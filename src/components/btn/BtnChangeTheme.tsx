//import icons
import { IconSun, IconMoon } from "../icons/index"

interface BtnChangeThemeProps {
    theme: string;
    changeTheme: () => void;
};

export default function BtnChangeTheme(props: BtnChangeThemeProps) {
    return props.theme === "dark" ? (
        <div onClick={props.changeTheme} className={`
            hidden sm:flex items-center cursor-pointer rounded-full
            bg-gradient-to-r from-yellow-300 to-yellow-600
            w-14 lg:w-24 h-8 p-1 `}>

            <div className={`
                flex items-center justify-center
                bg-white text-yellow-600 w-6 h-6 rounded-full`}>

                {IconSun(4)}

            </div>
            
            <div className={`
                hidden lg:flex items-center ml-4
                text-white`}>

                <samp className={`text-sm`}>Claro</samp>

            </div>
        </div>
    ) : (
        <div onClick={props.changeTheme} className={`
            hidden sm:flex items-center justify-end cursor-pointer rounded-full
            bg-gradient-to-r from-gray-500 to-gray-900
            w-14 lg:w-24 h-8 p-1 `}>

            <div className={`
                hidden lg:flex items-center mr-4
                text-gray-300`}>

                <samp className={`text-sm`}>Dark</samp>

            </div>

            <div className={`
                flex items-center justify-center
                bg-black text-yellow-600 w-6 h-6 rounded-full`}>

                {IconMoon(4)}

            </div>
        </div>
    );
};