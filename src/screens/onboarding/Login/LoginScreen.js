import React from "react";
import styled from "styled-components";


// Components
import ImageLogo from "../../../components/ImageLogo";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

// Images
// import VisibilityOff from "../../../assets/visibility-off.svg";
// import VisibilityOn from "../../../assets/visibility-on.svg";

export const ContainerForm = styled.div`
  background-color: #FFCFCD;
  display: flex;
  align-items: flex-end;
  flex-direction: column; 
  margin: 0;

  @media (max-width: 648px) {
	background-color: #fff;
	  }
	}
`;

export const Form = styled.form`
  width: 50%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 648px) {
	width: 100%;
	  }
	}
`;

export const InputBox = styled.span`
	width: 62%;
	display: flex;
	flex-direction: column;

	@media (max-width: 648px) {
		width: 70%;
		  }
		}

	@media (max-width: 320px) {
		width: 83%;
		  }
		}
`;

export const Label = styled.label`
  color: #85144b;
  font-size: 0.7rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

export const Span = styled.span`
  width: 95%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 0.8rem;

@media(max-width: 648px) {
  span {
    width: 76 %;
  }
}
  margin-top: 0.5rem;

buttonText {
  color: #85144b;
  font-size: 0.75rem;
}
`;

export const Error = styled.h4`
  width: 25vw;
  color: #d53b40;
  width: 43%;
  display: flex;
  color: #D53B40;
  font-family: Eurostile, Medium;
  font-size: 0.75rem;
  align-self: flex-end;
`;


class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      email: '',
      email2: 'erlane',
      password: '',
      error: false,
    };
  }


  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.state.email !== this.state.email2) {
      this.setState({
        error: true
      })
    }
    else {
      this.setState({
        error: false

      })
    }
  }

  handleChangeEmail = (ev) => {
    this.setState({
      email: ev.target.value,
    });
  };

  handleChangePassword = ev => {
    this.setState({
      password: ev.target.value
    });
  };

  render() {
    console.log(this.state.email);
    
  	return (
  		<ContainerForm>
  			<Form onSubmit={this.handleSubmit}>
  				<ImageLogo/>
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
  						type="password"
  						onChange={this.handleChangePassword}
  						placeholder="Insert password"
  					/>
  				</InputBox>
  				{this.state.error && <Error>Email e/ ou senha incorreta</Error>}
  				{/* {this.state.error && <Error>Endereço de email inválido</Error> */}
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

export default LoginScreen;
