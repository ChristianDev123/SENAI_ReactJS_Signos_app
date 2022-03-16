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

// informações retiradas da wikipedia:
export default function Listing(){
    const [list, setList] = useState([
        {image:aries_img, nameSigno:"Áries", description:"Áries ou Carneiro é o primeiro signo astrológico do zodíaco, situado entre Peixes e Touro e associado à constelação de Aries. Seu símbolo é um carneiro. Forma com Leão e Sagitário a triplicidade dos signos do Fogo. É também um dos quatro cardinais, juntamente com Câncer/Caranguejo, Libra/Balança e Capricórnio. Com pequenas variações nas datas dependendo do ano, os arianos/carneiros são as pessoas nascidas entre 21 de março e 20 de abril."},
        {image:touro_img, nameSigno:"Touro", description:"Touro ou Tauros é o segundo signo astrológico do zodíaco, situado entre Áries e Gêmeos e associado à constelação de Taurus. Seu símbolo é um touro. Forma com Virgem e Capricórnio a triplicidade dos signos da Terra. É também um dos quatro signos fixos, juntamente com Leão, Escorpião e Aquário. Com pequenas variações nas datas dependendo do ano, os taurinos são as pessoas nascidas entre 21 de abril e 20 de maio."},
        {image:gemeos_img, nameSigno:"Gemeos", description:"Gêmeos ou Gémeos, ou ainda Gemini, é o terceiro signo astrológico do zodíaco, situado entre Touro e Câncer/Caranguejo e associado à constelação de Gemini. Seu símbolo são os irmãos gêmeos/gémeos. Forma com Libra/Balança e Aquário a triplicidade dos signos do Ar. É também um dos quatro signos mutáveis, juntamente com Virgem, Sagitário e Peixes. Com pequenas variações nas datas dependendo do ano, os geminianos e geminianas são as pessoas nascidas entre 21 de Maio e 20 de Junho."},
        {image:aquario_img, nameSigno:"Aquário", description:"Aquário é o décimo primeiro signo astrológico do zodíaco, situado entre Capricórnio e Peixes e associado à constelação de Aquarius. Seu símbolo é o aguadeiro. Forma com Gêmeos e Libra a triplicidade dos signos do Ar. É também um dos quatro signos fixos, juntamente com Touro, Leão e Escorpião. Com pequenas variações nas datas dependendo do ano, os aquarianos e aquarianas são as pessoas nascidas entre 21 de janeiro e 19 de fevereiro."},
        {image:cancer_img, nameSigno:"Câncer", description:"Câncer ou Caranguejo é o quarto signo astrológico do zodíaco, situado entre Gêmeos/Gémeos e Leão e associado à constelação de Cancer. Seu símbolo um caranguejo. Forma com Escorpião e Peixes a triplicidade dos signos da Água. É também um dos quatro cardinais, juntamente com Áries/Carneiro, Libra/Balança e Capricórnio. Com pequenas variações nas datas dependendo do ano, os cancerianos são as pessoas nascidas entre 21 de Junho e 22 de Julho."},
        {image:capricornio_img, nameSigno:"Capricórnio", description:"Capricórnio é o décimo signo astrológico do zodíaco, situado entre Sagitário e Aquário e associado à constelação de Capricornus. Seu símbolo é uma cabra. Forma com Touro e Virgem a triplicidade dos signos da Terra. É também um dos quatro signos cardinais, juntamente com Áries, Câncer e Libra. Com pequenas variações nas datas dependendo do ano, os capricornianos são as pessoas nascidas entre 22 de dezembro e 20 de janeiro."},
        {image:escorpiao_img, nameSigno:"Escorpião", description:"Escorpião é o oitavo signo astrológico do Zodíaco, originário da constelação de Scorpius. Ele mede 210 ° –240 ° de longitude eclíptica. Sob o zodíaco tropical (mais usado na astrologia ocidental), o Sol transita em média entre 23 de outubro e 22 de novembro. Sob o zodíaco sideral (mais comumente usado na astrologia hindu), o Sol está em Escorpião de aproximadamente 16 de novembro a 15 de dezembro. Dependendo do sistema zodíaco usado, um indivíduo nascido sob a influência deste signo pode ser chamado de 'escorpião' ou 'escorpiano'."},
        {image:leao_img, nameSigno:"Leão", description:"Leão ou Leo é o quinto signo astrológico do zodíaco, situado entre Câncer/Caranguejo e Virgem e associado à constelação de Leo. Seu símbolo é um leão. Forma com Áries/Carneiro e Sagitário a triplicidade dos signos do Fogo. É também um dos quatro signos fixos, juntamente com Touro, Escorpião e Aquário. Com pequenas variações nas datas dependendo do ano, os leoninos e leoninas são as pessoas nascidas entre 22 de Julho e 23 de Agosto."},
        {image:libra_img, nameSigno:"Libras", description:"Libra ou Balança é o sétimo signo astrológico do zodíaco, situado entre Virgem e Escorpião e associado à constelação de Libra. Seu símbolo é uma balança. Forma com Gêmeos/Gémeos e Aquário a triplicidade dos signos do Ar. É também um dos quatro signos cardinais, juntamente com Áries/Carneiro, Câncer/Caranguejo e Capricórnio. Com pequenas variações nas datas dependendo do ano, os librianos e librianas são as pessoas nascidas entre 23 de setembro e 22 de outubro."},
        {image:peixes_img, nameSigno:"Peixes", description:"Peixes ou Piscis é o décimo segundo, e último signo astrológico do zodíaco, situado entre Aquário e Áries e associado à constelação de Pisces. Seu símbolo são dois peixes. Forma com Câncer e Escorpião a triplicidade dos signos da Água. É também um dos quatro signos mutáveis, juntamente com Gêmeos, Virgem e Sagitário. Com pequenas variações nas datas dependendo do ano, os piscianos são as pessoas nascidas entre 20 de Fevereiro e 20 de Março."},
        {image:sargitario_img, nameSigno:"Sargitário", description:"Sagitário é o nono signo astrológico do zodíaco, situado entre Escorpião e Capricórnio e associado à constelação de Sagittarius. Seu símbolo é o centauro. Forma com Áries e Leão a triplicidade dos signos do Fogo. É também um dos quatro signos mutáveis, juntamente com Gêmeos, Virgem e Peixes. Com pequenas variações nas datas dependendo do ano, os sagitarianos e sagitarianas são as pessoas nascidas entre 22 de novembro e 21 de dezembro."},
        {image:virgem_img, nameSigno:"Virgem", description:"Virgem ou Virgo é o sexto signo astrológico do zodíaco, situado entre Leão e Libra e associado à constelação de Virgo. Seu símbolo é uma virgem. Forma com Touro e Capricórnio a triplicidade dos signos da Terra. É também um dos quatro signos mutáveis, juntamente com Gêmeos/Gémeos, Sagitário e Peixes. Com pequenas variações nas datas dependendo do ano, os virginianos e virginianas são as pessoas nascidas entre 23 de agosto e 22 de setembro."},
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