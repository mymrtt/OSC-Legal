// Libs
import React from 'react';
import styled from 'styled-components';

// Components
import ImageLogo from '../../../components/ImageLogo';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

export const ContainerForm = styled.div`
  height: 100vh;
  background-color: #FFCFCD;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;

  @media (max-width: 648px) {
			background-color: #fff;
	 	}
	}
`;

export const Form = styled.form`
  width: 28%;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 980px) {
			width: 40%;
	 	}
	}

	@media (max-width: 786px) {
			width: 45%;
	 	}
	}

	@media (max-width: 648px) {
			width: 90%;
			margin: 0;
	 	}
	}
`;

export const Span = styled.span`
	width: 75%;
  margin-top: 0.3rem;

  @media (max-width: 648px) {
			width: 90%;
	 	}
	}
`;

export const Title = styled.h1`
	color: #231F20;
	font-size: 1rem;
  font-family: Overpass, ExtraBold;
  margin: 1rem 0 1rem 0;

`;

export const Paragraph = styled.p`
	font-size: 0.8rem;
	color: #231F20;
  font-family: Overpass, Regular;
  margin-bottom: 1rem;
`;

export const Error = styled.h4`
  width: 25vw;
  width: 43%;
  color: #D53B40;
  display: flex;
  align-self: flex-end;
  font-size: 0.75rem;
  font-family: Overpass, Regular;

  @media (max-width: 648px) {
				width: 40%;
		  }
		}	
`;

export const Label = styled.label`
	color: #85144B;
  font-size: 0.7rem;
  margin: 0.9rem;
	font-family: Overpass;
  font-weight: bold;
`;

export const InputBox = styled.input`
	width: 75%;
	display: flex;
	flex-direction: column;
`;


export const VoltarLogin = styled.span` 
  display: flex;
  justify-content: center;

  buttonText {
    color: #85144B;
    font-size: 1rem; 
		font-family: Overpass, Regular;
    margin-bottom: 1rem;
  }
`;


class NewPasswordScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			email: '',
			password: '',
			type: 'password',
		};
	}

	handleChangeNumber = (ev) => {
		this.setState({
			number: ev.target.value,
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
				<ImageLogo loginScreen/>
				<Form onSubmit={this.handleSubmit}>
					<Span>
						<Title>PASSWORD RESET</Title>
						<Paragraph>A confirmation code sent to name@email.com, please, paste it bellow:</Paragraph>
						{this.state.error && <Error>Confirmation code incorrect</Error>}
						<Label>CONFIRMATION CODE</Label>
						<Input
							login
							onChange={this.handleChangeNumber}
							placeholder="Insert here the code"
						/>
						<Label>NEW PASSWORD</Label>
						<Input
							login
							type={this.state.type}
							onChange={this.handleChangePassword}
							placeholder="Insert here the code"
						/>
						<Label>REPEAT NEW PASSWORD</Label>
						<Input
							login
							type={this.state.type}
							onChange={this.handleChangePassword}
							placeholder="Insert here the code"
						/>
					</Span>
					<Button
						login
						text="PROCEED WITH NEW PASSWORD"
						type="submit"
					/>
					<VoltarLogin>
						<buttonText>RESEND EMAIL</buttonText>
					</VoltarLogin>
				</Form>
			</ContainerForm>
		);
	}
}

export default NewPasswordScreen;
