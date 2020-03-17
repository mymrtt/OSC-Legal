// Libs
import React from 'react';
import styled from 'styled-components';

// Components
import ImageLogo from '../../../components/ImageLogo';
// import Input from '../../../components/Input';
// import Button from '../../../components/Button';

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
  height: 40vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  width: 63%;
  color: #85144B;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const BoxErro = styled.div`
	width: 62%;
	display: flex;
	flex-direction: column;
`;

export const Erro = styled.p`
  color: #FF4136;
  font-size: 2.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Span = styled.span` 
  color: #231F20;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const SpanParagraph = styled.span`
  width: 80%;
  font-size: 0.8rem;
  opacity: 1;   
`;

class ErroPassoword extends React.Component {
	render() {
  	return (
		  <ContainerForm>
		  <ImageLogo/>
  			<Form onSubmit={this.handleSubmit}>
         	<Title>Here is your password reset</Title>
  				<BoxErro>
  					<Erro>210704</Erro>
  				</BoxErro>
  				<Span>
  					<SpanParagraph>
              A password reset was required for your email address: name@email.com. If you did not perform this request, you can access your account normally.
						</SpanParagraph>
  				</Span>
  			</Form>
  		</ContainerForm>
  	);
	}
}

export default ErroPassoword;
