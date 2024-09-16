import './Footer.css';
import ListItem from '../ListItem/ListItem'
import logo from "../../assets/img/PortoHolding-RGB-H.5b8d5d69.png"
function Footer(){
    return(
        <>
            <footer>
                <div className="containerFooter">
                    <div className='LinksR'>
                        <h3 className='LR'>Links Rápidos</h3>
                        <ul>
                            <ListItem title="Perguntas frequentes" linkTo='/' img=''/>
                            <ListItem title='SAC e Telefone' linkTo='/' img=''/>
                            <ListItem title='WhatsApp' linkTo='/' img=''/>
                            <ListItem title='Endereços' linkTo='/' img=''/>
                            <ListItem title='Ouvidoria' linkTo='/' img=''/>
                            <ListItem title='Canal de denúncias' linkTo='/' img=''/>
                            <ListItem title='Encontre um Corretor' linkTo='/' img=''/>
                        </ul>
                    </div>
                    <div className='icons'>
                            <a href="" className='logoporto' ><img src={logo} alt="Porto Seguro" /></a>
                        <div className='redes-sociais'>
                            <img src="img/instagram.png" alt="Instagram" />
                            <img src="img/tiktok.png" alt="Tiktok" />
                            <img src="img/facebook.png" alt="Facebook" />
                            <img src="img/youtube.png" alt="Youtube" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;