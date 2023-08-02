import { useState } from "react"
import { Form } from "../Form";
import { TodoList } from "../TodoList";
import { TotalMoney } from "../TotalMoney";
export const TodoSection = () => {
    const [noteList, setNoteList] = useState([]);
    const [selectedType, setSelectedType] = useState("Entrada");
  
    console.log(noteList)
    const addNote = (formData) => {
      const newNote = { ...formData, id: crypto.randomUUID() };
      setNoteList([...noteList, newNote]);
    };
  
    const removeNote = (removeId) => {
      const newNoteList = noteList.filter((note) => note.id !== removeId);
      setNoteList(newNoteList);
    };
  
    return (
      <section className="section-group">
        <div className="section-direction">
        <Form addNote={addNote} selectedType={selectedType} />
        <TotalMoney noteList={noteList}/>
        </div>
       
        <TodoList noteList={noteList} removeNote={removeNote} />
        
      </section>
    );
  };
  