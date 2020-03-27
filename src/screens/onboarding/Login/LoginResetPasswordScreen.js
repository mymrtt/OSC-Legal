// Libs
import React from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

// Components
import ImageLogo from '../../../components/ImageLogo';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

// Images
import VisibilityOn from '../../../assets/visibility-on.svg';
import VisibilityOff from '../../../assets/visibility-off.svg';

export const ContainerForm = styled.div`
  height: 100vh;
  background-color: #FFCFCD;
  display: flex;
  align-items: center;
	justify-content: center;
  margin: 0;

  @media (max-width: 648px) {
		&{
			background-color: #fff;
	 	 }
		}
`;

export const Form = styled.form`
  width: 30%;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
	padding-top: 3rem;

	@media (max-width: 980px) {
		&{
			width: 70%;
		 }
	}

  @media (max-width: 648px) {
		&{
			width: 100%;
		}
	}
`;

export const Paragraph = styled.p`
  color: #231F20;
  font-size: 1rem;
  font-family: Overpass, Regular;
  margin-left: 0.8rem;
	margin-top: 2.5rem;
`;

export const InputBox = styled.span`
	width: 75%;
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const ImagePassword = styled.img`
  position: absolute;
  bottom: ${props => (props.off ? '1rem' : '0.875rem')};
  right: 0.7rem;
  cursor: pointer;
`;

export const Label = styled.label`
  color: #85144b;
  font-size: 0.8rem;
  font-family: Overpass, Bold;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
	padding-left: 0.8rem;
	text-transform: uppercase;
`;

export const Span = styled.span` 
  width: 75%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.5rem;
	margin-bottom: 2rem;
`;

class LoginResetPasswordScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			email: '',
			password: '',
			error: false,
			type: 'password',
			redirect: undefined,
		};
	}

	handleChangeType = () => {
		this.setState({
			type: this.state.type === 'password' ? 'text' : 'password',
		});
	}

	hanleClick = () => {
		this.setState({
			redirect: true,
		});
	}

	render() {
		return (
			<ContainerForm>
				<Form onSubmit={this.handleSubmit}>
					<ImageLogo />
					<InputBox>
						<Paragraph>A senha (nome@email.com) foi redefinida, faça login para acessar seu painel.</Paragraph>
						<Label>e-mail</Label>
						<Input
							login
							type="email"
							onChange={this.handleChangeEmail}
							placeholder="name@email.com"
							required
						/>
					</InputBox>
					<InputBox>
						<Label>senha</Label>
						<Input
							login
							type={this.state.type}
							onChange={this.handleChangePassword}
							placeholder="Insira sua senha"
							required
						/>
						<span>
							<ImagePassword
								src={this.state.type === 'password' ? VisibilityOn : VisibilityOff}
								onClick={this.handleChangeType}
								off={this.state.type === 'password'}
							/>
						</span>
					</InputBox>
					<Button
						width='75%'
						height='3.5rem'
						heightMobile='3.5rem'
						margin='1.5rem 0 5rem 0'
						marginMobile='3.5rem 0 1rem'
						text="entrar"
						type="button"
						onClick={this.hanleClick}
					/>
				</Form>
				{this.state.redirect && <Redirect to={'/login'} />}
			</ContainerForm>
		);
	}
}

export default LoginResetPasswordScreen;
