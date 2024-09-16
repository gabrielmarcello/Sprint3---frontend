import './EditarCarro.css'
import React, { useState } from 'react';

function EditarCarro() {
    const [profilePic, setProfilePic] = useState<string>('https://via.placeholder.com/100');

    const loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement;

        if (input.files && input.files[0]) {
            setProfilePic(URL.createObjectURL(input.files[0]));
        }
    };


    
    return(
        
        <>
        <div className="containerCarro">
        <h2>Meu Carro</h2>
            <div className="profile-pic">
                <img src={profilePic} alt="Foto Perfil" id="profilePic"/>
                <label htmlFor="uploadPic">Escolher foto</label>
                <input type="file" id="uploadPic" accept="image/*" onChange={loadFile}/>
            </div>
        <p className="note">Tamanho máximo: 220px altura x 220px largura</p>
        <div className="form-group">
            <label>Marca</label>
            <input type="text" id="marca" placeholder="Marca"/>
        </div>
        <div className="form-group">
            <label>Tipo</label>
            <input type="text" id="tipo" placeholder="Tipo"/>
        </div>
        <div className="form-group">
            <label>Modelo</label>
            <input type="text" id="modelo" placeholder="Modelo"/>
        </div>
        <div className="form-group">
            <label>Cor</label>
            <input type="Cor" id="Cor" placeholder="Cor"/>
        </div>
        <div className="form-group">
            <label>Ano</label>
            <input type="ano" id="ano" placeholder="ano"/>
        </div>
        <div className="form-group">
            <label>Escreva o Histórico do veiculo</label>
            <input type="historico" id="historico" placeholder="Histórico do veiculo"/>
        </div>
        <div className="form-group">
            <label>Placa</label>
            <input type="text" id="Placa" placeholder="Placa"/>
        </div>
        <div className="form-group">
            <label>Quilometragem</label>
            <input type="text" id="Quilometragem" placeholder="Quilometragem"/>
        </div>
        <div className="form-group" id="editar">
            <button type="submit">Editar</button>
        </div>
        <div className="form-group" id="voltar-container">
            <a href="/MeuCarro" id="voltar">Voltar</a>
        </div>
        </div>
        </>
    )
}
export default EditarCarro