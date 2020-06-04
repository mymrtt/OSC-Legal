// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import jwt from 'jsonwebtoken';
import ImageLogo from '../../../components/ImageLogo';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import OscHash from '../../../services/OscHash';

// Images
import VisibilityOn from '../../../assets/visibility-on.svg';
import VisibilityOff from '../../../assets/visibility-off.svg';

// Api
import { login } from '../../../services/api';

// Redux
import { saveUserData } from '../../../dataflow/modules/onboarding-modules';

const mapDispatchToProps = dispatch => ({
	saveUserData: info => dispatch(saveUserData(info)),
});

const mapStateToProps = state => ({
	email: state.onboarding.users.email,
	password: state.onboarding.users.password,
	isResetPassword: state.onboarding.isResetPassword,
	emailReset: state.onboarding.emailReset,
});

const ContainerForm = styled.div`
  height: 100vh;
  background-color: #FFCFCD;
  display: flex;
  align-items: center;
	justify-content: center;
  margin: 0;

  @media (max-width: 648px) {
		background-color: #fff;
	}

	@media (max-width: 550px) {
		padding: 1rem;
	}
`;

const Form = styled.form`
  width: 32%;
  background-color: #fff;
	border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;

	@media (max-width: 1200px) {
		min-width: 40%;
	}

	@media (max-width: 982px) {
		width: 53%;
	}

  @media (max-width: 648px) {
		width: 100%;
	}
`;

const Title = styled.p`
	width: 70%;
	color: #231F20;
	font-size: 1rem;
	font-family: Overpass,Regular;
	margin-bottom: 2rem;
	display: flex;
	justify-content: center;

	@media (max-width: 648px) {
		width: 80%;
	}

	@media (max-width: 490px) {
		width: 95%;
	}
`;

const InputBox = styled.span`
	width: 70%;
	display: flex;
	flex-direction: column;
	position: relative;

	@media (max-width: 648px) {
		width: 80%;
	}

	@media (max-width: 490px) {
		width: 95%;
	}
`;

const ImagePassword = styled.img`
  position: absolute;
  bottom: ${props => (props.off ? '1.2rem' : '0.875rem')};
  right: 0.7rem;
	cursor: pointer;

	@media (max-width: 648px) {
		bottom: 1.2rem;
	}
`;

const Label = styled.label`
  color: #85144b;
  font-size: 0.75rem;
  font-family: Overpass;
	font-weight: bold;
  margin-top: 0.6rem;
  margin-bottom: 0.3rem;
	padding-left: 0.8rem;
	text-transform: uppercase;

	@media (max-width: 648px) {
		margin-top: 1rem;
		margin-bottom: 0.6rem;
	}
`;

const Span = styled.span`
  width: 70%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0 3rem;

	@media (max-width: 648px) {
		width: 80%;
		margin: 1.8rem;
	}

	@media (max-width: 490px) {
		width: 95%;
	}
`;

const ButtonText = styled(Link)`
  color: #85144B;
	font-family: 'Overpass', Regular;
  font-size: 0.9rem;
  text-decoration: none;
	text-transform: uppercase;
`;

const Error = styled.h4`
  width: 70%;
  color: #D63434;
	display: flex;
  justify-content: flex-end;
  font-size: 0.6rem;
	font-family: Overpass, Regular;

	@media (max-width: 648px) {
		width: 80%;
	}

  @media (max-width: 490px) {
		width: 95%;
	}
`;

class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			email: '',
			password: '',
			passwordError: '',
			error: undefined,
			type: 'password',
			redirect: '',
		};
	}

	userLogin = async () => {
		try {
			const user = {
				email: this.state.email,
				password: this.state.password,
			};

			const encodedPassword = OscHash(user.password);

			const credentials = `${user.email}:${encodedPassword}`;

			const base64credentials = Buffer.from(credentials, 'utf-8').toString(
				'base64',
			);

			const response = await login(user, base64credentials);

			if (response) {
				const userData = jwt.decode(response.data.token);
				console.log('userData', userData)
				
				await localStorage.setItem('token', response.data.token);
				await localStorage.setItem('userInfo', {
					acessToken: response.data.token,
					...userData,
				});
				
				this.props.saveUserData(userData);
				this.setState({ redirect: '/organizations' });
			}

			if (this.state.password.length < 6 || response.status !== 200) {
				this.setState({
					error: true,
				});
			}
		} catch (error) {
			console.log('error', error);
			console.log('error.response', error.response);

			this.setState({
				error: true,
			});
		}
	}

	handleSubmit = (ev) => {
		ev.preventDefault();

		this.userLogin();
	}

	handleChangeEmail = (ev) => {
		this.setState({
			email: ev.target.value,
			error: false,
		});
	};

	handleChangePassword = (ev) => {
		this.setState({
			password: ev.target.value,
			error: false,
		});
	}

	handleChangeType = () => {
		this.setState({
			type: this.state.type === 'password' ? 'text' : 'password',
		});
	}

	render() {
		const {
			email, type, error, password, redirect,
		} = this.state;
		return (
			<ContainerForm>
				<Form onSubmit={this.handleSubmit}>
					<ImageLogo margin={this.props.isResetPassword ? '3rem 0 3rem' : '3rem 0 6rem'} width="180px"/>
					{this.props.isResetPassword
						&& <Title>A senha ({this.props.emailReset ? this.props.emailReset : 'nome@email.com'})
					foi redefinida, faça login para acessar a sua dashboard.
						</Title>
					}
					<InputBox>
						<Label>e-mail</Label>
						<Input
							login
							type="email"
							value={email}
							onChange={this.handleChangeEmail}
							placeholder="nome@email.com"
							required
						/>
					</InputBox>
					<InputBox>
						<Label>senha</Label>
						<Input
							login
							type={type}
							value={password}
							onChange={this.handleChangePassword}
							placeholder="Inserir senha"
							isError={error}
							required
						/>
						<span>
							<ImagePassword
								src={type === 'password' ? VisibilityOn : VisibilityOff}
								onClick={this.handleChangeType}
								off={type === 'password'}
							/>
						</span>
					</InputBox>
					{error && <Error>E-mail e/ ou senha incorreta</Error>}
					<Button
						width='70%'
						widthMobile='80%'
						widthMobileSmall='95%'
						padding='1rem'
						margin={this.props.isResetPassword ? '2.5rem 0 3.5rem' : '2.5rem 0 1rem'}
						marginMobile={this.props.isResetPassword ? '3.7rem 0 3rem' : '3.7rem 0 1.5rem'}
						text="entrar"
						type="submit"
						textTransform
					/>
					{!this.props.isResetPassword && <Span>
						<ButtonText to={'/createuser'}>criar conta</ButtonText>
						<ButtonText to={'/resetpassword'}>resetar conta</ButtonText>
					</Span>}
				</Form>
				{redirect && <Redirect to={'/organizations'} />}
			</ContainerForm>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
