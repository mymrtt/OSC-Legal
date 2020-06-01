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


const Overlay = styled.div`
  width: 100%;
  height: 100vh;
	background-color: #707070a1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;

  /* @media (max-width: 490px) {
    padding: 1rem 0;
    position: initial;
  } */
`;

const Container = styled.div`
	width: 35%;
	/* height: 43vh; */
	/* max-width: 35%; */
  background: #FFFFFF;
	border-radius: 3px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  /* margin: 0 1rem; */

	@media(max-width: 768px) {
		width: 65%;
	}

	@media(max-width: 648px) {
		width: 100%;
		height: 100vh;
	}
`;

const Title = styled.h1`
	width: 75%;
	font-size: 1.125rem;
	font-family: "Overpass", ExtraBold;
	font-weight: 900;
	text-align: center;
	margin: 1.5rem 0 1.8rem;

	@media (max-width: 648px) {
		/* width: 89%; */
		font-size: 1.4rem;
		margin: 2rem 0 4rem;
	}
`;

const ImageBarcode = styled.img`
	margin-bottom: 2.3rem;

	@media (max-width: 648px) {
			margin-bottom: 5rem;
		}

		@media (max-width: 490px) {
			margin: 0 0 3rem;
		}
`;

// h2 {
//   color: #85144B;
//   text-transform: uppercase;
//   font-size: 0.8rem;
//   margin-bottom: 0.6rem;
//   font-family: 'Overpass', sans-serif;
// 	font-weight: 700;
// }

// Input {
//   max-width: 62%;
//   text-align: center;
//   margin-bottom: 2rem;
//   text-transform: uppercase;
//   font-family: 'Overpass', sans-serif;
// 	font-weight: 300;
// }

// @media (max-width: 375px) {
//   Input {
//     max-width: 90%;
//   }
// }

const WarningText = styled.div`
  width: 100%;
  padding: 0 4.2rem;

  @media (max-width: 490px) {
    /* width: 100%; */
    padding: 0 2rem;
  }
  span {
    font-family: Overpass;
		font-weight: bold;
  }
`;

const Text = styled.p`
  color: #231F20;
  font-size: 0.9rem;
  font-family: "Overpass", Light;;
  margin-bottom: 1rem;
  a {
    color: #85144B;
    font-family: Overpass;
    font-weight: bold;
  }

	@media (max-width: 648px) {
    font-size: 1rem;
  }
`;

class ModalSucessfully extends Component {
	render() {
		return (
			<Overlay onClick={this.props.handleClosedModal}>
				<Container onClick={ev => ev.stopPropagation()}>
					<Title>A {this.props.tradingName} foi criada com sucesso!</Title>
					<ImageBarcode src={Barcode} alt="Barcode" />
					<WarningText>
						<Text>
							Você terá acesso aos modelos de documentos <span>após a confirmação de pagamento do boleto</span> que será enviado até o dia <strong>--/--/----</strong>, para o <span>e-mail cadastrado.</span>
						</Text>
						<Text>
							Caso não receba o boleto no prazo estipulado, entre em contato conosco através do nosso site <a href="http://www.osclegal.org.br/">www.osclegal.org.br</a>
						</Text>
					</WarningText>
					<Button
						width='85%'
						height='4rem'
						margin='1.9rem 0 2rem'
						marginMobile='1rem 0'
						textTransform
						text="Voltar para o Início"
						onClick={this.props.handleRedirect}
					/>
				</Container>
			</Overlay>
		);
	}
}

export default ModalSucessfully;
