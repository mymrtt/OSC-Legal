/* eslint-disable max-len */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable class-methods-use-this */
// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Button from '../../../components/Button';

// Images
import Barcode from '../../../assets/barcode.svg';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(35, 31, 32, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;

  @media (max-width: 490px) {
    position: initial;
    padding: 1rem 0;
  }
`;

const Modal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 550px;
  height: 460px;
  background: #FFFFFF;
  margin: 0 1rem;

  h1 {
    font-size: 1.1rem;
    width: 52%;
    text-align: center;
    margin: 1.7rem 0 1.3rem 0;
    font-family: 'Overpass', sans-serif;
		font-weight: 800;
  }

  @media (max-width: 375px) {
    h1 {
      width: 65%;
    }
  }

  img {
    margin-bottom: 2rem;
    @media (max-width: 490px) {
      margin: 1rem 0 2.5rem 0;
      width: 115px;
    }
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
    width: 80%;
    text-transform: uppercase;
    margin: 1.7rem 0 0 0;
    border-radius: 3px;
    font-family: 'Overpass', sans-serif;
		font-weight: 700;

    @media (max-width: 490px) {
      position: fixed;
      bottom: 5vh;
      font-size: .9rem;
      margin: 0;
    }
  }
  @media (max-width: 490px) {
    height: 100vh;
    max-width: 100%;
    position: fixed;
    top: 0;
    margin: 0;
  }
`;

const WarningText = styled.div`
  padding: 0 4rem;
  width: 100%;
  @media (max-width: 490px) {
    width: 57%;
    padding: 0;
  }
  @media (max-width: 375px) {
    width: 64%;
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
  a {
    color: #85144B;
    font-family: 'Overpass', sans-serif;
    font-weight: regular;
  }
`;

export default class ModalSucessfully extends Component {
	render() {
  	return (
  		<Container>
  			<Modal>
  				<h1>A associação foi criada com sucesso!</h1>
  				<img src={Barcode} alt="Barcode"/>
  				<WarningText>
  					<Text>
            Você terá acesso aos modelos de documentos <span>após a confirmação de pagamento do boleto</span> que será enviado até o dia <strong>16/07/2019</strong>, para o <span>e-mail cadastrado.</span>
  					</Text>
  					<Text>
            Caso não receba o boleto no prazo estipulado, entre em contato conosco através do nosso site <a href="www.osclegal.org.br">www.osclegal.org.br</a>
  					</Text>
  				</WarningText>
  				<Button onClick={this.props.handleRedirect} text="Voltar para o Início"/>
  			</Modal>
  		</Container>
  	);
	}
}
