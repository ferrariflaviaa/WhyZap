import React from "react";
import { Layout, Pessoa, Mensagens, Enviar } from "./styled";

function SandMassage({ name, setName, message, setMessage, onSandMessage, handleKeyPress }) {
  return (
      <Layout>
        <Pessoa
          value={name}
          onChange={(text) => setName(text.target.value)}
          type="text"
          name="pessoa"
        />

        <Mensagens
          value={message}
          onChange={(text) => setMessage(text.target.value)}
          type="text"
          name="mensagens"
          onKeyPress={handleKeyPress}
        />
        <Enviar type="submit" value="enviar" onClick={onSandMessage}>
          Enviar
        </Enviar>
      </Layout>
  );
}

export default SandMassage;
