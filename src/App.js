import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import SandMassage from "./components/SandMassage";
import ModalDelete from "./components/ModalDelete";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [arr, setArr] = useState([
    { id: "1yh89-oundfcf", name: "SandMassage", message: "hdbehbd" },
  ]);
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

  const renderModal = () => {
    setOpenModal(!openModal);
  };

  const removeItem = () => {
    alert("Funciona")
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
    <div className="Container">
      <div className="Container-mensagens">
        {arr.length > 0 &&
          arr.map((item) => {
            if (item.name === "eu") {
              return (
                <div
                  className="Container-componente-Eu"
                  onClick={() => handleClick(item)}
                >
                  <div className="componenteEu">
                    <p>{item.message}</p>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  className="Container-componente-Proximo"
                  onClick={() => handleClick(item)}
                >
                  <div className="componenteProximo">
                    <h6>{item.name}</h6>
                    <p>{item.message}</p>
                  </div>
                </div>
              );
            }
          })}
      </div>

      <SandMassage
        onSandMessage={handleSandMassage}
        name={name}
        setName={setName}
        message={message}
        setMessage={setMessage}
      />

      {openModal && 
      <ModalDelete 
      handleCloseModal={renderModal}
      removeItem={removeItem}
      />  }
    </div>
  );
}

export default App;
