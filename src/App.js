import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container, ContainerMensagens, ContainerComponenteEu, ComponenteEu, ContainerComponenteProximo, ComponenteProximo } from "./styledApp.js";
import "./index.css"
import SandMassage from "./components/SandMassage";
import ModalDelete from "./components/ModalDelete";

function App() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [arr, setArr] = useState([]);
  const [click, setClick] = useState(0);
  const [select, setSelect] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [deleteMessageArr, setDeleteMessageArr ] = useState(false);

  //Verificando ser a conteudo dentro nas variaveis
  function handleSandMassage() {
    if (!!name && !!message) {
      let objMessage = {
        id: uuidv4(),
        name,
        message,
      };
      setArr([...arr, objMessage]);
      setName("");
      setMessage("");
    }
  }

  //Conta os clicks
  function handleClick(item) {
    setSelect(item);

    //Difencia os clicks
    if (item !== select) {
      setClick(1);
    } else {
      setClick(click + 1);
    }
  }

  function deleteMessage(item) {
    const filterArrays = arr.filter(
      (itemSearche) => itemSearche.id !== item.id
    );
    setArr(filterArrays);
    setDeleteMessageArr(false);
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      handleSandMassage();
    }
  }

  const renderModal = () => {
    setOpenModal(!openModal);
  };

  const removeItem = () => {
    setDeleteMessageArr(!deleteMessageArr);
  };

  useEffect(() => {
    deleteMessage(select);
    
  },[deleteMessageArr])

  //Verifica os clicks em tempo real
  useEffect(() => {
    if (click == 2) {
      renderModal();
      setClick(0);
    }
  }, [click]);

  return (
    <Container>
      <ContainerMensagens>
        {arr.length > 0 &&
          arr.map((item) => {
            if (item.name === "eu") {
              return (
                <ContainerComponenteEu
                  onClick={() => handleClick(item)}  
                >
                  <ComponenteEu>
                    <p>{item.message}</p>
                  </ComponenteEu>
                </ContainerComponenteEu>
              );
            } else {
              return (
                <ContainerComponenteProximo
                  onClick={() => handleClick(item)}
                >
                  <ComponenteProximo>
                    <h6>{item.name}</h6>
                    <p>{item.message}</p>
                  </ComponenteProximo>
                </ContainerComponenteProximo>
              );
            }
          })}
      </ContainerMensagens>

      <SandMassage
        onSandMessage={handleSandMassage}
        name={name}
        setName={setName}
        message={message}
        setMessage={setMessage}
        handleKeyPress={handleKeyPress}
      />

      {openModal && 
      <ModalDelete 
      handleCloseModal={renderModal}
      removeItem={removeItem}
      />  }
    </Container>
  );
}

export default App;
