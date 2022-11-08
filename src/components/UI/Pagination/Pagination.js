import { PaginationStyle } from "./PaginationStyle";

import Card from "../Card/Card";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({dataToUsePagination, onUpdatePaginationView}) => {

    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 9;
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(dataToUsePagination.length / usersPerPage);

    const displayUsers = dataToUsePagination.slice(pagesVisited, pagesVisited + usersPerPage);

    const changePage = ({selected}) => setPageNumber(selected);

    useEffect(() => {
        return displayUsers.length !== usersPerPage ? onUpdatePaginationView(true, displayUsers.length) : onUpdatePaginationView(false, usersPerPage)
    },[dataToUsePagination, pageNumber])

    return(
        <PaginationStyle>
            <section className="list-cards-members">
                {displayUsers.map((data, index) => (
                    <Card dataCard={data} key={index} />
                ))}
            </section>

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