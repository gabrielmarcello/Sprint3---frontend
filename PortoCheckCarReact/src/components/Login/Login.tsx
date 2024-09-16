import './Login.css'
function Login(){
    return(
        <>
    <div className="containerlog">
        <h1>Login</h1>
        <form>
            <div className="form-group-account">
                <input type="email" id="email" name="email" placeholder="Email" required/>
            </div>
            <div className="form-group-account">
                <input type="password" id="password" name="password" placeholder="Senha" required/>
            </div>
            <a href="/"><button type="submit" className="btn-submit btn">Confirmar</button></a>
            <br />
            <br />
            <p>OU</p>
            <br />
        </form>
        <a href="/Register"><button className="btn-create btn">Criar Conta</button></a>
    </div>
        </>
    )
}
export default Login