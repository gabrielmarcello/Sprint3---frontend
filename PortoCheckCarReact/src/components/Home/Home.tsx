import './Home.css'
function Home(){
    return(
        <>
        <section className='banner'>
            <div className="content">
                <div className='title'>
                    <h1>Conheça o site que protege o seu carro!</h1>
                    
                </div>
                <div className="image">
                    <img src="img/guincho.jpeg"/>
                </div>
            </div>
        </section>
            <div className='informacoes'>
                <div className="about">
                    <div className="sub-title">
                        <h2>Prático e rápido</h2>
                    </div>
                    <div className="text">
                        <h3>O Porto Check Car é ideal para você que busca praticidade e segurança no cuidado do seu carro. Com tecnologia avançada, ele faz um autodiagnóstico completo, identificando falhas mecânicas, elétricas ou estruturais, garantindo uma manutenção preventiva rápida e precisa.</h3>
                    </div>
                </div>
                <div className="about">
                    <div className="sub-title">
                        <h2>Qualidade e pontualidade</h2>
                    </div>
                    <div className="text">
                        <h3>Nossa rede de especialistas altamente capacitados garante o melhor atendimento e suporte técnico para você. Com precisão e eficiência, cuidamos do diagnóstico e reparo do seu carro, para que você tenha mais tempo para focar no que realmente importa. Confie na Porto Check Car para oferecer a manutenção com a qualidade e segurança que seu veículo merece.</h3>
                    </div></div>
                <div className="about">
                    <div className="sub-title">
                        <h2>Nossos clientes</h2>
                    </div>
                    <div className="text">
                        <h3>Grandes empresas multinacionais confiam na Porto Check Car para garantir a segurança e eficiência de suas frotas. Combinando expertise e tecnologia de ponta, oferecemos soluções personalizadas e de alta qualidade. Nossa rede de especialistas mantém os veículos de nossos clientes em perfeito estado, reforçando nosso compromisso com excelência e resultados eficientes para negócios de todos os tamanhos.</h3>
                    </div></div>
                <div className="about">
                    <div className="sub-title">
                        <h2>Serviços de conveniência</h2>
                    </div>
                    <div className="text">
                        <h3>Garantimos rapidez e qualidade na instalação dos seus bens, com total eficiência e atenção aos detalhes. Nossos especialistas realizam o serviço de forma ágil, sem comprometer a segurança. Com profissionais e equipamentos de ponta, asseguramos uma instalação correta e funcional. Confie na nossa expertise para um resultado impecável, sempre dentro do prazo.</h3>
                    </div></div>
            </div>
        </>
    )
}
export default Home;