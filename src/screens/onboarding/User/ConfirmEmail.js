// Libs
import React from 'react';
import styled from 'styled-components';

// Components
import ImageLogo from '../../../components/ImageLogo';
import Button from '../../../components/Button';

const Container = styled.section`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color:#FFCFCD;
`;

const Modal = styled.div`
	width: 85vw;
	height: 40vh;
	background-color: #FFF;
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;
	padding: 1rem;

	@media(max-width: 648px){
		width: 95%;
	}
`;

const Title = styled.h1`
	text-transform: uppercase;
	font-size: 2rem;

	@media(max-width: 648px){
		font-size: 1.2rem;
	}
`;
const Paragraph = styled.p`
	width: 85%;
	text-align: center;
	font-size: 1.2rem;

	@media(max-width: 648px){
		font-size: 0.8rem;
	}
`;

const ConfirmEmail = () => (
	<Container>
		<ImageLogo width="200px" margin="0 0  3.35rem 0"/>
		<Modal>
			<Title>bem vindo ao osc legal</Title>
			<Paragraph>
				pedrogualandi@mail.com se registrou no sistema OSC Legal.
				Confirme a assinatura e acesse o sistema.
			</Paragraph>
			<Button
				width="75%"
				widthMobile="100%"
				heightMobile="4rem"
				text="confirmar e acessar"
				textTransform
			/>
		</Modal>
	</Container>
);

export default ConfirmEmail;
