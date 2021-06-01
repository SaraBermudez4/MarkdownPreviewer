import { Text } from '@chakra-ui/layout'
import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    background:#49519A;
    height: 60px;
    padding: 10px;
`

const StyledText = styled(Text)`
    color:white;
`

const NabBar = () => {
    return (
        <StyledDiv >
            <StyledText fontSize="3xl">Markdown Preview</StyledText>
        </StyledDiv>
    )
}

export default NabBar
