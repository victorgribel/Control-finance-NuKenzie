import { Card } from "./Card";
export const TodoList = ({ noteList, removeNote }) => {
  return (
    <section className="section-container-two">
      <h1 className="title-3">Resumo Financeiro</h1>
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
