// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';
import jwt from 'jsonwebtoken';
import OscHash from '../../../services/OscHash';

// Components
import ImageLogo from '../../../components/ImageLogo';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

// Redux
import { addNewUser, isResetPassword } from '../../../dataflow/modules/onboarding-modules';
import { createNewPassword } from '../../../services/api';

const mapDispatchToProps = dispatch => ({
	addNewUser: (newPassword) => {
		dispatch(addNewUser(newPassword));
	},
	isResetPassword: (info) => {
		dispatch(isResetPassword(info));
	},
});

const ContainerForm = styled.div`
  min-height: 100vh;
  background-color: #FFCFCD;
	min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  @media (max-width: 648px) {
		background-color: #fff;
	}
`;

const Form = styled.form`
	padding-top: 1rem;
  width: 30%;
	border-radius: 5px;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
	margin: 2rem 0 3rem;

  @media (max-width: 980px) {
		width: 40%;
	}
	@media (max-width: 786px) {
		width: 50%;
	}
	@media (max-width: 648px) {
		padding-top: 0;
		margin: 0;
		width: 90%;
	}
	input{
		margin: 0.3rem 0 0.6rem 0;
		border: ${props => (props.withError === true ? '1px solid #FF4136' : '1px solid #ffcfcd')};
	}
`;

const Span = styled.span`
	width: 80%;
  @media (max-width: 648px) {
		width: 90%;
	}
`;

const Title = styled.h1`
  color: #231F20;
  font-size: 1.25rem;
  font-weight: 900;
  font-family: Overpass;
  margin: 1.5rem 0 1rem 0;
	text-transform: uppercase;
  @media (max-width: 648px) {
		display: none;
	}
`;

const ErrorMessage = styled.h4`
  color: #D63434;
  display: flex;
  justify-content: flex-end;
  font-size: 0.8rem;
	font-family: Overpass, Regular;

	@media(max-width: 490px){
		margin-bottom: 1rem;
	}
`;

const Label = styled.label`
  color: #85144B;
  font-size: 0.75rem;
  font-family: Overpass;
  font-weight: 900;
  margin: 1.2rem 0.9rem;
	text-transform: uppercase;
`;

const BackLogin = styled.span`
  display: flex;
  justify-content: center;
`;

const ButtonText = styled(Link)`
	color: #85144B;
	font-size: 1rem;
	font-family: Overpass, Regular;
	margin-bottom: 1.5rem;
	text-decoration: none;
	text-transform: uppercase;

	@media(max-width: 648px) {
		margin-top: 1rem;
		margin-bottom: 0rem;
	}
`;

class NewPasswordScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newPassword: '',
			newPasswordError: false,
			repeatPassword: '',
			repetPasswordError: false,
			redirect: false,
		};
	}

	componentDidMount() {
		const { search } = this.props.location;
		const parsed = queryString.parse(search);

		this.setState({
			token: parsed.token,
		});
	}

	handleSubmit = (ev) => {
		ev.preventDefault();
		this.handleErrors();
	}

	handleErrors = () => {
		const { newPassword, repeatPassword } = this.state;

		if (newPassword.length < 6) {
			this.setState({
				newPasswordError: true,
			});
		} else {
			this.setState({
				newPasswordError: false,
			});
		}

		if (newPassword !== repeatPassword) {
			this.setState({
				repetPasswordError: true,
			});
		} else {
			this.setState({
				repetPasswordError: false,
			});
		}

		if (newPassword.length >= 6 && newPassword === repeatPassword) {
			this.handleNewPassword();
		}
	}

	handleNewPassword = async () => {
		try {
			const { token, newPassword } = this.state;
			const userEmail = await jwt.decode(token);

			const password = newPassword;

			const encodedPassword = OscHash(password);
			const credentials = `${userEmail.email}:${encodedPassword}`;
			const base64credentials = Buffer.from(credentials, 'utf-8').toString(
				'base64',
			);

			await createNewPassword(base64credentials);

			await this.props.addNewUser({ email: userEmail.email, password: newPassword });
			await this.props.isResetPassword(true);
			this.setState({ redirect: true });
		} catch (error) {
			console.log('error', error);
			console.log('error.response', error.response);
		}
	}

	handleChangeNewPassword = (ev) => {
		this.setState({
			newPassword: ev.target.value,
		});
	}

	handleChangeRepetPassword = (ev) => {
		this.setState({
			repeatPassword: ev.target.value,
		});
	}

	render() {
		const {
			newPasswordError, repetPasswordError, redirect, newPassword, repeatPassword,
		} = this.state;

		const errorMessages = [
			'Use 6 caracteres ou mais para a sua senha.',
			'Os valores digitados não coincidem. Tente novamente.',
		];

		return (
			<ContainerForm>
				<ImageLogo margin='3rem 0 2rem 0' alt="Logo" />
				<Form onSubmit={this.handleSubmit} withError={newPasswordError || repetPasswordError}>
					<Span>
						<Title>redefinição de senha</Title>
						<Label>nova senha</Label>
						<Input
							login
							value={newPassword}
							type='password'
							onChange={ev => this.handleChangeNewPassword(ev)}
							placeholder="Insira aqui sua senha"
							required
						/>
						{newPasswordError && <ErrorMessage>{errorMessages[0]}</ErrorMessage>}
						<Label>repita nova senha</Label>
						<Input
							login
							value={repeatPassword}
							type='password'
							onChange={ev => this.handleChangeRepetPassword(ev)}
							placeholder="Repita sua senha"
							required
						/>
						{repetPasswordError && <ErrorMessage>{errorMessages[1]}</ErrorMessage>}
					</Span>
					<Button
						width='80%'
						widthMobile='90%'
						margin='1rem 0 1.5rem 0'
						marginMobile='0.5rem 0 1.5rem'
						text="Prossiga com nova senha"
						type="submit"
						textTransform
					/>
					<BackLogin>
						<ButtonText to={'/resetpassword'}>reenviar e-mail</ButtonText>
					</BackLogin>
				</Form>
				{redirect && <Redirect to={'/'} />}
			</ContainerForm>
		);
	}
}

export default connect(null, mapDispatchToProps)(NewPasswordScreen);
