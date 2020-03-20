// Libs
import React from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

// Components
import ImageLogo from '../../../components/ImageLogo';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

export const ContainerForm = styled.div`
  height: 100vh;
  background-color: #FFCFCD;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;

  @media (max-width: 648px) {
			background-color: #fff;
	 	}
	}
`;

export const Form = styled.form`
  width: 28%;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 980px) {
			width: 40%;
	 	}
	}

	@media (max-width: 786px) {
			width: 45%;
	 	}
	}

	@media (max-width: 648px) {
			width: 90%;
			margin: 0;
	 	}
	}
`;

export const Span = styled.span`
	width: 75%;
  margin-top: 0.3rem;

  @media (max-width: 648px) {
			width: 90%;
	 	}
	}
`;

export const Title = styled.h1`
  color: #231F20;
  font-size: 1rem;
  font-family: Overpass, ExtraBold;
  margin: 1rem 0 1rem 0;

`;

export const Paragraph = styled.p`
	font-size: 0.8rem;
	color: #231F20;
  font-family: Overpass, Regular;
  margin-bottom: 1rem;
`;

export const Error = styled.h4`
  width: 25vw;
  width: 43%;
  color: #D53B40;
  display: flex;
  align-self: flex-end;
  font-size: 0.75rem;
  font-family: Overpass, Regular;

  @media (max-width: 648px) {
				width: 40%;
		  }
		}	
`;

export const Label = styled.label`
  color: #85144B;
  font-size: 0.7rem;
  margin: 0.9rem;
  font-family: Overpass;
  font-weight: bold;
`;

export const InputBox = styled.input`
	width: 75%;
	display: flex;
	flex-direction: column;
`;


export const VoltarLogin = styled.span` 
  display: flex;
  justify-content: center;
`;

export const button = styled(Link)` 
  
`;

export const ButtonText = styled(Link)`
    color: #85144B;
    font-size: 1rem; 
	  font-family: Overpass, Regular;
    margin: 1rem;
    text-decoration: none;
`;

class NewPasswordScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			confirmationCode: '',
			newPassword: '',
			repetPassword: '',
			error: undefined,
			redirect: false,
		};
	}

	handleSubmit = (ev) => {
		ev.preventDefault();
		const { confirmationCode, newPassword, repetPassword } = this.state;
		if (
			confirmationCode.length < 6 || newPassword.length < 4 || repetPassword.length < 4
		) {
			this.setState({
				error: true,
			});
		} else {
			this.setState({
				error: false,
				redirect: true,
			});
		}
	}

	handleChange = (type, ev) => {
		this.setState({
			[type]: ev.target.value,
		});
	}

	render() {
		return (
			<ContainerForm>
				<ImageLogo loginScreen />
				<Form onSubmit={this.handleSubmit}>
					<Span>
						<Title>REDEFINIÇÃO DE SENHA</Title>
						<Paragraph>Um código de confirmação enviado para name@email.com, por favor, cole-o abaixo:</Paragraph>
						{this.state.error && <Error>Confirmation code incorrect</Error>}
						<Label>CÓDIGO DE CONFIRMAÇÃO</Label>
						<Input
							login
							value={this.state.confirmationCode}
							type='number'
							onChange={ev => this.handleChange('confirmationCode', ev)}
							placeholder="Insira aqui o código"
						/>
						<Label>NOVA SENHA</Label>
						<Input
							login
							value={this.state.newPassword}
							type='password'
							onChange={ev => this.handleChange('newPassword', ev)}
							placeholder="Insira aqui o código"
						/>
						<Label>REPITA NOVA SENHA</Label>
						<Input
							login
							value={this.state.repetPassword}
							type='password'
							onChange={ev => this.handleChange('repetPassword', ev)}
							placeholder="Insira aqui o código"
						/>
					</Span>
					<Button
						login
						text="PROSSIGA COM NOVA SENHA"
						type="submit"
					/>
					<VoltarLogin>
						<ButtonText to={'/resetcode'}>REENVIAR E-MAIL</ButtonText>
					</VoltarLogin>
				</Form>
				{this.state.redirect && <Redirect to={'/loginreset'}/>}
			</ContainerForm>
		);
	}
}

export default NewPasswordScreen;
