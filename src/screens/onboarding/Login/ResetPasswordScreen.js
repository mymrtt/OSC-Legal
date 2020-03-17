// Libs
import React from 'react';
import styled from 'styled-components';

// Components
import ImageLogo from '../../../components/ImageLogo';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
// import { InputBox } from './login';

export const ContainerForm = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #FFCFCD;
  display: flex;
  align-items: center;
  flex-direction: column; 
  margin: 0;
  padding: 5rem;

`;

export const Form = styled.form`
  width: 40%;
  height: 35vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

`;

export const Title = styled.h1`
  width: 80%;
  font-size: 1rem;
  margin-top: 0.9rem;
`;


export const Box = styled.span`
	width: 80%;
	display: flex;
	flex-direction: column;

`;

export const Label = styled.label`
  color: #85144B;
  font-size: 0.7rem;
  margin: 0.9rem;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
`;


// export const input = styled.input`
// 	width: 87%;
// `;

export const BoxButton = styled.div`
	width: 100%;
  margin-top: 0.5rem;
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
    font-size: 0.75rem; 
  }
`;

class ResetPassowordScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			email: '',
		};
	}

	handleChangeEmail = (ev) => {
		this.setState({
			email: ev.target.value,
		});
	};

	render() {
		console.log(this.state.email);
		return (
			<ContainerForm>
				<ImageLogo />
				<Form onSubmit={this.handleSubmit}>
					<Title>PASSWORD RESET</Title>
					<Box>
						<Label>E-MAIL</Label>
						<Input
							type="email"
							onChange={this.handleChangeEmail}
							placeholder="name@email.com"
						/>
						<BoxButton>
							<Button
								text="REQUESTA PASSWORD RESET"
								type="submit"
							/>
						</BoxButton>
					</Box>
					<VoltarLogin>
						<buttonText>BACK TO LOGIN</buttonText>
					</VoltarLogin>
				</Form>
			</ContainerForm>
		);
	}
}

export default ResetPassowordScreen;
