export const Input = ({label, id, type, placeholder, value, setValue} ) => {
    return(
        <div>
            <label htmlFor={id}>{label}</label>
            <input 
            type={type} 
            value={value} 
            name={id}
            id={id}
            placeholder={placeholder} 
            onChange={(event) => setValue(event.target.value)} />
        </div>
    )
}