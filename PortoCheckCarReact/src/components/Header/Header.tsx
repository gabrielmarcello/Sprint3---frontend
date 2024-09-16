import './Header.css';

function Header(){
    return (
        <>
            <header className='nav'>
                <a className='nav-item' href="/"><img src="img/portoseguro.png" alt="Porto Seguro"/></a> 
                <a className='nav-item' href="/MeuCarro">Meu carro</a>
                <a className='nav-item' href="/oficinas">Oficinas</a>
                <a className='nav-item' href="/assistente">Assistente</a>
                <a className='nav-item' href="/ajustes">Ajustes</a>
            </header>
            <hr id='linha'/>
        </>
    )
}
export default Header;