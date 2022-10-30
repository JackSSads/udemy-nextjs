import FormPost from "./FormPost";

export default function Update({ label, type, value, changeValue, placeholder }) {
    return (
        <div>
            <FormPost
                label={label}
                type={type}
                value={value}
                changeValue={changeValue}
                placeholder={placeholder}
                required></FormPost>
        </div>
    )
}