import styled from 'styled-components';

export const ContactWrapper = styled.div`

`
export const ContactForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    border: #2e2e3b 2px solid;
    min-width: 300px;
    margin: 5px 25px;
    outline: none;
`
export const MessageLabel = styled.label`
    margin: 5px;
`
export const TextArea = styled.textarea`
    padding: 10px 15px;
    border: #2e2e3b 2px solid;
    min-width: 300px;
    margin: 5px 25px;
    outline: none;
`
export const SubmitButton = styled.button`
    margin: 25px;
    background: #222222;
    width: 300px;
    height: 50px;
    color: white;
    border-style: none;
    outline: none;
    box-shadow: 0px 1px 8px 0px #bebebe;

    &:hover {
        color: #e6b82f;
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