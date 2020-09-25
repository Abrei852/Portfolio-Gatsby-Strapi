import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FeatureImageWrapper } from "../elements"

//The component for the featureImage, takes fixed data as parameter
export const FeatureImage = ({ fixed }) => {

  //The query data which defines the image and uses the ImageShapr module
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "viggen.jpg" } }) {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)

  //Returns the FeatureImage wrapper.
  return (
    <FeatureImageWrapper>
      <Img
        fixed={fixed ? fixed : data.imageSharp.fixed}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </FeatureImageWrapper>
  )
}
