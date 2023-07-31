import { useState } from "react";
import { Input } from "../Input";
import { Select } from "../Select";
export const Form = ({addNote}) => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [selectedType, setSelectedType] = useState("Entrada");

  const submit = (event) => {
    event.preventDefault();
    addNote({title, value, type: selectedType})
    setTitle("");
    setValue("");
    setSelectedType("Entrada");
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <form onSubmit={submit}>
      <div>
        <Input label="Descrição" placeholder="Digite sua descrição aqui.." type="text" id="title" value={title} setValue={setTitle} />
        <p>Ex: Compra de roupas</p>
        <Input label="Valor" placeholder="" type="number" id="value" value={value} setValue={setValue} />
        <Select label="Tipo de valor" id="type" value={selectedType} handleChange={handleTypeChange} />
        <button className="btn" type="submit"><span className="title-4">Inserir valor</span></button>
      </div>
  
    </form>
  );
};
