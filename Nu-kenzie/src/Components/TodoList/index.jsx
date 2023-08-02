import { Card } from "./Card";

export const TodoList = ({ noteList, removeNote }) => {
  return (
    <section className="section-container-two">
      <h1 className="title-3">Resumo Financeiro</h1>
      {noteList.length === 0 ? (
        <h2 className="title-2">Você ainda não inseriu nenhum valor</h2>
      ) : null}
      <ul>
        {noteList.map((note) => (
          <Card
            key={note.id}
            id={note.id}
            title={note.title}
            value={note.value}
            type={note.type}
            removeNote={removeNote}
          />
        ))}
      </ul>
    </section>
  );
};
