import React, { useState } from "react";
import { Input } from "../Input";
import { Select } from "../Select";

export const Form = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [selectedType, setSelectedType] = useState("Entrada");
  const [error, setError] = useState("");

  const submit = (event) => {
    event.preventDefault();
    if (!title || !value) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    addNote({ title, value, type: selectedType });
    setTitle("");
    setValue("");
    setSelectedType("Entrada");
    setError("");
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <form onSubmit={submit}>
      <div>
        <Input
          label="Descrição"
          placeholder="Digite sua descrição aqui.."
          type="text"
          id="title"
          value={title}
          setValue={setTitle}
        />
        <p>Ex: Compra de roupas</p>
        <Input
          label="Valor"
          placeholder=""
          type="number"
          id="value"
          value={value}
          setValue={setValue}
        />
        <Select
          label="Tipo de valor"
          id="type"
          value={selectedType}
          handleChange={handleTypeChange}
        />
        {error && <p>{error}</p>}
        <button className="btn" type="submit">
          <span className="title-4">Inserir valor</span>
        </button>
      </div>
    </form>
  );
};
