import { useState } from "react";
import { Col, Row } from "reactstrap";
import CardsSignos from "../Cards/Cards_signos";
import PaginationBtn from "../Pagination btns/pagination";
import aries_img from '../../assets/imgs/aries.jpg';
import touro_img from '../../assets/imgs/touro.jpg';
import gemeos_img from '../../assets/imgs/gemeos.jpg';

export default function Listing(){
    const [list, setList] = useState([
        {idSigno:'1', image:aries_img, nameSigno:"", description:"Teste"},
        {idSigno:'2', image:touro_img, nameSigno:"", description:"Teste"},
        {idSigno:'3', image:gemeos_img, nameSigno:"", description:"Teste"},
    ]);
    const [currentPage, setCurrentPage] = useState(0);

    

    return(
        <>
            <section className='listing_box'>
                <Row className='box_aligner'>
                    <Col sm='1'>
                        <div className='pagination previous_btn'>
                            <PaginationBtn direction='left' modifyList={setList} currentList={list} changePage={setCurrentPage} verifierPage={currentPage} />
                        </div>
                    </Col>
                    <Col>
                        <div className='cards_box'>
                            <Row lg='3' md='2' sm='1'>
                                    {list.map((signo)=>{
                                        return(
                                            <Col key={signo.idSigno} className='cards_delimiter'>
                                                <CardsSignos image={signo.image} title={signo.nameSigno} subtitle='Teste' description={signo.description}/>
                                            </Col>
                                        );
                                    })}    
                            </Row>
                        </div>
                    </Col>
                    <Col sm='1'>
                        <div className='pagination next_btn'>
                            <PaginationBtn direction='right' modifyList={setList} currentList={list} changePage={setCurrentPage} verifierPage={currentPage}/>
                        </div>
                    </Col>
                </Row>
            </section>
            <style jsx>{`
                .listing_box{
                    margin-top:40px;
                    margin-bottom:40px;
                }
                .box_aligner{
                    align-items:center;
                }
            `}</style>
        </>
    );
}