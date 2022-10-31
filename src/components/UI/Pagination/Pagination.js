import { PaginationStyle } from "./PaginationStyle";

import { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";

const dataFile = require("../../../db/data.json");

const Pagination = ({dataToUsePagination, onUpdateViewMembers, onUpdatePaginationView}) => {

    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 9;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(dataToUsePagination.length / usersPerPage);

    const displayUsers = dataToUsePagination.slice(pagesVisited, pagesVisited + usersPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    useEffect(() => {
        console.log("meu deus, preciso atualizar...")
        onUpdateViewMembers(displayUsers)
        onUpdatePaginationView(`Exibindo ${displayUsers.length} de ${dataToUsePagination.length}`)
    },[dataToUsePagination, pageNumber])

    return(
        <PaginationStyle>
            <ReactPaginate 
                previousLabel={<img src='images/icon/previous.svg' />}
                nextLabel={<img src='images/icon/next.svg' />}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledLinkClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </PaginationStyle>
    )
}

export default Pagination;