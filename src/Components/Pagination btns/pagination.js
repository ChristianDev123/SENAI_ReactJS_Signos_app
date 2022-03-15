import { useEffect, useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import aries_img from '../../assets/imgs/aries.jpg';
import touro_img from '../../assets/imgs/touro.jpg';
import gemeos_img from '../../assets/imgs/gemeos.jpg';

export default function PaginationBtn(props){
    const [disLeft, setDisLeft] = useState(true);
    const [disRight, setDisRight] = useState(false);

    const infos_list = [
        {idSigno:'4', image:aries_img, nameSigno:"", description:"Teste"},
        {idSigno:'5', image:touro_img, nameSigno:"", description:"Teste"},
        {idSigno:'6', image:gemeos_img, nameSigno:"", description:"Teste"},
    ]

    useEffect(()=>{
        if(props.verifierPage === 0){
            setDisLeft(true);
        }else if(props.verifierPage === 12){
            setDisRight(true);
        }else{
            setDisLeft(false);
            setDisRight(false);
        }
    },[props.verifierPage]);

    function changeList(direction){
        props.modifyList([]);
        const currentPage = props.verifierPage;
        if(direction === "right"){
            console.log('direita')
        //     for(let i = currentPage + 3; i > currentPage; i--){
        //         // setList(...list,infos_list[i-1]);
            // }
        }else{
            console.log('esquerda')
            for(let i = currentPage - 3; i < currentPage; i++){
                const object_signo =infos_list[i];
                props.modifyList(...props.currentList,object_signo[i]);
            }
        }
        
    }

    return(
        <>
            <Pagination size="lg">
                {props.direction === 'left'
                ?
                    <PaginationItem disabled={disLeft} onClick={()=>{
                        if(!disLeft){
                            changeList("left");
                            props.changePage(props.verifierPage - 3);
                        }
                    }}>
                        <PaginationLink previous={true}/>
                    </PaginationItem>
                :
                    <PaginationItem disabled={disRight} onClick={()=>{
                        if(!disRight){
                            changeList("right");
                            props.changePage(props.verifierPage + 3);
                        }
                    }}>
                        <PaginationLink next={true}/>
                    </PaginationItem>
                }
            </Pagination>
            <style jsx>{`

            `}</style>
        </>
    );
}