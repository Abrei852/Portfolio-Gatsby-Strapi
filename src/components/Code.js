import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/vsDark"

//The Component for the code design in posts
export const Code = ({ codeString, language, ...props }) => {

  //Returns the highlight and the data and uses it to style the tags used for different codes
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="gatsby-highlight" data-language={language}>
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  )
}
