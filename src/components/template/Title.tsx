interface TitleProps {
    title: string;
    description?: string;
};

// component JSX titulo
export default function Title(props: TitleProps) {
    return (
        <div>
            <h1 className={`
                font-black text-3xl
                text-gray-900 dark:text-gray-100`} >

                {props.title} {/* recebe o título da página como parâmetro */}

            </h1>

            <h2 className={`font-light text-sm dark:text-gray-300`} >

                {props.description} {/* recebe o subtitulo da página como parâmetro */}

            </h2>
        </div>
    );
};