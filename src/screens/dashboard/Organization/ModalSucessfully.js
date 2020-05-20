/* eslint-disable max-len */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable class-methods-use-this */
// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

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

  @media (max-width: 425px) {
    position: initial;
    padding: 1rem 0;
  }
`;

const Modal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 480px;
  height: 460px;
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
    margin-bottom: 2rem;
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
    width: 80%;
    padding: 0 0.4rem;
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
  }
`;

export default class ModalSucessfully extends Component {
  state = {
  	redirect: false,
  }

  handleRedirect = () => {
  	this.props.handleModalSucess();
  	this.props.handleClosedModal();
  }

  render() {
  	return (
  		<Container>
  			<Modal>
  				<h1>A Nome da associação foi criada com sucesso!</h1>
  				<img src={Barcode} alt="Barcode"/>
  				<WarningText>
  					<Text>
            Você terá acesso aos modelos de documentos <span>após a confirmação de pagamento do boleto</span> que será enviado até o dia <strong>16/07/2019</strong>, para o <span>e-mail cadastrado.</span>
  					</Text>
  					<Text>
            Caso não recebe o boleto no prazo estipulado, entro em contato conosco através do nosso site <a href="www.osclegal.org.br">www.osclegal.org.br</a>
  					</Text>
  				</WarningText>
  				<Button onClick={this.handleRedirect} text="Voltar para o Início"/>
  				{this.state.redirect && <Redirect exact to="/organizations" />}
  			</Modal>
  		</Container>
  	);
  }
}
