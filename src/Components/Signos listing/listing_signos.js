import { useState } from "react";
import { Col, Row } from "reactstrap";
import CardsSignos from "../Cards/Cards_signos";
import aries_img from '../../assets/imgs/aries.jpg';
import touro_img from '../../assets/imgs/touro.jpg';
import gemeos_img from '../../assets/imgs/gemeos.jpg';
import aquario_img from "../../assets/imgs/aquario.jpg";
import cancer_img from "../../assets/imgs/cancer.jpg";
import capricornio_img from "../../assets/imgs/capricornio.jpg";
import escorpiao_img from "../../assets/imgs/escorpiao.jpg";
import leao_img from "../../assets/imgs/leao.jpg";
import libra_img from "../../assets/imgs/libra.jpg";
import peixes_img from "../../assets/imgs/peixes.jpg";
import sargitario_img from "../../assets/imgs/sargitario.jpg";
import virgem_img from "../../assets/imgs/virgem.jpg";


export default function Listing(){
    const [list, setList] = useState([
        {image:aries_img, nameSigno:"Áries", description:"Teste"},
        {image:touro_img, nameSigno:"Touro", description:"Teste"},
        {image:gemeos_img, nameSigno:"Gemeos", description:"Teste"},
        {image:aquario_img, nameSigno:"Gemeos", description:"Teste"},
        {image:cancer_img, nameSigno:"Gemeos", description:"Teste"},
        {image:capricornio_img, nameSigno:"Gemeos", description:"Teste"},
        {image:escorpiao_img, nameSigno:"Gemeos", description:"Teste"},
        {image:leao_img, nameSigno:"Gemeos", description:"Teste"},
        {image:libra_img, nameSigno:"Gemeos", description:"Teste"},
        {image:peixes_img, nameSigno:"Gemeos", description:"Teste"},
        {image:sargitario_img, nameSigno:"Gemeos", description:"Teste"},
        {image:virgem_img, nameSigno:"Gemeos", description:"Teste"},
    ]);

    return(
        <>
            <section className='listing_box'>
                <div className='cards_box'>
                    <Row lg='3' md='2' sm='1'>
                         {list.map((signo)=>{
                            return(
                                <Col key={signo.idSigno} className='cards_delimiter'>
                                    <CardsSignos image={signo.image} title={signo.nameSigno} description={signo.description}/>
                                 </Col> 
                            );
                         })} 
                    </Row>
                </div>
            </section>
            <style jsx>{`
                .listing_box{
                    margin-top:40px;
                    margin-bottom:40px;
                }
                .box_aligner{
                    align-items:center;
                }
                .cards_delimiter{
                    padding:10px;
                }
            `}</style>
        </>
    );
}