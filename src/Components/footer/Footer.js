import { Col, Container, Row } from "reactstrap";

export default function Footer(){
    return(
        <>
            <Container fluid={true} className='container_box' >
                <Row>
                    <Col>
                        <Container>
                            <div className='contacts_dev content_footer'>
                                Contacts
                            </div>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <div className='tools_page content_footer'>
                                Tools
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
                .container_box .content_footer{
                    font-size:30px;
                }
            `}</style>
        </>
    );
}