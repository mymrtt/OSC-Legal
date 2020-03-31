/* eslint-disable no-unused-vars */
// Libs
import React from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import ImageLogo from '../../../components/ImageLogo';
import Input from '../../../components/Input';
import Button from '../../../components/Button';


// Redux
import { addNewPassword } from '../../../dataflow/modules/sign-up-modules';


const mapStateToProps = state => ({
	signup: state.signup,
});

const mapDispatchToProps = dispatch => ({
	addNewPassword: (newPassword) => {
		dispatch(addNewPassword(newPassword));
	},
});


export const ContainerForm = styled.div`
  background-color: #FFCFCD;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  min-height: 100vh;

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
	margin: 3rem;
	border-radius: 3px;

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

	input {
		border: ${props => (props.withError === true ? '1px solid #f00' : '1 px solid #ffcfcd')};
		margin: 0.3rem 0 0.6rem 0;
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
  color: #231F20;
  font-family: Overpass, Regular;
  margin-bottom: 1.5rem;

	@media (max-width: 648px) {
		margin-top: 3rem;
	}

	@media (max-width: 460px) {
		font-size: 0.9rem;
		width: 90%;
	}
`;

export const Error = styled.h4`
  color: #D63434;
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
			newPassword: '',
			repetPassword: '',
			error: undefined,
			redirect: false,
			isEmpty: false,
			confirmationCodeError: false,
			newPasswordError: false,
			confirmationPasswordError: false,
		};
	}

	handleSubmit = (ev) => {
		ev.preventDefault();
		this.errors();
	}

	errors = () => {
		const { password } = this.props.signup.users;
		const { confirmationCode, newPassword, repetPassword } = this.state;
		if (confirmationCode === '' || newPassword === '' || repetPassword === '') {
			this.setState({ isEmpty: true });
		} else if (confirmationCode.length < 6) {
			this.setState({ confirmationCodeError: true });
		} else if (newPassword.length < 6) {
			this.setState({ newPasswordError: true });
		} else if (newPassword !== repetPassword) {
			this.setState({ confirmationPasswordError: true });
		} else {
			this.props.addNewPassword({ password: newPassword });
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

		const errorMessages = [
			'Senhas não coincidem',
			'Preencha todos os campos',
			'Código de confirmção inválido',
			'Senha fraca',
		];

		const { confirmationCodeError, newPasswordError, confirmationPasswordError, isEmpty } = this.state;
		return (
			<ContainerForm>
				<ImageLogo margin='3rem' />
				<Form onSubmit={this.handleSubmit} withError={this.state.isEmpty}>
					<Span>
						<Title>redefinição de senha</Title>
						<Paragraph>Um código de confirmação foi enviado para name@email.com, por favor, cole-o abaixo:</Paragraph>
						<Label>código de confirmação</Label>
						<Input
							login
							value={this.state.confirmationCode}
							type='text'
							onChange={ev => this.handleChangeConfirmationCode(ev)}
							placeholder="Insira aqui o código"
							isError={this.state.isErrorConfirmationCode}
						/>
						{confirmationCodeError && <Error>{errorMessages[2]}</Error>}
						<Label>nova senha</Label>
						<Input
							login
							value={this.state.newPassword}
							type='password'
							onChange={ev => this.handleChangeNewPassword(ev)}
							placeholder="Insira aqui sua senha"
							isError={this.state.isErrorNewPassword}
						/>
						{newPasswordError && <Error>{errorMessages[3]}</Error>}
						<Label>repita nova senha</Label>
						<Input
							login
							value={this.state.repetPassword}
							type='password'
							onChange={ev => this.handleChangeRepetPassword(ev)}
							placeholder="Repita sua senha"
							isError={this.state.isErrorRepetPassword}
						/>
						{confirmationPasswordError && <Error>{errorMessages[0]}</Error>}
						{isEmpty && <Error>{errorMessages[1]}</Error>}
					</Span>
					<Button
						to={'/loginreset'}
						width='80%'
						widthMobile='90%'
						margin='1rem 0 1.5rem 0;'
						marginMobile='1rem 0 2.5rem'
						text="prossiga com nova senha"
						type="submit"
						onClick={this.handleSubmit}
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

export default connect(mapStateToProps, mapDispatchToProps) (NewPasswordScreen);
