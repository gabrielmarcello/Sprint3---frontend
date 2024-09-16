import './Register.css'
function Register(){
    return (
        <>
            <div className="containerRegister">
                <h1>Crie sua Conta</h1>
                <form>
                    <div className="form-group-account">
                        <input type="email" id="email" name="email" placeholder="Email" required/>
                    </div>
                    <div className="form-group-account">
                        <input type="email" id="confirm-email" name="confirm-email" placeholder="Confirmar email" required/>
                    </div>
                    <div className="form-group-account">
                        <input type="password" id="password" name="password" placeholder="Senha" required/>
                    </div>
                    <div className="form-group-account">
                        <input type="password" id="confirm-password" placeholder="Confirmar senha" name="confirm-password" required/>
                    </div>
                    <a href="login.html"><button type="submit" className="btn-submit">Confirmar</button></a>
                </form>
            </div>
        </>
    )
}
export default Register