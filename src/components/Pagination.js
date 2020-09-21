import React from "react"
import { PaginationWrapper, PaginationElement } from "../elements"
import {FaAngleDoubleRight, FaAngleDoubleLeft} from "react-icons/fa"

export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
    return(
        <PaginationWrapper isFirst={isFirst} isLast={isLast}>
            <PaginationElement to={prevPage}> <FaAngleDoubleLeft size={30}/> </PaginationElement>
            <PaginationElement to={nextPage}> <FaAngleDoubleRight size={30}/> </PaginationElement>
        </PaginationWrapper>
    )
}