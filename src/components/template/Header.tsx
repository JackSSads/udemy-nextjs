//import component
import Title from "./Title";

import BtnChangeTheme from "../btn/BtnChangeTheme";
import useAppData from "../../data/hooks/useAppData";

interface HeaderProps {
    title: string;
    description?: string;
};

// component JSX passando e requerendo o titulo e subtitulo
export default function Header(props: HeaderProps) {

    const { theme, changeTheme } = useAppData();

    return (
        <div className={`flex`}>
            <Title /* Adicionando component JSX Title ao component JSX Header */

                /* recebendo titulo */
                title={props.title}
                description={props.description}
            />
            <div className={`flex flex-grow justify-end`}>
                <BtnChangeTheme theme={theme} changeTheme={changeTheme} />
            </div>
        </div>
    );
};