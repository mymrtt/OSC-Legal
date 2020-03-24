// Libs
import React from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

// Components
import ImageLogo from '../../../components/ImageLogo';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
// import CreateFisicalPersonScreen from '../User/CreateUserScreen;
// import { InputBox } from './login';


export const ContainerForm = styled.div`
  height: 100vh;
  background-color: #FFCFCD;
  display: flex;
  align-items: center;
  flex-direction: column; 
  margin: 0;
  padding: 5rem;

	@media (max-width: 648px) {
			background-color: #fff;
			padding: 1rem;
			justify-content: center;
	 	}
	}
`;

export const Form = styled.form`
  width: 40%;
  background-color: #fff;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 980px) {
			width: 55%;
	 	}
	}

	@media (max-width: 786px) {
			width: 70%;
	 	}
	}

	@media (max-width: 520px) {
			width: 100%;
	 	}
	}
`;

export const Title = styled.h1`
  width: 90%;
  font-size: 1.2rem;
  font-family: Overpass, ExtraBold;
`;

export const Box = styled.span`
   width: 90%;
   display: flex;
   flex-direction: column;

	@media (max-width: 648px) {
			width: 100%;
	 	}
	}
`;

export const Label = styled.label`
  color: #85144B;
  font-size: 0.7rem;
  margin: 0.9rem;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  font-family: Overpass, Regular; 
`;

export const BoxButton = styled.div`
  width: 100%;

	Button {
		width: 95%;
		font-size: 0.9rem;
		font-family: Eurostile, Bold; 

		@media (max-width: 425px) {
			width: 100%;
	 	}
	}
`;

export const VoltarLogin = styled.span` 
  width: 95%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  margin: 1rem;
`;

export const ButtonText = styled(Link)` 
  color: #85144B;
  font-size: 1rem; 
  font-family: Eurostile, Regular;
  text-decoration: none;

`;

class ResetPasswordEmailScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			email: '',
			redirect: null,
		};
	}

	handleChangeEmail = (ev) => {
		this.setState({
			email: ev.target.value,
		});
	};

	handleInsertCodeScreen = () => {
		this.setState({ redirect: '/resetcode' });
	}

	render() {
		return (
			<ContainerForm>
				<ImageLogo loginScreen />
				<Form onSubmit={this.handleSubmit}>
					<Title>REDEFINIÇÃO DE SENHA</Title>
					<Box>
						<Label>E-MAIL</Label>
						<Input
							type="email"
							onChange={this.handleChangeEmail}
							placeholder="name@email.com"
						/>
						<BoxButton>
							<Button
								text="SOLICITAR REDEFINIÇÃO DE SENHA"
								type= "submit"
								onClick={this.handleInsertCodeScreen}
							/>
						</BoxButton>
					</Box>
					<VoltarLogin>
						<ButtonText to={'/login'}>VOLTE AO LOGIN</ButtonText>
					</VoltarLogin>
				</Form>
				{this.state.redirect && <Redirect to={'/resetcode'}/>}
			</ContainerForm>
		);
	}
}

export default ResetPasswordEmailScreen;
