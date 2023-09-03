import React from "react";
import Icone from "../../assets/icon-to-do-list.png";
import "./Lista.css";

export default function Lista({ lista, alterarLista }) {
  function selecionar(index) {
    const listaCopia = [...lista];
    listaCopia[index].estaCompleto = !listaCopia[index].estaCompleto;
    alterarLista(listaCopia);
  }

  function deletar(index) {
    const listaCopia = [...lista];
    listaCopia.splice(index);
    alterarLista(listaCopia);
  }

  function deletarTodas() {
    alterarLista([]);
  }
  return (
    <>
      <div className="listaTarefas">
        {lista.length < 1 ? (
          <img className="icone" src={Icone} alt="icone de lista de tarefas" />
        ) : (
          lista.map((item, index) => (
            <div
              key={index}
              className={item.estaCompleto ? "item completo" : "item"}
            >
              <span onClick={() => selecionar(index)}>{item.texto}</span>
              <button className="botao deletar" onClick={() => deletar(index)}>
                Deletar
              </button>
            </div>
          ))
        )}
        {lista.length > 0 && (
          <button className="botao deletarTodas" onClick={() => deletarTodas()}>
            {" "}
            Deletar todas
          </button>
        )}
      </div>
    </>
  );
}
