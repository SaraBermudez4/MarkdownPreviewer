import { Container } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea'
import { Heading } from "@chakra-ui/react"
import marked from 'marked'
import React, { useState } from 'react'
import styled from 'styled-components'

const initialState = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png)
`;

const StyledTextArea = styled(Textarea)`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');
    font-family: 'Roboto Mono', monospace;
    font-size: 15px;
    height: 100vh !important;
`

const StyledContainer = styled(Container)`
    background:white;
 
 
`

const StyledDiv = styled.div`
    padding-left: 20px;
    padding-right: 20px;
`

const Editor = () => {
    const [text, setMarkdow] = useState(initialState)

    const handleInputChange = (e) => {
        let inputValue = e.target.value
        setMarkdow(inputValue)
    }

    const markdown = marked(text, { breaks: true })

    return (
        <StyledContainer>
            <Heading mb="5">Markdown</Heading>
            <StyledTextArea
                mb="8px"
                type='text'
                value={text}
                name='text'
                onChange={handleInputChange}
                placeholder="Here is a sample placeholder"
                size="sm"
                id="editor"
                width="100%"
            />

            <Heading mb="5">Previewer</Heading>
            <StyledDiv id="preview" className="preview" dangerouslySetInnerHTML={{ __html: markdown }} width="120%" />
        </StyledContainer>
    )
}

export default Editor
