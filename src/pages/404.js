import React from "react"
import { graphql } from "gatsby"
import { Container, Content, FeatureImage } from "../components"
import { H1 } from "../elements"

//The 404 Page, takes parameter data
const notFound = ({ data }) => {
  const featureImage = data.imageSharp.fixed

  //Returns Container component and the children defined within the tag
  return (
    <Container>
      <FeatureImage fixed={featureImage} />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          Uh-oh... What you're looking for couldn't be found
        </H1>
      </Content>
    </Container>
  )
}

export default notFound

//Uses query to define the image path
export const notFoundQuery = graphql`
  query NotFoundQuery {
    imageSharp(fixed: { originalName: { eq: "sad-cat.jpg" } }) {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
