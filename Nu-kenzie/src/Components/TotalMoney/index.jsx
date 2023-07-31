export const TotalMoney = ({ noteList }) => {
    const totalIncome = noteList.reduce((total, note) => {
      if (note.type === "Entrada") {
        return total + parseFloat(note.value);
      }
      return total;
    }, 0);
  
    const totalExpenses = noteList.reduce((total, note) => {
      if (note.type === "Saída") {
        return total + parseFloat(note.value);
      }
      return total;
    }, 0);
  
    const balance = totalIncome - totalExpenses;
    
    return (
      <section className="section-container-one">
        <div>
          <h2>Valor total:</h2>
          <p className="title-5">R${balance.toFixed(2)}</p>
        </div>
        <p>O valor se refere ao saldo</p>
      </section>
    );
  };
  