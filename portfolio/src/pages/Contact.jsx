
import styled from 'styled-components';
import axios from 'axios';
import { useState, useRef, useEffect, useContext } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import { NavbarContext } from '../components/NavbarContext'; 

export default function Contact() {

  const { setIsInContact } = useContext(NavbarContext); 

  const contactRef = useRef(null);
  const isVisible = useOnScreen(contactRef);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  
  useEffect(() => {
    if (setIsInContact) { 
      setIsInContact(isVisible);
    }
  }, [isVisible, setIsInContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await axios.post(
        'https://formspree.io/f/YOUR_FORM_ID',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      console.error(error);
    }
  };

  return (
    <ContactContainer ref={contactRef}>
      <SeparatorSection>
        <SeparatorLine />
        <LogoContainer>
          <img src="./src/images/logo.png" alt="logo" />
        </LogoContainer>
        <SeparatorLine />
      </SeparatorSection>

      <Title>Contact Us</Title>

      <ContactContent>
        <FormContainer>
          <FormWrapper onSubmit={handleSubmit}>
            <InputGroup>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <TextArea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></TextArea>
            <SubmitButton type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            {status === 'success' && <SuccessMessage>✅ Message sent successfully!</SuccessMessage>}
            {status === 'error' && <ErrorMessage>❌ Something went wrong. Please try again.</ErrorMessage>}
          </FormWrapper>
        </FormContainer>

        <InfoContainer>
          <InfoItem>
            <InfoIcon>📍</InfoIcon>
            <span>123 Business St, Tech City, TC 12345</span>
          </InfoItem>
          <InfoItem>
            <InfoIcon>📞</InfoIcon>
            <span>+1 (123) 456-7890</span>
          </InfoItem>
          <InfoItem>
            <InfoIcon>✉️</InfoIcon>
            <span>contact@saascuy.com</span>
          </InfoItem>
        </InfoContainer>
      </ContactContent>
      <Footer />
    </ContactContainer>
  );
}


const ContactContainer = styled.div`
  min-height: 100vh;
  background: #000;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
  scroll-margin-top: 80px; /* Asegura que el scroll a esta sección deje espacio para el navbar fijo */
  /* Añade padding-bottom para dejar espacio al footer fijo si es necesario */
  padding-bottom: 80px; /* Ajusta este valor si tu footer es más alto */
`;

const SeparatorSection = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  position: relative;
`;

const SeparatorLine = styled.div`
  flex: 1;
  height: 2px;
  background: linear-gradient(to right, transparent, white, transparent);
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  &::before {
    left: 10%;
  }

  &::after {
    right: 10%;
  }
`;

const LogoContainer = styled.div`
  margin: 0 2rem;
  padding: 1rem;
  border: 3px solid white;
  border-radius: 50%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  min-height: 100px;

  img {
    width: 60px;
    height: 60px;
    filter: brightness(0) invert(1);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 0.1em;
  margin-bottom: 3rem;
  text-align: center;
  color: white;
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  width: 100%;
  max-width: 1100px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  max-width: 600px;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  background: #1a1a1a;
  color: white;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  background: #1a1a1a;
  color: white;
  resize: vertical;
  min-height: 150px;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 25px;
  background: #4f7df3;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #3c6ed5;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(79, 125, 243, 0.4);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 400px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
`;

const InfoIcon = styled.span`
  font-size: 1.5rem;
`;
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SuccessMessage = styled.p`
  color: #4caf50;
  font-weight: bold;
  margin-top: -1rem;
`;

const ErrorMessage = styled.p`
  color: #f44336;
  font-weight: bold;
  margin-top: -1rem;
`;