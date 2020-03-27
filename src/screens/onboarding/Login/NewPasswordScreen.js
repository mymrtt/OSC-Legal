// Libs
import React from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

// Components
import ImageLogo from '../../../components/ImageLogo';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
// // import ResetPasswordCode from './ResetPasswordCode';

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
`;

export const Form = styled.form`
  width: 28%;
	border-radius: 5px;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 980px) {
		width: 40%;
	}

	@media (max-width: 786px) {
		width: 50%;
	}

	@media (max-width: 648px) {
		width: 90%;
		margin: 0;
	}
`;

export const Span = styled.span`
	width: 80%;

  @media (max-width: 648px) {
		width: 90%;
	}
`;

export const Title = styled.h1`
  color: #231F20;
  font-size: 1.25rem;
  font-weight: 900;
  font-family: Overpass;
  margin: 2rem 0 1.5rem 0;
	text-transform: uppercase;

  @media (max-width: 648px) {
		display: none;
	}
`;

export const Paragraph = styled.p`
  /* font-size: 1rem; */
  color: #231F20;
  font-family: Overpass, Regular;
  margin-bottom: 1.5rem;

	@media (max-width: 648px) {
		font-size: 0.85rem;
	}
`;

export const Error = styled.h4`
  color: #D53B40;
  display: flex;
  justify-content: flex-end;
  font-size: 0.6rem;
  font-family: Overpass, Regular;
`;

export const Label = styled.label`
  color: #85144B;
  font-size: 0.8rem;
  margin: 0.9rem;
  font-family: Overpass;
  font-weight: bold;
	text-transform: uppercase;
`;

export const InputBox = styled.input`
	/* width: 80%;
	display: flex;
	flex-direction: column; */
`;


export const BackLogin = styled.span` 
  display: flex;
  justify-content: center;
`;

export const ButtonText = styled(Link)`
    color: #85144B;
    font-size: 1rem; 
	  font-family: Overpass, Regular;
    margin-bottom: 2rem;
    text-decoration: none;
		text-transform: uppercase;
`;

class NewPasswordScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			confirmationCode: '',
			confirmationCodeError: '',
			newPassword: '',
			newPasswordError: '',
			repetPassword: '',
			repetPasswordError: '',
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
			if (
				confirmationCode.length < 6
			) {
				this.setState({
					confirmationCodeError: 'Por favor digite um código válido',
					isErrorConfirmationCode: true,
				});
			}
			if (
				newPassword.length < 6
			) {
				this.setState({
					newPasswordError: 'Use 4 caracteres ou mais para a sua senha',
					isErrorNewPassword: true,
				});
			}
			if (
				repetPassword.length < 4
			) {
				this.setState({
					repetPasswordError: 'Confirme sua senha',
					isErrorRepetPassword: true,
				});
			}
			this.setState({
				error: 'Código de confirmação incorreto',
			});
		} else if (newPassword !== repetPassword) {
			this.setState({
				repetPasswordError: 'Essa senha não se coincidem. Tente novamente',
				isErrorRepetPassword: true,
			});
		} else {
			this.setState({
				error: false,
				redirect: true,
			});
		}
	}

	handleChangeConfirmationCode = (ev) => {
		this.setState({
			confirmationCode: ev.target.value,
			confirmationCodeError: '',
			isErrorConfirmationCode: false,
		});
	}

	handleChangeNewPassword = (ev) => {
		this.setState({
			newPassword: ev.target.value,
			newPasswordError: '',
			isErrorNewPassword: false,
		});
	}


	handleChangeRepetPassword = (ev) => {
		this.setState({
			repetPassword: ev.target.value,
			repetPasswordError: '',
			isErrorRepetPassword: false,
		});
	}


	render() {
		const { confirmationCodeError, newPasswordError, repetPasswordError } = this.state;
		return (
			<ContainerForm>
				<ImageLogo margin='3rem' />
				<Form onSubmit={this.handleSubmit}>
					<Span>
						<Title>redefinição de senha</Title>
						<Paragraph>Um código de confirmação foi enviado para name@email.com, por favor, cole-o abaixo:</Paragraph>
						<Label>código de confirmação</Label>
						<Input
							login
							value={this.state.confirmationCode}
							type='typetext'
							onChange={ev => this.handleChangeConfirmationCode(ev)}
							placeholder="Insira aqui o código"
							isError={this.state.isErrorConfirmationCode}
						/>
						{confirmationCodeError && <Error>{confirmationCodeError}</Error>}
						<Label>nova senha</Label>
						<Input
							login
							value={this.state.newPassword}
							type='password'
							onChange={ev => this.handleChangeNewPassword(ev)}
							placeholder="Insira aqui sua senha"
							isError={this.state.isErrorNewPassword}
						/>
						{newPasswordError && <Error>{newPasswordError}</Error>}
						<Label>repita nova senha</Label>
						<Input
							login
							value={this.state.repetPassword}
							type='password'
							onChange={ev => this.handleChangeRepetPassword(ev)}
							placeholder="Repita sua senha"
							isError={this.state.isErrorRepetPassword}
						/>
						{repetPasswordError && <Error>{repetPasswordError}</Error>}
					</Span>
					<Button
						width='80%'
						widthMobile='90%'
						margin='1rem 0 1.5rem 0;'
						marginMobile='1rem 0 2.5rem'
						text="prossiga com nova senha"
						type="submit"
					/>
					<BackLogin>
						<ButtonText to={'/resetcode'}>reenviar e-mail</ButtonText>
					</BackLogin>
				</Form>
				{this.state.redirect && <Redirect to={'/loginreset'} />}
			</ContainerForm>
		);
	}
}

export default NewPasswordScreen;
