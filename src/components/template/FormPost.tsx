interface FormPostProps {
    label: string;
    value: any;
    type?: "text" | "email" | "password";
    placeholder?: string
    required?: boolean;
    changeValue: (newValue: any) => void;
}

export default function FormPost(props: FormPostProps) {

    return(
        
        <div className={`flex flex-col mt-4`}>

            <label className="font-semibold">{props.label}</label>

            <input type={props.type ?? "text"}
                value={props.value}
                placeholder={props.placeholder}
                onChange={event => props.changeValue?.(event.target.value)}
                required={props.required}
                className={`
                    px-4 py-3 rounded-lg mt-1 text-black
                    border focus:border-blue-500 focus:bg-white
                    focus:outline-none`}
            />
        </div>
    );
};