import React from 'react';
import "./styled.css";


function SandMassage({ name, setName, message, setMessage, onSandMessage }) {

    return (
        <div className="tela">
            <div className="layout">
                <input value={name} onChange={text => setName(text.target.value)} type="text" name="pessoa" className="pessoa" />
                <input value={message} onChange={text => setMessage(text.target.value)} type="text" name="mensagens" className="mensagens" />
                <buttom type="submit" value="enviar" className="enviar" 
                onClick={onSandMessage}>
                    Enviar
                </buttom>
            </div>
        </div>

    )


}

export default SandMassage;