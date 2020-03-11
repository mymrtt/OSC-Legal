import React, { Component } from 'react';
import styled from 'styled-components';
import ImageLogo from '../../../components/ImageLogo';
import Barcode from '../../../assets/Barcode.svg';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffcfcd;
  width: 100%;
  height: 100%;
  position: fixed;
`;

export const Modal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 480px;
  background: #FFFFFF;

  h1 {
    font-size: 18px;
    width: 60%;
    text-align: center;
    margin: 25px 0 20px 0;
  }

  img {
    margin-bottom: 20px;
  }

  h2 {
    color: #85144B;
    text-transform: uppercase;
    font-size: 12px;
    margin-bottom: 5px;
  }

  Input {
    max-width: 300px;
    text-align: center;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  Button {
    max-width: 300px;
    text-transform: uppercase;
    margin: 0;
    border-radius: 3px;
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

export const TextoDeAviso = styled.div`
  padding: 0 78px;
  width: 100%;

  p {
    margin-bottom: 10px;
    font-size: 12px;
    color: #231F20;
  }

  span {
    font-weight: bold;
  }
`;

export default class ModalSucessfully extends Component {
	render() {
		return (
			<Container>
				<ImageLogo />
				<Modal>
          <h1>O Nome da empresa foi associada com sucesso!</h1>
          <img src={Barcode} alt="Barcode"/>
          <TextoDeAviso>
            <p>
              O acesso ao sistema será liberado após o pagamento do <span>boleto gerado.</span>
            </p>
            <p>
              Caso você tenha um código de desconto, você pode adiciona-lo antes de gerar o boleto de pagamento clicando no campo abaixo.
            </p>
          </TextoDeAviso>
          <h2>Código de Desconto</h2>
          <Input placeholder="Inserir Código"/>
          <Button text="Gerar Boleto" />
          <Button text="Voltar para o Início" />
				</Modal>
			</Container>
		);
	}
}
