import React, { useState } from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { SendButton } from '../../styles/GlobalComponents/Button';
import { Box, Boxes, ContactInput, FirstInputs, FirstInputsInner, TextAreaInput, TextAreaInputContainer } from './ContactStyles';
import { validate } from './Validate';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [areThereErrors, setAreThereErrors] = useState(false);
  const [errors, setErrors] = useState({});
  const [formContent, setFormContent] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleFormChange = (e) => {
    const id = e.target.id
    const value = e.target.value
  
    setFormContent({
      ...formContent,
      [id]: value
    })
  }

  const validateForm = (formContent) => {
    setFormSubmitted(true);
    
    const validateFields = validate(formContent);

    if (Object.keys(validateFields).length === 0) {
      setSuccess(true);
      setErrors({})
      setAreThereErrors(false);
      setFormContent({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    } else {
      setSuccess(false);
      setErrors(validate(formContent))
      setAreThereErrors(true);
      setFormSubmitted(false);
    }
  }

  return (
    <Section id="contact">
      <SectionTitle>Contact</SectionTitle>
      <SectionText>
        Just do it, make your dreams come true.
      </SectionText>
      <Boxes>
        <Box>
          { formSubmitted === true && success === true
            ? (
              <div style={{ borderRadius: '12px', background: 'linear-gradient(to right, #209941, #38FC6D)', padding: '2rem', marginBottom: '2rem' }}>
                <p>Message sent successfully :)</p>
              </div>
            )
            : null
          }
          { formSubmitted === true && areThereErrors === true
            ? (
              <div style={{ borderRadius: '12px', background: 'linear-gradient(to right, #993520, #FF5733)', padding: '2rem', marginBottom: '2rem' }}>
                <p>There were some errors, please check them below :(</p>
              </div>
            )
            : null
          }
          <FirstInputs>
            <FirstInputsInner>
              <label style={{ marginRight: '1rem' }}>Name</label>
              <ContactInput
                value={formContent.name}
                type="text"
                id="name"
                onChange={handleFormChange}
                disabled={formSubmitted}
              />
              {
                'name' in errors
                  ? (
                    <div>
                      <small style={{ color: 'red', textAlign: 'center', marginLeft: '8rem' }}>
                        {errors.name}
                      </small>
                    </div>
                  ) : null
              }
            </FirstInputsInner>
            <FirstInputsInner>
              <label style={{ marginRight: '1rem' }}>Email</label>
              <ContactInput
                value={formContent.email}
                type="email"
                id="email"
                onChange={handleFormChange}
                disabled={formSubmitted}
              />
              {
                'email' in errors
                  ? (
                    <div>
                      <small style={{ color: 'red', textAlign: 'center', marginLeft: '8rem' }}>
                        {errors.email}
                      </small>
                    </div>
                  ) : null
              }
              {
                'emailFormat' in errors
                ? (
                  <div>
                    <small style={{ color: 'red', textAlign: 'center', marginLeft: '8rem' }}>
                      {errors.emailFormat}
                    </small>
                  </div>
                ) : null
              }
            </FirstInputsInner>
            <FirstInputsInner>
              <label style={{ marginRight: '1rem' }}>Phone</label>
              <ContactInput
                value={formContent.phone}
                type="tel"
                id="phone"
                onChange={handleFormChange}
                disabled={formSubmitted}
              />
            </FirstInputsInner>
          </FirstInputs>
          <FirstInputs style={{ marginTop: '1.5rem'}}>
            <FirstInputsInner>
              <label style={{ marginRight: '1rem' }}>Company</label>
              <ContactInput
                value={formContent.phone}
                type="tel"
                id="phone"
                onChange={handleFormChange}
                disabled={formSubmitted}
              />
            </FirstInputsInner>
            <FirstInputsInner>
              <label style={{ marginRight: '1rem' }}>Phone</label>
              <ContactInput
                value={formContent.phone}
                type="tel"
                id="phone"
                onChange={handleFormChange}
                disabled={formSubmitted}
              />
            </FirstInputsInner>
            <FirstInputsInner>
              <label style={{ marginRight: '1rem' }}>Phone</label>
              <ContactInput
                value={formContent.phone}
                type="tel"
                id="phone"
                onChange={handleFormChange}
                disabled={formSubmitted}
              />
            </FirstInputsInner>
          </FirstInputs>
          <TextAreaInputContainer>
            <label style={{ marginRight: '1rem' }}>Message</label>
            <TextAreaInput
              value={formContent.message}
              rows="4"
              id="message"
              onChange={handleFormChange}
              disabled={formSubmitted}
            />
          </TextAreaInputContainer>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem' }}>
            <SendButton onClick={() => {validateForm(formContent)}} disabled={formSubmitted}>Send Message</SendButton>
          </div>
        </Box>
      </Boxes>
    </Section>
  )
};

export default Contact;
