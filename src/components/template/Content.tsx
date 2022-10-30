interface ContentProps {
    children?: any;
};

// component JSX content
export default function Content(props: ContentProps){
    
    return (
        <div className={`flex flex-col mt-7 dark:text-gray-200`} >

            {props.children} {/* recebe componentes filho como parâmetro opsional */}

        </div>
    );
};