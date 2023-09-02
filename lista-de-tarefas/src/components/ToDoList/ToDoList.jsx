import React, { useState } from "react";
import "./ToDoList.css";
import Form from "../Form/Form";
import Lista from "../Lista/Lista";
export default function ToDoList() {
  const [lista, setLista] = useState([]);

  function adicionarTarefa(novoItem) {
    setLista([...lista, novoItem]);
  }

  return (
    <>
      <h1>Lista De Tarefas</h1>
      <Form adicionarTarefa={adicionarTarefa}></Form>
      <Lista lista={lista} alterarLista={setLista}></Lista>
    </>
  );
}
