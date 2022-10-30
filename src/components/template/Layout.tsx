//import components
import SideBar from "./SideBar";
import Header from "./Header";
import Content from "./Content";

// import custon hook
import useAppData from "../../data/hooks/useAppData";

interface LayoutProps {
    title: string;
    description?: string;
    children?: any;
};

// component JSX layout
export default function Layout(props: LayoutProps) {

    const { theme } = useAppData();

    return (
        <div className={`${theme} flex h-full w-full`} >

            <SideBar /> {/* Adicionando component JSX SideBar ao component JSX layout */}

            <div className={`flex flex-col w-full p-5 ml-20 bg-gray-100 dark:bg-gray-800`} >

                <Header /* Adicionando component JSX Header ao component JSX layout */

                    /* recebendo o titulo e subtitulo */
                    title={props.title}
                    description={props.description} />

                <Content > {/* Adicionando component JSX Component ao component JSX layout */}

                    <div className="flex flex-col">
                        {/* layout pode receber filhos (opsicional) */}
                        {props.children}
                    </div>

                </Content>
            </div >
        </div >
    );
};
