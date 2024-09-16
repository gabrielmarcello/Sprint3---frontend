import './Participantes.css'
function Participantes(){
    return(
        <>
        <body className='participantes'>
    <div className="containerPart">
        <a href="https://github.com/nicolasmeira5/Sprint3">GitHub Repository</a>
        
        <div className="member">
            <img src="img/leo.jpeg" alt="Leo Mota"/>
                <div className="info">
                    <p className="name">Leo Mota</p>
                    <p className="id">RM557851</p>
                    <p className="class">1TDSB</p>
                </div>
        </div>
        <div className="member">
            <img src="/img/gabs.jpeg" alt="Gabriel Freire"/>
            <div className="info">
                <p className="name">Gabriel Freire</p>
                <p className="id">RM556783</p>
                <p className="class">1TDSB</p>
            </div>
        </div>
        <div className="member">
            <img src="img/nicolas.jpg" alt="Nicolas Meira"/>
                <div className="info">
                    <p className="name">Nicolas Meira</p>
                    <p className="id">RM554464</p>
                    <p className="class">1TDSB</p>
                </div>
        </div>
    </div>
</body>
        </>
    )
}
export default Participantes