import { useState } from "react";
import { Col, Row } from "reactstrap";
import CardsSignos from "../Cards/Cards_signos";
import PaginationBtn from "../Pagination btns/pagination";
import aries_img from '../../assets/imgs/aries.jpg';
import touro_img from '../../assets/imgs/touro.jpg';
import gemeos_img from '../../assets/imgs/gemeos.jpg';

export default function Listing(){
    const [list, setList] = useState([
        {image:aries_img, nameSigno:"", description:"Teste"},
        {image:touro_img, nameSigno:"", description:"Teste"},
        {image:gemeos_img, nameSigno:"", description:"Teste"}
    ]);

    return(
        <>
            <section className='listing_box'>
                <Row>
                    <Col sm='1'>
                        <div className='pagination behind_btn'>
                            <PaginationBtn direction='left' />
                        </div>
                    </Col>
                    <Col>
                        <div className='cards_box'>
                            <Row lg='3' md='2' sm='1'>
                                    {list.map((signo)=>{
                                        return(
                                            <Col key='1' className='cards_delimiter'>
                                                <CardsSignos image={signo.image} title={signo.nameSigno} subtitle='Teste' description={signo.description}/>
                                            </Col>
                                        );
                                    })}    
                            </Row>
                        </div>
                    </Col>
                    <Col sm='1'>
                        <div className='pagination foward_btn'>
                            <PaginationBtn direction='right' />
                        </div>
                    </Col>
                </Row>
            </section>
            <style jsx>{`
                .listing_box{
                    margin-top:40px;
                    margin-bottom:40px;
                }
            `}</style>
        </>
    );
}