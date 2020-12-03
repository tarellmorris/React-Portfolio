import React from 'react'
import SectionBanner from '../Common/SectionBanner'
import {
    ContactWrapper,
    ContactForm,
    InputWrapper,
    FormWrap,
    TextLabel,
    TextInput,
    MessageLabel,
    TextArea,
    SubmitButton
} from './contactElements'
import emailjs, { init } from 'emailjs-com'

const ContactContainer = () => {
    init("user_6VKRCGCfIAdJ46lJVOgiF")
    const title = 'Want to chat?'

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_4m458vl', 'template_du85x4n', e.target, 'user_6VKRCGCfIAdJ46lJVOgiF');

        e.target.reset()

        alert('Message sent')
    }

    return (
            <ContactWrapper id="Contact">
                <SectionBanner sectionTitle={title}>
                    <ContactForm onSubmit={handleSubmit}>
                        <InputWrapper>
                            <FormWrap>
                                <TextLabel>
                                    Full name
                                </TextLabel>
                                <TextInput 
                                placeholder="Who are you?"
                                required
                                type="text"
                                name="name"
                                />
                                <TextLabel>
                                    Email address
                                </TextLabel>
                                <TextInput 
                                placeholder="How do I reach you?"
                                required
                                type="email"
                                name="email"
                                />
                            </FormWrap>
                            <FormWrap>
                                <MessageLabel>
                                    Type your message here
                                </MessageLabel>
                                <TextArea 
                                placeholder="What's on your mind?"
                                required
                                cols="50" rows="10"
                                type="text"
                                name="message"
                                />
                            </FormWrap>
                        </InputWrapper>
                        <SubmitButton>
                            Send
                        </SubmitButton>
                    </ContactForm>
                </SectionBanner>
            </ContactWrapper>
    )
}

export default ContactContainer
