import React from "react";
import _ from "lodash"


export const Pagination = (prop) => {
    const { pageSize, itemCount, onPageChange, currentPage } = prop
    const number = Math.ceil(itemCount / pageSize);
    if (number === 1) {
        return null;
    }
    const pages = _.range(1, number + 1)
    console.log(currentPage)
    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                {
                    pages.map(el => (
                        <li class={"page-item" + (el === currentPage ? " active" : '')} onClick={() => onPageChange(el)}><a class="page-link" href="#">{el}</a></li>
                    ))
                }
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    )
}