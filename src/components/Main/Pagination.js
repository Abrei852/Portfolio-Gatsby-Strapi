import React from "react"
import { PaginationWrapper, PaginationElement } from "../../elements"
import {FaAngleDoubleRight, FaAngleDoubleLeft} from "react-icons/fa"

//The component for pagination and the parameters.
export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {

    //Returns the pagination wrapper and the children.
    return(

        //Checks where on the site we are to make the pagination work
        <PaginationWrapper isFirst={isFirst} isLast={isLast}>
            <PaginationElement to={prevPage}> <FaAngleDoubleLeft size={30}/> </PaginationElement>
            <PaginationElement to={nextPage}> <FaAngleDoubleRight size={30}/> </PaginationElement>
        </PaginationWrapper>
    )
}