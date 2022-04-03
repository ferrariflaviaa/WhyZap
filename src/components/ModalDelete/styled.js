import styled from "styled-components";

export const ContainerModal = styled.div`
  background-color: red;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
`
  


export const Content = styled.div`
  display: flex;
  width: 20%;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  max-width: 600px;
  top: 15%;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 4em 2rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
`
export const TitlePri = styled.div`
    text-align: center;
`

export const RowItens = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  cursor: pointer;
`