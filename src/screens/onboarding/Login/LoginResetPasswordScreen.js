// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import ImageLogo from '../../../components/ImageLogo';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

// Images
import VisibilityOn from '../../../assets/visibility-on.svg';
import VisibilityOff from '../../../assets/visibility-off.svg';

// Redux
const mapStateToProps = state => ({
	onboarding: state.onboarding,
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
`;

const Form = styled.form`
  width: 32%;
  background-color: #fff;
	border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
	padding-top: 3rem;

	@media (max-width: 980px) {
		width: 70%;
	}

  @media (max-width: 648px) {
		width: 100%;
	}
`;

const Title = styled.p`
  color: #231F20;
  font-size: 1rem;
  font-family: Overpass, Regular;
  margin-left: 0.8rem;
	margin-top: 2rem;
`;

const InputBox = styled.span`
	width: 75%;
	display: flex;
	flex-direction: column;
	position: relative;
`;

const ImagePassword = styled.img`
  position: absolute;
  bottom: ${props => (props.off ? '1.2rem' : '0.875rem')};
  right: 0.7rem;
  cursor: pointer;
`;

const ErrorMessage = styled.h4`
  width: 63%;
  color: #D53B40;
  display: flex;
  justify-content: flex-end;
  font-size: 0.6rem;
  font-family: Eurostile, Medium;

  @media (max-width: 648px) {
		width: 85%;
	}	
`;

const Label = styled.label`
  color: #85144b;
  font-size: 0.75rem;
  font-family: Overpass;
	font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
	padding-left: 0.8rem;
	text-transform: uppercase;
`;

class LoginResetPasswordScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			email: '',
			password: '',
			passwordError: '',
			error: undefined,
			type: 'password',
			redirect: undefined,
		};
	}

	handleSubmit = (ev) => {
		ev.preventDefault();

		if (this.state.password.length < 6) {
			this.setState({
				error: true,
			});
		} else {
			this.setState({
				error: false,
			});
		}
	}

	handleChangeEmail = (ev) => {
		this.setState({
			email: ev.target.value,
		});
	};

	handleChangePassword = (ev) => {
		this.setState({
			password: ev.target.value,
		});
	}

	handleChangeType = () => {
		this.setState({
			type: this.state.type === 'password' ? 'text' : 'password',
		});
	}

	render() {
		const {
			email, error, type, redirect,
		} = this.state;
		return (
			<ContainerForm>
				<Form onSubmit={this.handleSubmit}>
					<ImageLogo />
					<InputBox>
						<Title>A senha
							{this.props.onboarding.emailReset ? this.props.onboarding.emailReset : ' name@email.com. '} {}
							foi redefinida, faça login para acessar seu painel.</Title>
						<Label>e-mail</Label>
						<Input
							login
							type="email"
							onChange={this.handleChangeEmail}
							placeholder="name@email.com"
							value={email}
							required
						/>
					</InputBox>
					<InputBox>
						<Label>senha</Label>
						<Input
							login
							type={type}
							onChange={this.handleChangePassword}
							placeholder="Insira senha"
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
					{error && <ErrorMessage>Email e/ ou senha incorreta</ErrorMessage>}
					<Button
						width='75%'
						height='3.5rem'
						heightMobile='3.5rem'
						margin='1.5rem 0 5rem 0'
						marginMobile='3.5rem 0 1rem'
						text="entrar"
						type="submit"
					/>
				</Form>
				{redirect && <Redirect to={'/loginreset'} />}
			</ContainerForm>
		);
	}
}

export default connect(mapStateToProps)(LoginResetPasswordScreen);
