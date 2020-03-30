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
	justify-content: center; 
	margin: 0;

	@media (max-width: 648px) {
			background-color: #fff;
			padding: 1rem;
			justify-content: center;
		 }
	}
`;

export const Form = styled.form`
	width: 28%;
	border-radius: 5px;
	background-color: #fff;
	padding: 2rem 0 ;
	display: flex;
	align-items: center;
	flex-direction: column;

	@media (max-width: 1440px) {
		width: 32%;
	}

	@media (max-width: 1300px) {
			width: 40%;
		 }
	}

	@media (max-width: 986px) {
			width: 50%;
		 }
	}

	@media (max-width: 786px) {
			width: 65%;
		 }
	}

	@media (max-width: 648px) {
			width: 100%;
		 }
	}
`;

export const Title = styled.h1`
	width: 85%;
	font-size: 1.37rem;
	font-family: Overpass;
	font-weight: 900;
	margin-top: 1rem;
	text-transform: uppercase;

	@media (max-width: 648px) {
		 width: 92%;
		 margin: 0 0 3rem 0;
		 font-size: 1.25rem;
		 }
	}
`;

export const Box = styled.span`
	 width: 85%;
	 display: flex;
	 flex-direction: column;

	@media (max-width: 648px) {
			width: 96%;
		 }
	 }
`;

export const Label = styled.label`
	color: #85144B;
	font-size: 0.8rem;
	margin: 1.6rem 0rem 0.3rem 0.9rem;
	font-family: Overpass, Regular;
	text-transform: uppercase;
`;

export const BoxButton = styled.div`
`;

export const BackLogin = styled.span` 
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-around;
`;

export const ButtonText = styled(Link)` 
	color: #85144B;
	font-family: Overpass, Regular;
	text-decoration: none;
	text-transform: uppercase;
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

	handleSubmit = () => {
		this.setState({ redirect: '/resetcode' });
	}

	render() {
		return (
			<ContainerForm>
				<ImageLogo margin='0 0 4rem' />
				<Form onSubmit={this.handleSubmit}>
					<Title>redefinição de senha</Title>
					<Box>
						<Label>email</Label>
						<Input
							login
							type="email"
							onChange={this.handleChangeEmail}
							placeholder="name@email.com"
							required
						/>
						<BoxButton>
							<Button
								width='100%'
								margin='1rem 0 1.5rem 0'
								marginMobile='5.9rem 0 2.7rem 0'
								text="solicitar redefinição de senha"
								type="submit"
								onClick={this.handleInsertCodeScreen}
							/>
						</BoxButton>
					</Box>
					<BackLogin>
						<ButtonText to={'/login'}>volte ao login</ButtonText>
					</BackLogin>
				</Form>
				{this.state.redirect && <Redirect to={'/resetcode'} />}
			</ContainerForm>
		);
	}
}

export default ResetPasswordEmailScreen;
