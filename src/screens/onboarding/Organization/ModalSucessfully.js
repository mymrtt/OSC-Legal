// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Input from '../../../components/Input';
import Button from '../../../components/Button';

// Images
import ImageLogo from '../../../components/ImageLogo';
import Barcode from '../../../assets/Barcode.svg';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffcfcd;
  width: 100%;
  height: 100%;
  position: fixed;

  @media (max-width: 425px) {
  & {
    position: initial;
    padding: 1rem 0;
  }
}
`;

const Modal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 480px;
  background: #FFFFFF;
  margin: 0 1rem;

  h1 {
    font-size: 1.1rem;
    width: 60%;
    text-align: center;
    margin: 1.7rem 0 1.3rem 0;
    font-family: 'Overpass', sans-serif;
		font-weight: 800;
  }

  @media (max-width: 375px) {
    h1 {
      width: 90%;
    }
  }

  img {
    margin-bottom: 1.5rem;
  }

  h2 {
    color: #85144B;
    text-transform: uppercase;
    font-size: 0.8rem;
    margin-bottom: 0.6rem;
    font-family: 'Overpass', sans-serif;
		font-weight: 700;
  }

  Input {
    max-width: 62%;
    text-align: center;
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-family: 'Overpass', sans-serif;
		font-weight: 300;
  }

  @media (max-width: 375px) {
    Input {
      max-width: 90%;
    }
  }

  Button {
    max-width: 62%;
    text-transform: uppercase;
    margin: 0;
    border-radius: 3px;
    font-family: 'Overpass', sans-serif;
		font-weight: 700;
  }

  @media (max-width: 375px) {
    Button {
      max-width: 90%;
    }
  }

  Button:nth-of-type(1) {
    box-shadow: 0px 3px 6px #00000029;
    z-index: 5;
  }

  Button:nth-of-type(2) {
    background: #ffffff;
    color: #85144B;
  }
`;

const WarningText = styled.div`
  padding: 0 4rem;
  width: 100%;

  @media (max-width: 375px) {
    & {
      width: 80%;
      padding: 0 0.4rem;
    }
  }

  span {
    font-family: 'Overpass', sans-serif;
		font-weight: 700;
  }
`;

const Text = styled.p`
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: #231F20;
  font-family: 'Overpass', sans-serif;
  font-weight: 300;
`;

export default class ModalSucessfully extends Component {
	render() {
		return (
			<Container>
				<ImageLogo />
				<Modal>
          <h1>O Nome da empresa foi associada com sucesso!</h1>
          <img src={Barcode} alt="Barcode"/>
          <WarningText>
            <Text>
              O acesso ao sistema será liberado após o pagamento do <span>boleto gerado.</span>
            </Text>
            <Text>
              Caso você tenha um código de desconto, você pode adiciona-lo antes de gerar o boleto de pagamento clicando no campo abaixo.
            </Text>
          </WarningText>
          <h2>Código de Desconto</h2>
          <Input placeholder="Inserir Código"/>
          <Button text="Gerar Boleto" />
          <Button text="Voltar para o Início" />
				</Modal>
			</Container>
		);
	}
}
