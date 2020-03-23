// Libs
import React from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

// Components
import ImageLogo from '../../../components/ImageLogo';
import Button from '../../../components/Button';

export const ContainerForm = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #FFCFCD;
  display: flex;
  align-items: center;
  flex-direction: column; 
  margin: 0;
  padding: 5rem;

  @media (max-width: 648px) {
      padding: 1rem;
			background-color: #fff;
			justify-content: center;
	 	}
	}
`;

export const Form = styled.form`
  width: 40%;
  height: 45vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 980px) {
			width: 65%;
	 	}
	}

	@media (max-width: 786px) {
			width: 70%;
	 	}
	}

	@media (max-width: 648px) {
			width: 90%;
			margin: 0;
	 	}
	}
`;

export const Title = styled.h1`
  width: 70%;
  color: #85144B;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin-top: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 648px) {
			width: 95%;
	 	}
	}
`;

export const BoxErro = styled.div`

`;

export const Erro = styled.p`
  color: #FF4136;
  font-size: 2.3rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

export const Span = styled.span` 
  color: #231F20;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const SpanParagraph = styled.span`
  width: 90%;
  font-size: 0.7rem;
  font-family: Overpass, Regular;
  opacity: 1;
`;

class ResetPasswordCode extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
		};
	}

	render() {
		return (
			<ContainerForm>
				<ImageLogo loginScreen />
				<Form onSubmit={this.handleSubmit}>
					<Title>Aqui está o seu código de redefinição de senha:</Title>
					<BoxErro>
						<Erro>210704</Erro>
					</BoxErro>
					<Span>
						<SpanParagraph>Uma redefinição de senha foi necessária para o seu endereço de e-mail: nome@email.com.
               Se você não realizou essa solicitação,
               pode acessar sua conta normalmente.</SpanParagraph>
					</Span>
					<Button
						login
						text="REDEFINIR SENHA"
						type="submit"
					/>
				</Form>
				{this.state.redirect && <Redirect to={'/newpassword'}/>}
			</ContainerForm>
		);
	}
}

export default ResetPasswordCode;
