import React, { useState } from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { SendButton } from '../../styles/GlobalComponents/Button';
import { Box, Boxes, ContactInput, FirstInputs, FirstInputsInner, TextAreaInput, TextAreaInputContainer } from './ContactStyles';
import { validate } from './Validate';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [areThereErrors, setAreThereErrors] = useState(false);
  const [errors, setErrors] = useState({});
  const [formContent, setFormContent] = useState({
    name: '',
    email: 'cameron@camscott.me',
    userEmail: '',
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
      // Sends the email
      emailjs.send('service_p0l2p7i','template_cb83eyr', formContent, 'nThaiJ8fVwzHehtC0')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
          console.log('FAILED...', err);
        });
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
        Let's make those dreams come true
      </SectionText>
      <Boxes>
        <Box>
          { formSubmitted === true && success === true
            ? (
              <div style={{ borderRadius: '12px', background: '#ddbb85', padding: '2rem', marginBottom: '2rem' }}>
                <p>Message sent successfully :)</p>
              </div>
            )
            : null
          }
          { formSubmitted === true && areThereErrors === true
            ? (
              <div style={{ borderRadius: '12px', background: '#ddbb85', padding: '2rem', marginBottom: '2rem' }}>
                <p>There were some errors, please check them below :(</p>
              </div>
            )
            : null
          }
          <FirstInputs>
            <FirstInputsInner>
              <label style={{ marginRight: '1rem' }}>Name *</label>
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
                    <div style={{ marginBottom: '2rem' }}>
                      <small style={{ color: 'red', textAlign: 'center' }}>
                        {errors.name}
                      </small>
                    </div>
                  ) : null
              }
            </FirstInputsInner>
            <FirstInputsInner>
              <label style={{ marginRight: '1rem' }}>Email *</label>
              <ContactInput
                value={formContent.userEmail}
                type="email"
                id="userEmail"
                onChange={handleFormChange}
                disabled={formSubmitted}
              />
              {
                'email' in errors
                  ? (
                    <div style={{ marginBottom: '2rem' }}>
                      <small style={{ color: 'red', textAlign: 'center' }}>
                        {errors.email}
                      </small>
                    </div>
                  ) : null
              }
              {
                'emailFormat' in errors
                ? (
                  <div>
                    <small style={{ color: 'red', textAlign: 'center' }}>
                      {errors.emailFormat}
                    </small>
                  </div>
                ) : null
              }
            </FirstInputsInner>
          </FirstInputs>
          <FirstInputs>
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
              <label style={{ marginRight: '1rem' }}>Business Name</label>
              <ContactInput
                value={formContent.business}
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
