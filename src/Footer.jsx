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
    font-size: 20px;
`

const Footer = () => {
    return (
        <StyledDiv >
            <StyledText>Hecho por Sara Bermudez Alvarez | Copyright 2021</StyledText>
        </StyledDiv>
    )
}

export default Footer
