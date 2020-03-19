// Libs
import React from 'react';
import styled from 'styled-components';

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

export const Paragraph = styled.p`
  color: #231F20;
  font-size: 0.8rem;
  font-family: Overpass, Regular;
  margin-left: 1rem;

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


class LoginResetPasswordScreen extends React.Component {
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


  render() {
  	return (
  		<ContainerForm>
  			<Form onSubmit={this.handleSubmit}>
  				<ImageLogo loginScreen />
  				<InputBox>
  					<Paragraph>The (name@email.com) password has been reseted, login to access you dashboard</Paragraph>
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
  				<Button
  					login
  					text="ENTRAR"
  					type="submit"
  				/>
  			</Form>
  		</ContainerForm>
  	);
  }
}


export default LoginResetPasswordScreen;
