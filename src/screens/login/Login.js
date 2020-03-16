// Libs
import React from 'react';
import styled from 'styled-components';
// import VisibilityOff from "../../../assets/visibility-off.svg";
// import VisibilityOn from "../../../assets/visibility-on.svg";

import ImageLogo from '../../components/ImageLogo';

// Components
import Input from '../../components/Input';
import Button from '../../components/Button';

export const ContainerForm = styled.div`
  background-color: #FFCFCD;
  display: flex;
  align-items: flex-end;
  flex-direction: column; 
  margin: 0;

  @media (max-width: 648px) {
		background-color: #fff;
	}
`;

export const Form = styled.form`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;

  @media (max-width: 648px) {
		width: 100%;
	}
`;

export const InputBox = styled.span`
	width: 62%;
	display: flex;
	flex-direction: column;

	@media (max-width: 320px) {
		width: 83%;
	}
`;

export const Label = styled.label`
  color: #85144B;
  font-size: 0.7rem;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Span = styled.span` 
  width: 95%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 0.8rem;

  buttonText {
    color: #85144B;
    font-size: 0.75rem; 
  }
`;

export const Error = styled.h4`
  width: 25vw;
  color: #D53B40;
  font-size: 0.75rem;
  display: flex;
  align-self: flex-end;
`;

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			email: '',
			password: '',
		};
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

  render() {
  	return (
  		<ContainerForm>
  			<Form onSubmit={this.handleSubmit}>
  				<ImageLogo/>
  				<InputBox>
  					<Label>E-MAIL</Label>
  					<Input
					  	login
  						type="text"
  						onChange={this.handleChangeEmail}
  						placeholder="name@email.com"
  					/>
  				</InputBox>
  				<InputBox>
  					<Label>SENHA</Label>
  					<Input
					  login
  						type="password"
  						onChange={this.handleChangePassword}
  						placeholder="Insert password"
  					/>
  				</InputBox>
  				{/* <Error>Email e/ ou senha incorreta</Error> */}
  				{/* <Error>Endereço de email inválido</Error> */}
  				<Button
  					login
  					text="ENTRAR"
  					type="submit"
  				/>
  				<Span>
  					<buttonText>CRIAR CONTA</buttonText>
  					<buttonText>RESETAR SENHA</buttonText>
  				</Span>
  			</Form>
  		</ContainerForm>
  	);
  }
}

export default Login;
