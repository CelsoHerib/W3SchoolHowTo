import styled from 'styled-components';

export default function Testimonials() {
  return (
    <TestimonialsContainer>
      <SeparatorSection>
        <SeparatorLine />
        <LogoContainer>
          <img src="./src/images/logo.png" alt="logo" />
        </LogoContainer>
        <SeparatorLine />
      </SeparatorSection>

      <Title>What They Say</Title>

      <TestimonialsGrid>
        <TestimonialItem>
          <Avatar>
            <img src="./src/images/chris.jpg" alt="Mia Kenric" />
          </Avatar>
          <TestimonialCard color="#4f7df3">
           
          
              I love Saascuy. Your services helped locate the press contacts I make a breast cancer awareness video did we go viral. We were able to spread the word.
        
            <AuthorInfo>
              <Name>Chis Kenric</Name>
              <Position>CEO at Mighty Schools</Position>
            </AuthorInfo>
          </TestimonialCard>
        </TestimonialItem>

        <TestimonialItem>
          <Avatar>
            <img src="./src/images/rebecca.png" alt="Rebecca Flex" />
          </Avatar>
          <TestimonialCard color="#e63b8f">

          
              The knowledge that the use of face masks delays Covid-19 transmissions. We need guidance on how masks should be used by the public to fight pandemic crises.
            <AuthorInfo>
              <Name>Rebecca Flex</Name>
              <Position>CEO at Company</Position>
            </AuthorInfo>
          </TestimonialCard>
        </TestimonialItem>
      </TestimonialsGrid>
    </TestimonialsContainer>
  );
}


const TestimonialsContainer = styled.div`
  min-height: 100vh;
  background: #000;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
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

  &::before, &::after {
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

const TestimonialsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  max-width: 900px;
  align-items: center;
`;

const TestimonialItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
  position: relative;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

const TestimonialCard = styled.div`
  background: ${props => props.color || '#4f7df3'};
  color: white;
  padding: 2rem;
  border-radius: 25px;
  position: relative;
  flex: 1;
  box-shadow: 0 10px 30px rgba(79, 125, 243, 0.3);
  transition: all 0.3s ease;

  /* Cola de burbuja de chat */
  &::after {
    content: '';
    position: absolute;
    top: 70px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid ${props => props.color || '#4f7df3'};
    left: -15px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(79, 125, 243, 0.4);
  }

  ${TestimonialItem}:nth-child(even) & {
    &::after {
      left: auto;
      right: -15px;
      transform: rotate(180deg);
    }
  }
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
  margin: 0;
  color: white;
`;

const Position = styled.p`
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.8;
  color: rgba(255, 255, 255, 0.9);
`;
