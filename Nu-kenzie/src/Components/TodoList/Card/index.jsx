export const Card = ({ title, id, value, type, removeNote }) => {
    return (
      <li>
        <h3 className="title-3">{title}</h3>
        <p>R$:{value}</p>
        <span>{type}</span>
        <button className="btn sm" onClick={() => removeNote(id)}>Excluir</button>
      </li>
    );
  };
  