import { Col, Container, Row } from "reactstrap";

export default function Footer(){
    return(
        <>
            <Container fluid={true} className='container_box' >
                <Row>
                    <Col>
                        <Container>
                            <div className='contacts_dev content_footer'>
                                Contatos
                                <ul>
                                    <li>* Senai Suiço-Brasileira</li>
                                    <li>Desenvolvedor: Christian Lima Santana</li>
                                    <li>Grupo: TekCoders</li>
                                    <li>Repositório Projeto: <a href="https://github.com/ChristianDev123/SENAI-_Signos_app/tree/main">Repositório Main</a></li>
                                </ul>
                            </div>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <div className='tools_page content_footer'>
                                <h3>Ferramentas </h3>
                                <ul>
                                    <li><span className='origin_info'>(Informações retiradas da wikipedia)</span></li>
                                    <li>ReactJs (yarn)</li>
                                    <li>Bootstrap (Reactstrap)</li>
                                </ul>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <style jsx>{`
                .container_box{
                    text-align:center;
                    background:#340B66;
                    padding:10px;
                    color:white;
                }
                .container_box a{
                    color:white;
                }
                .container_box ul{
                    list-style:none; 
                }
                .container_box .tools_page span.origin_info{
                    font-weight:bold;
                    font-size:28px;
                }
                .container_box .content_footer{
                    font-size:22px;
                }
            `}</style>
        </>
    );
}