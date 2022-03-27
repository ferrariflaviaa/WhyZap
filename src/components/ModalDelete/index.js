import React from "react";
import "./styled.css";

function ModalDelete({ removeItem, handleCloseModal }) {
  console.log(handleCloseModal);

  const deleteMessage = () => {
    removeItem();
    handleCloseModal();
  };

  return (
    <div className="ContainerModal">
      <div className="Content">
        <h4 className="title">Deseja excluir a mensagem?</h4>
        <div className="row-itens">
          <span className="fecha" onClick={handleCloseModal}>Não </span>
          <span className="executar" onClick={deleteMessage}>Sim</span>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete;
