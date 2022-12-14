//import states
import { createContext, useState } from "react";

type Theme = "dark" | "";
type Color = "white" | "black";

interface AppContextProps {
    theme?: Theme;
    color?: Color;
    changeTheme?: () => void;
};

// extendendo interface AppContextProps
const AppContext = createContext<AppContextProps>({});

export function AppProvider(props) {
    const [theme, setTheme] = useState<Theme>("dark");
    const [color, setColor] = useState<Color>("white");

    function changeTheme() {
        setTheme(theme === "" ? "dark" : "");
        setColor(color === "white" ? "black" : "white");
    };

    return (
        <AppContext.Provider value={{
            theme,
            color,
            changeTheme
        }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContext;