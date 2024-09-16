import './Perfil.css'
import React, { useState } from 'react';

export function loadFile(event: React.ChangeEvent<HTMLInputElement>) {
    const input = event.target as HTMLInputElement;

if (input.files && input.files[0]) {
    const profilePic = document.getElementById('profilePic') as HTMLImageElement;
    if (profilePic) {
        profilePic.src = URL.createObjectURL(input.files[0]);
    }
}
};

const cpf = document.getElementById('cpf') as HTMLInputElement

if (cpf) {
    cpf.addEventListener('input', function (e: Event){
        const inputElement = e.target as HTMLInputElement;
        inputElement.value = inputElement.value.replace(/[^0-9]/g, '').slice(0, 11)
    })
};

const telefone = document.getElementById('telefone') as HTMLInputElement

if (telefone) {
    telefone.addEventListener('input', function (e: Event){
        const inputElement = e.target as HTMLInputElement;
        inputElement.value = inputElement.value.replace(/[^0-9]/g, '').slice(0, 11)
    })
}

function Perfil(){
    const [profilePic, setProfilePic] = useState<string>('https://via.placeholder.com/100');

    const loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement;

        if (input.files && input.files[0]) {
            setProfilePic(URL.createObjectURL(input.files[0]));
        }
    };

    return(
        <>
            <div className="containerPerfil">
                <h2>Dados do Cadastro</h2>
            <div className="profile-pic">
                <img src={profilePic} alt="Foto Perfil" id="profilePic"/>
                <label htmlFor="uploadPic">Escolher foto</label>
                <input type="file" id="uploadPic" accept="image/*" onChange={loadFile}/>
            </div>
                <p className="note">Tamanho máximo: 220px altura x 220px largura</p>
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" id="nome" placeholder="Nome"/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" id="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" id="senha" placeholder="Senha"/>
                </div>
                <br/>
                <hr id="linha"/>
                <br/>
                <h2>Dados Pessoais</h2>
                <div className="form-group">
                    <label>CPF</label>
                    <input type="tel" id="cpf" placeholder="CPF"/>
                </div>
                <div className="form-group">
                    <label>Telefone</label>
                    <input type="tel" id="telefone" placeholder="Telefone"/>
                </div>
                <div className="form-group">
                    <label>Endereço</label>
                    <input type="text" id="endereco" placeholder="Endereço"/>
                </div>
                <div className="form-group">
                    <label>Data de Nascimento</label>
                    <input type="date" id="data-nascimento"/>
                </div>
                <div className="form-group">
                    <button type="submit">Editar</button>
                </div>
                <div className="form-group" id="voltar-container">
                    <a href="/ajustes" id="voltar">Voltar</a>
                </div>
            </div>
        </>
    )
}
export default Perfil 