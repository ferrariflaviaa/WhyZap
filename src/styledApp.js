import styled from "styled-components";

export const ContainerMensagens =  styled.div`
  width: 600px;
  height:95%;
  margin-bottom: 20px; 
  overflow-y: scroll;
  background-color: #D6D58E;

`
export const Container = styled.div`
  margin-top: 20px;
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;

`

export const ContainerComponenteEu = styled.div`
  display: flex;
  align-self: flex-end;
  margin: 15px 0;
`
export const ComponenteEu = styled.div`
  margin-left: auto;
  background-color: #61dafb;
  max-width: 100px;
  min-width: 100px;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  flex-direction: column;
  cursor: pointer;
`

export const ContainerComponenteProximo = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 15px 0;
`
export const ComponenteProximo = styled.div`
  background-color: #61dafb;
  min-width: 100px;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  flex-direction: column;
  box-sizing: 20px;
  margin-bottom: 10px;
  cursor: pointer;

`
