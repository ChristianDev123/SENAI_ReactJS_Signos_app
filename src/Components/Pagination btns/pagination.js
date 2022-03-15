import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export default function PaginationBtn(props){
    return(
        <>
            <Pagination size="lg">
                <PaginationItem>
                {props.direction === 'left'
                ?
                    <PaginationLink previous={true}/>
                        
                :
                    <PaginationLink next={true} />
                }
                </PaginationItem>
            </Pagination>
            <style jsx>{`
                
            `}</style>
        </>
    );
}