import React from "react";
import { ContainerModal, Content, TitlePri, RowItens} from "./styled";

function ModalDelete({ removeItem, handleCloseModal }) {
  console.log(handleCloseModal);

  const deleteMessage = () => {
    removeItem();
    handleCloseModal();
  };

  return (
    <ContainerModal>
      <Content>
        <TitlePri>Deseja excluir a mensagem?</TitlePri>
        <RowItens>
          <span onClick={handleCloseModal}>Não </span>
          <span onClick={deleteMessage}>Sim</span>
        </RowItens>
      </Content>
    </ContainerModal>
  );
}

export default ModalDelete;
