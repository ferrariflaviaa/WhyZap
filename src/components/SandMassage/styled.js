import styled from "styled-components";

export const Layout = styled.div `
    background-color: red;
    width: 600px;
    height: 100%;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    position: relative; 
`

export const Pessoa = styled.input`
background-color: aquamarine;
width: 15%;
height: 100%;

`


export const Mensagens = styled.input`
    width: 70%;
`

export const Enviar = styled.button`
    align-items: center;
    cursor: pointer;
    text-align: center;
    background: #959ca0;
    color: white;
    border-style: outset;
    border-color: #959ca0;
    text-shadow:none;
    width: 15%;
`