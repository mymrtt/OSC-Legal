// Libs
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import ImageLogo from '../../../components/ImageLogo';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import VisibilityOn from '../../../assets/visibility-on.svg';
import VisibilityOff from '../../../assets/visibility-off.svg';

export const ContainerForm = styled.div`
  height: 100vh;
  background-color: #FFCFCD;
  display: flex;
  align-items: center;
	justify-content: center;
  margin: 0;
  /* padding: 5rem; */

  @media (max-width: 648px) {
			background-color: #fff;
	 	 }
		}

		@media (max-width: 550px) {
			padding: 1rem;
	 	 }
		}
`;

export const Form = styled.form`
  width: 30%;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;

	@media (max-width: 980px) {
			width: 70%;
	 	 }
		}

  @media (max-width: 648px) {
				width: 100%;
	  	}
		}
`;

export const InputBox = styled.span`
	width: 75%;
	display: flex;
	flex-direction: column;
	position: relative;

	@media (max-width: 648px) {
				width: 90%;
		  }
		}

	@media (max-width: 490px) {
				width: 100%;
		  }
		}
`;

export const ImagePassword = styled.img`
  position: absolute;
  bottom: ${props => (props.off ? '1rem' : '0.875rem')};
  right: 0.7rem;
  cursor: pointer;
`;

export const Label = styled.label`
  color: #85144b;
  font-size: 0.7rem;
  font-family: Overpass, Bold;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
	padding-left: 0.8rem;
`;

export const Span = styled.span` 
  width: 75%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.5rem;
	margin-bottom: 2rem;


	@media (max-width: 648px) {
			width: 88%;
	 	 }
		}

	@media (max-width: 488px) {
			width: 99%;
	 	 }
		}
`;

export const ButtonText = styled(Link)`
  color: #85144B;
  font-size: 0.75rem; 
  text-decoration: none;
`;

export const Error = styled.h4`
  width: 25vw;
  width: 43%;
  color: #D53B40;
  display: flex;
  align-self: flex-end;
  font-size: 0.75rem;
  font-family: Eurostile, Medium;

  @media (max-width: 648px) {
				width: 40%;
		  }
		}	
`;


class LoginScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			email: '',
			password: '',
			error: false,
			type: 'password',
		};
	}

	handleChangeType = () => {
		this.setState({
			type: this.state.type === 'password' ? 'text' : 'password',
		});
	}

	handleSubmit = (ev) => {
		ev.preventDefault();
		if (this.state.email !== this.state.email2) {
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
	};


	handleSubmit = (ev) => {
		ev.preventDefault();
		if (this.state.email !== this.state.email2) {
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

	render() {
		console.log(this.state.email);
		return (
			<ContainerForm>
				<Form onSubmit={this.handleSubmit}>
					<ImageLogo loginScreen />
					<InputBox>
						<Label>E-MAIL</Label>
						<Input
							login
							type="email"
							onChange={this.handleChangeEmail}
							placeholder="name@email.com"
						/>
					</InputBox>
					<InputBox>
						<Label>SENHA</Label>
						<Input
							login
							type={this.state.type}
							onChange={this.handleChangePassword}
							placeholder="Insert password"
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
						login
						text="ENTRAR"
						type="submit"
					/>
					<Span>
						<ButtonText to={'/createuser'}>CRIAR CONTA</ButtonText>
						<ButtonText to={'/resetpassword'}>RESETAR SENHA</ButtonText>
					</Span>
				</Form>
			</ContainerForm>
		);
	}
}

export default LoginScreen;
