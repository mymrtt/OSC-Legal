/* eslint-disable max-len */
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
	singup: state.singup,
});

const mapDispatchToProps = dispatch => ({
	addNewPassword: (newPassword) => {
		dispatch(addNewPassword(newPassword));
	},
});


export const ContainerForm = styled.div`
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

export const Form = styled.form`
  width: 30%;
	border-radius: 5px;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
	margin: 3rem;
	border-radius: 4px;
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
	input{
		margin: 0.3rem 0 0.6rem 0;
		border: ${props => (props.withError === true ? '1px solid #f00' : '1px solid #ffcfcd')};
	}
`;

export const Span = styled.span`
	width: 80%;
  @media (max-width: 648px) {
		& {
			width: 90%;
		}	
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
			newPassword: '',
			newPasswordError: false,
			repetPassword: '',
			repetPasswordError: false,
			redirect: false,
		};
	}

	handleSubmit = (ev) => {
		ev.preventDefault();
		this.errors();
	}

	errors = () => {
		// const { password } = this.props.signup.users;
		const { newPassword, repetPassword } = this.state;

		if (newPassword.length < 6) {
			this.setState({
				newPasswordError: true,
			});
		} else {
			this.setState({
				newPasswordError: false,
			});
		}

		if (newPassword !== repetPassword) {
			this.setState({
				repetPasswordError: true,
			});
		} else {
			this.setState({
				repetPasswordError: false,
			});
		}

		if (newPassword.length > 5 && newPassword === repetPassword) {
			this.props.addNewPassword({ password: newPassword });
		}
	}

	handleChangeNewPassword = (ev) => {
		this.setState({
			newPassword: ev.target.value,
		});
	}

	handleChangeRepetPassword = (ev) => {
		this.setState({
			repetPassword: ev.target.value,
		});
	}

	changeRedirect = () => {
		const { newPassword, repetPassword } = this.state;
		if (newPassword.length > 5 && newPassword === repetPassword) {
			this.setState({ redirect: true });
		}
	}

	render() {
		const {
			newPasswordError, repetPasswordError, redirect,
		} = this.state;

		const errorMenssages = [
			'Use 6 caracteres ou mais para a sua senha',
			'Essa senha não se coincidem. Tente novamente',
		];
		return (
			<ContainerForm>
				<ImageLogo margin='3rem 0 0 0' />
				<Form onSubmit={this.handleSubmit} withError={newPasswordError || repetPasswordError}>
					<Span>
						<Title>redefinição de senha</Title>
						<Paragraph>Um código de confirmação foi enviado para name@email.com, por favor, cole-o abaixo:</Paragraph>
						<Label>código de confirmação</Label>
						<Input
							login
							value={this.state.confirmationCode}
							type='text'
							placeholder="Insira aqui o código"
							required
						/>
						<Label>nova senha</Label>
						<Input
							login
							value={this.state.newPassword}
							type='password'
							onChange={ev => this.handleChangeNewPassword(ev)}
							placeholder="Insira aqui sua senha"
							required
						/>
						{newPasswordError && <Error>{errorMenssages[0]}</Error>}
						<Label>repita nova senha</Label>
						<Input
							login
							value={this.state.repetPassword}
							type='password'
							onChange={ev => this.handleChangeRepetPassword(ev)}
							placeholder="Repita sua senha"
							required
						/>
						{repetPasswordError && <Error>{errorMenssages[1]}</Error>}
					</Span>
					<Button
						width='80%'
						widthMobile='90%'
						margin='1rem 0 1.5rem 0;'
						marginMobile='1rem 0 2.5rem'
						text="prossiga com nova senha"
						type="submit"
						onClick={() => this.changeRedirect()}
					/>
					<BackLogin>
						<ButtonText to={'/resetcode'}>reenviar e-mail</ButtonText>
					</BackLogin>
				</Form>
				{redirect && <Redirect to={'/loginreset'} />}
			</ContainerForm>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPasswordScreen);

