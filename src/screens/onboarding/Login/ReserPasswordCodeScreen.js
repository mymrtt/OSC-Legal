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
  margin: 0;
`;

export const Form = styled.form`
  width: 50%;
	height: 80vh;
  background-color: #fff;
  display: flex;
	justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Span = styled.span`
	width: 75%;
  margin-top: 0.5rem;
`;

export const Title = styled.h1`
	font-size: 1rem;
	color: #231F20;

`;

export const Paragraph = styled.p`
	font-size: 0.8rem;
	color: #231F20;
`;


export const Label = styled.label`
	color: #85144B;
  font-size: 0.7rem;
  margin: 0.9rem;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
	font-family: Overpass, Bold; 
`;

export const InputBox = styled.input`
	width: 75%;
	display: flex;
	flex-direction: column;
`;

export const VoltarLogin = styled.span` 
  width: 95%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  margin: 1rem;

  buttonText {
    color: #85144B;
    font-size: 1rem; 
		font-family: Overpass, Regular; 
  }
`;


class PasswordResetCodeScreen extends React.Component {
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
		console.log(this.state.email);
		return (
			<ContainerForm>
				<Form onSubmit={this.handleSubmit}>
					<ImageLogo />
					<Span>
						<Title>PASSWORD RESET</Title>
						<Paragraph>A confirmation code sent to name@email.com, please, paste it bellow:</Paragraph>
						<Label>CONFIRMATION CODE</Label>
						<Input
							login
							onChange={this.handleChangeNumber}
							placeholder="Insert here the code"
						/>
					</Span>
					<Span>
						<Label>NEW PASSWORD</Label>
						<Input
							login
							type={this.state.type}
							onChange={this.handleChangePassword}
							placeholder="Insert here the code"
						/>
					</Span>
					<Span>
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

export default PasswordResetCodeScreen;
