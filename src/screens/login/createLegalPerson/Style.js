import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  max-height: 100%;
  background: #FFCFCD;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    max-width: 500px;
    flex-direction: column;
    padding: 50px 50px 20px 50px;
    margin: 20px 0 45px 0;
    background: #FFFFFF;
  }
`;

export const FisicalPerson = styled.label`

  h1 {
    font-size: 20px;
    margin: 60px 0 0 0;
  }

  div {
    display: flex;
    flex-flow: wrap column;
    height: 350px;
    padding: 60px 0 20px 0;

    h2 {
      font-size: 12px;
      margin-bottom: 10px;
      color: #85144B;
    }

    p {
      font-size: 16px;
      margin-bottom: 25px;
    }
  }
`;

export const LegalPerson = styled.label`
  h1 {
    font-size: 20px;
    margin-bottom: 25px;
  }

  div {
    margin-bottom: 25px;

    p {
      margin-bottom: 5px;
      color: #85144B;
    }

    Input {
      width: 100%;
      padding: 20px 15px;
      background: #FAFAFA;
      border: 1px solid #FFCFCD;
      border-radius: 3px;
    }
  }
`;

export const WrapLegalPerson = styled.div`
  display: flex;
  /* justify-content: space-between; */
  
  div {
    display: flex;
    flex-direction: column; 
    width: 95%;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 20px 15px;
  background: #FF4136;
  color: #FAFAFA;
  border: 0;
  font-weight: bold;
`;
