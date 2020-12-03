import styled from 'styled-components'
import {Color, Accent} from '../../styles/theme'

export const ProjectsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 80%;
    align-items: center;
    justify-content: center;
    margin: 50px 0px;

    & a {
        margin: 35px;
    }

    & ::selection {
        background: ${Accent};
        color: ${Color};
    }

    @media screen and (max-width: 1675px) {
        width: 100%;
    }
`
