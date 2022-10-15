// import component Link
import Link from "next/link";

interface MenuItemProps {
    url?: string;
    text: string;
    icon: any;
    className?: string;
    onClick?: (event: any) => void;
};

// component JSX MenuItem
export default function MenuItem(props: MenuItemProps) {

    function renderLink() {
        return (

            <a className={`
                    flex flex-col justify-center items-center
                    h-20 w-20
                    dark:text-gray-500 
                    ${props.className}`} >

                {props.icon}

                <span className={`text-xs font-light`}>

                    {props.text} 

                </span>
            </a>
        );
    };

    return (
        <li onClick={props.onClick} className={`
        hover:bg-gray-100 dark:hover:bg-gray-800
        cursor-poiner`} >

            {/* verificação se há um link sendo passado como parâmetro */}
            {props.url ? (

                <Link href={props.url}>

                    {renderLink()}

                </Link>

            ) : (

                renderLink()

            )}
        </li>
    );
};