import './Assistente.css'
function Assistente(){
    return(
        <>
             <div className="chat-container">
        <div className="chat-box">
            <div className="message bot-message">
                <img src="img/portinho.png" alt="Bot Avatar" className="avatar"/>
                <div className="message-content">
                    <p>Ola, sou o Portinho, como posso ajudar?</p>
                </div>
            </div>
            <div className="message user-message">
                <div className="message-content">
                    <p>Ola portinho, meu carro não esta ligando!</p>
                </div>
            </div>
            <div className="message bot-message">
                <img src="img/portinho.png" alt="Bot Avatar" className="avatar"/>
                <div className="message-content">
                    <p>O veículo é algum da sua lista de carros?</p>
                </div>
            </div>
        </div>
        <div className="chat-input">
            <input type="text" placeholder="Digite sua mensagem..."/>
            <button>Enviar</button>
        </div>
    </div>    
        </>
    )
}
export default Assistente