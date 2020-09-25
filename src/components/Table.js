import React from "react"
import { TableWrapper } from "../elements"

//The component for the table
export const Table = ({ children }) => {

  //Returns the Tablewrapper and its children
  return (
    <TableWrapper>
      <table>{children}</table>
    </TableWrapper>
  )
}