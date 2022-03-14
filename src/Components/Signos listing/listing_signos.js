import { useState } from "react";
import CardsSignos from "../Cards/Cards_signos";
import PaginationBtn from "../Pagination btns/pagination";

export default function Listing(){
    const [list, setList] = useState([{image:"", nameSigno:"", description:""}]);
    return(
        <>
            <section className='listing_box'>
                <div className='pagination behind_btn'>
                    <PaginationBtn />
                </div>
                <div className='cards_box'>
                    {list.map((signo)=>{
                        return(
                            <CardsSignos />
                        );
                    })}
                </div>
                <div className='pagination foward_btn'>
                    <PaginationBtn />
                </div>
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