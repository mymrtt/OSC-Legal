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
  padding: 3rem;

  @media (max-width: 648px) {
      background-color: #fff;
      padding: 1rem;
      justify-content: center;
     }
  }
`;

export const Form = styled.form`
  width: 33%;
  background-color: #fff;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1300px) {
      width: 40%;
     }
  }

  @media (max-width: 986px) {
      width: 50%;
     }
  }

  @media (max-width: 786px) {
      width: 70%;
     }
  }

  @media (max-width: 648px) {
      width: 100%;
     }
  }
`;

export const Title = styled.h1`
  width: 90%;
  font-size: 1.2rem;
  font-family: Overpass, ExtraBold;
  margin-top: 1rem;
  text-transform: uppercase;

  @media (max-width: 648px) {
     margin: 0 0 3rem 0;
     }
  }
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
  text-transform: uppercase;
`;

export const BoxButton = styled.div`
  width: 100%;

  Button {
    font-family: Overpass, Bold; 

    @media (max-width: 425px) {
      width: 100%;
     }
  }
`;

export const BackLogin = styled.span` 
  /* width: 95%; */
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const ButtonText = styled(Link)` 
  color: #85144B;
  font-size: 1rem; 
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

  handleInsertCodeScreen = () => {
  	this.setState({ redirect: '/resetcode' });
  }

  render() {
  	return (
  		<ContainerForm>
  			<ImageLogo marginLogo='0 0 4rem' />
  			<Form onSubmit={this.handleSubmit}>
  				<Title>redefinição de senha</Title>
  				<Box>
  					<Label>email</Label>
  					<Input
  						login
  						type="email"
  						onChange={this.handleChangeEmail}
  						placeholder="name@email.com"
  					/>
  					<BoxButton>
  						<Button
  							width='100%'
  							widthMobile='100%'
  							height='9vh'
  							heightMobile='10vh'
  							margin='1rem 0 1.5rem 0'
  							marginMobile='5rem 0 2.5rem 0'
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
