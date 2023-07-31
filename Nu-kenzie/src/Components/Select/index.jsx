export const Select = ({ label, id, type, value, handleChange }) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <select type={type} name="entrada/saida" value={value} onChange={handleChange}>
          <option value="Entrada">Entrada</option>
          <option value="Saída">Saída</option>
        </select>
      </div>
    );
  };
  