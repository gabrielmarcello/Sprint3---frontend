import './MeuCarro.css'
function MeuCarro(){
    return(
        <>
            <div className="car-selection">
        <div className="car-card">
            <img id="peugeot" className="car" src="img/Peugeot-206.jpg" width="300"/>
            <div className="car-details">
                <p>Modelo: Peugeot-206</p>
                <p>Cor: Preto</p>
                <p>Ano: 1999</p>
            </div>
            <a href="/EditarCarro"><button>Editar</button></a>
        </div>
        <div className="car-card">
            <img id="onix" className="car" src="img/onix.webp" alt="Onix" width="300"/>
            <div className="car-details">
                <p>Modelo: Onix Turbo</p>
                <p>Cor: Branco</p>
                <p>Ano: 2024</p>
            </div>
            <a href="/EditarCarro"><button>Editar</button></a>
        </div>
        <div className="car-card">
            <img id="ka" className="car" src="img/ka.jpeg" alt="Red Car" width="300"/>
            <div className="car-details">
                <p>Modelo: Ford Ka</p>
                <p>Cor: Branco</p>
                <p>Ano: 2019</p>
            </div>
            <a href="/EditarCarro"><button>Editar</button></a>
        </div>
        <div>
           <a href="/MaisCarro"><button className="add-button">+</button></a>
        </div>
    </div>
        </>
    )
}
export default MeuCarro