import { Container } from "reactstrap";

export default function Header(){
    return(
        <>
            <Container fluid={true} className='header_box'>
                <div className='logo_project'>
                    Signos
                </div>
            </Container>
            <style jsx>{`
                .header_box{
                    background: #6402DB;
                    color:white;
                    align-items:center;
                    text-align:center; 
                    padding:10px;
                }
                .header_box .logo_project{
                    font-size:30px;
                }
            `}</style>
        </>
    );
}