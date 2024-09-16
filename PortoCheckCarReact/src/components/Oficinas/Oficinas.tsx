import './Oficinas.css'
function Oficinas(){
    return(
        <>
        <p id="escrita">Para achar uma oficina proxima, clique em "ver mapa ampliado" no mapa</p>
        <div className="mapBox">
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14627.49165387726!2d-46.627298605532985!3d-23.57300740836732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1soficinas!5e0!3m2!1spt-BR!2sbr!4v1726065910661!5m2!1spt-BR!2sbr" width="100%" height="858px" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </>
    )
}
export default Oficinas
