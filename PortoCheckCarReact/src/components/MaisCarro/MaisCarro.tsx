import React, { useState } from 'react';
import './MaisCarro.css'

function MaisCarro(){
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
                <h2>Cadastro Carro</h2>
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
                    <input type="text" id="cor" placeholder="Cor"/>
                </div>
                <div className="form-group">
                    <label>Placa</label>
                    <input type="text" id="placa" placeholder="Placa"/>
                </div>
                <div className="form-group">
                    <label>Quilometragem</label>
                    <input type="text" id="quilometragem" placeholder="Quilometragem"/>
                </div>
                <div className="form-group">
                    <label>Escreva o Histórico do Carro</label>
                    <input type="text" id="carro" placeholder='Carro'/>
                </div>
                <div className="form-group">
                    <button type="submit">Cadastrar</button>
                </div>
                <div className="form-group" id="voltar-container">
                    <a href="/MeuCarro" id="voltar">Voltar</a>
                </div>
            </div>
        </>
    )
}
export default MaisCarro