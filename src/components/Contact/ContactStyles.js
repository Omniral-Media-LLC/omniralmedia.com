import styled from "styled-components"

export const Boxes = styled.div`
  width: 100%;
  display: flex;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`

export const Box = styled.div`
  background: linear-gradient(to right, #fff, #ddbb85);;
  color: black;
  font-weight: bold;
  border-radius: 12px;
  height: 100%;
  padding: 24px;
  width: 100%;

  @media ${props => props.theme.breakpoints.md} {
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 12px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`
export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
}
`

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`

export const Join = styled.div`
  display: flex;
  max-width: 1440px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`

export const IconContainer = styled.div`
  display: flex;

  @media ${props => props.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`

export const ContactInput = styled.input`
  height: 50px;
  position: relative;
  border: 4px solid transparent;
  border-radius: 50px;
  background: #171717;
  background-clip: padding-box;
  padding: 1rem 2rem 1rem 2rem;
  color: white;
`;

export const TextAreaInput = styled.textarea`
  width: 100%;
  position: relative;
  border: 4px solid transparent;
  border-radius: 50px;
  background: #171717;
  background-clip: padding-box;
  padding: 1rem 3rem 1rem 3rem;
  color: white;
`;

export const FirstInputs = styled.div`
  display: flex;
  align-items: center;
  @media ${props => props.theme.breakpoints.sm}{
    flex-direction: column;
  }
`

export const FirstInputsInner = styled.div`
  width: 50%;
  padding: 0 3rem;
  text-align: center;
  label {
    font-size: 2rem;
  }
  input {
    margin: 2rem 0;
    width: 100%;
  }
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 1rem;
    label {
      margin-bottom: 0.5rem;
    }
  }
`;

export const TextAreaInputContainer = styled.div`
  padding: 0 3rem;
  label {
    font-size: 2rem;
  }
  text-align: center;
  margin-top: 2rem;
  textarea {
    margin-top: 2rem;
  }
  @media ${props => props.theme.breakpoints.sm}{
    margin-top: 0rem;
    flex-direction: column;
    margin-bottom: 1rem;
    text-align: center;
    label {
      margin-bottom: 0.5rem;
    }
  }
`