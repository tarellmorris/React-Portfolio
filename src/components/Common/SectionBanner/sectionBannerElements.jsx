import styled from 'styled-components'
import {Background, Color} from '../../../styles/theme'

export const SectionContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px 25px;
    min-height: 300px;
    background: ${Background};
    box-shadow: 0px 4px 20px 2px #000000a6;
`
export const TitleWrapper = styled.div`
    text-align: center;
`
export const SectionTitle = styled.h3`
    font-size: 40px;
    font-weight: 500;
    color: ${Color};
`