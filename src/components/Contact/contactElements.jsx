import styled from 'styled-components'
import {Accent, Color, Background} from '../../styles/theme'

export const ContactWrapper = styled.div`
    & ::selection {
        background: ${Accent};
        color: ${Color};
    }
`
export const ContactForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${Color};
`
export const FormWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const TextLabel = styled.label`
    margin: 5px;
`
export const TextInput = styled.input`
    padding: 10px 15px;
    border: #222222 3px solid;
    min-width: 350px;
    margin: 5px 25px;
    background: ${Background};
    color: ${Color};
    outline: none;

    &:focus {
        border: ${Accent} 3px solid;
        box-shadow: 0px 3px 15px 0px #000000a6;
    }
`
export const MessageLabel = styled.label`
    margin: 5px;
`
export const TextArea = styled.textarea`
    padding: 10px 15px;
    border: #222222 3px solid;
    min-width: 350px;
    margin: 5px 25px;
    background: ${Background};
    color: ${Color};
    outline: none;

    &:focus {
        border: ${Accent} 3px solid;
        box-shadow: 0px 3px 15px 0px #000000a6;
    }
`
export const SubmitButton = styled.button`
    margin: 25px;
    background: #222222;
    width: 300px;
    height: 50px;
    color: white;
    border: solid 3px #2e2e3b;
    border-style: none;
    outline: none;
    box-shadow: 0px 4px 8px 1px #000000a6;

    &:hover {
        color: ${Accent};
        cursor: pointer;
    }
`
export const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;

    @media screen and ( max-width: 975px ) {
        flex-direction: column;

        ${TextArea} {
            width: 80%;
        }
    }
`
