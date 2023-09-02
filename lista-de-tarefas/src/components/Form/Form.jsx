import React, { useState } from "react";
import "./Form.css";

export default function Form({ adicionarTarefa }) {
  const [novoItem, setNovoItem] = useState("");

  function adicionarItem(e) {
    e.preventDefault();
    if (!novoItem) {
      return;
    }
    adicionarTarefa({ texto: novoItem, estaCompleto: false });
    setNovoItem("");
  }
  return (
    <>
      <form onSubmit={adicionarItem}>
        <input
          type="text"
          value={novoItem}
          placeholder="Adicione uma tarefa"
          id="input-entrada"
          onChange={(e) => {
            setNovoItem(e.target.value);
          }}
        />

        <button type="submit" className="botao adicionar">
          Adicionar
        </button>
      </form>
      ;
    </>
  );
}
