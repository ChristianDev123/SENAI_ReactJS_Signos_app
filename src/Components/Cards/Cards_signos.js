import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Container } from 'reactstrap';

export default function CardsSignos(props){
    return(
        <>
            <Container className='Card_signo'>
                <Card>
                    <CardImg 
                        alt=""
                        src={props.image}
                        top={true}
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag='h2'>
                            {props.title}
                        </CardTitle>
                        <CardSubtitle>
                            {props.subtitle}
                        </CardSubtitle>
                        <CardText>
                            {props.description}
                        </CardText>
                    </CardBody>
                </Card>
            </Container>
            <style jsx>{`
            
            `}</style>
        </>
    );
}