import React from "react"
import { PostWrapper } from "../elements"

//The component for the Post.
export const Post = ({ children }) => {

  //Returns the post wrapper and its children
  return <PostWrapper>{children}</PostWrapper>
}
