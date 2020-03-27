// Libs
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import ImageLogo from '../../../components/ImageLogo';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import VisibilityOn from '../../../assets/visibility-on.svg';
import VisibilityOff from '../../../assets/visibility-off.svg';

// Redux
const mapStateToProps = state => ({
	email: state.signup.users.email,
});

export const ContainerForm = styled.div`
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

export const Form = styled.form`
  width: 32%;
  background-color: #fff;
	border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;

	/* @media (max-width: 1440px) {
		width: 34%;
	} */

	@media (max-width: 1024px) {
		min-width: 50%;
	}

	/* @media (max-width: 980px) {
		width: 53%;
	}  */

  @media (max-width: 648px) {
		width: 100%;
	}
`;

export const InputBox = styled.span`
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

export const ImagePassword = styled.img`
  position: absolute;
  bottom: ${props => (props.off ? '1.2rem' : '0.875rem')};
  right: 0.7rem;
	cursor: pointer;

	@media (max-width: 648px) {
		bottom: 1.2rem;
	}
`;

export const Label = styled.label`
  color: #85144b;
  font-size: 0.8rem;
  font-family: Overpass;
	font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
	padding-left: 0.8rem;
`;

export const Span = styled.span` 
  width: 70%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0 3rem;


	@media (max-width: 648px) {
		width: 80%;
		margin: 2rem;
	}

	@media (max-width: 490px) {
		width: 95%;
	}
`;

export const ButtonText = styled(Link)`
  color: #85144B;
  font-size: 0.9rem; 
  text-decoration: none;
	text-transform: uppercase;
`;

export const Error = styled.h4`
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


class LoginScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			email: this.props.email || '',
			password: '',
			passwordError: '',
			error: undefined,
			type: 'password',
		};
	}

	handleSubmit = (ev) => {
		ev.preventDefault();
		const { password } = this.state;
		if (password.length < 6) {
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
		console.log(this.props.email);
		return (
			<ContainerForm>
				<Form onSubmit={this.handleSubmit}>
					<ImageLogo margin='3rem 0 6rem' />
					<InputBox>
						<Label>EMAIL</Label>
						<Input
							login
							type="email"
							value={this.state.email}
							onChange={this.handleChangeEmail}
							placeholder="name@email.com"
							required
						/>
					</InputBox>
					<InputBox>
						<Label>SENHA</Label>
						<Input
							login
							type={this.state.type}
							onChange={this.handleChangePassword}
							placeholder="Inserir senha"
							isError={this.state.error}
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
					{this.state.error && <Error>Email e/ ou senha incorreta</Error>}
					{/* {this.state.error && <Error>Endereço de email inválido</Error> */}
					<Button
						width='70%'
						widthMobile='80%'
						widthMobileSmall='95%'
						padding='1rem'
						margin='2rem 0 1rem'
						text="entrar"
						type="submit"
					/>
					<Span>
						<ButtonText to={'/createuser'}>criar conta</ButtonText>
						<ButtonText to={'/resetpassword'}>resetar conta</ButtonText>
					</Span>
				</Form>
			</ContainerForm>
		);
	}
}

export default connect(mapStateToProps)(LoginScreen);
