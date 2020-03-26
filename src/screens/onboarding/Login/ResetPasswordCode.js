// Libs
import React from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

// Components
import ImageLogo from '../../../components/ImageLogo';
import Button from '../../../components/Button';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #FFCFCD;
  display: flex;
  align-items: center;
  flex-direction: column; 
  margin: 0;

  @media (max-width: 648px) {
		padding: 1rem;
		background-color: #fff;
		justify-content: center;
	}
`;

export const Div = styled.div`
  width: 35%;
  height: 50vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  
	@media (max-width: 1030px) {
    width: 50%
	}

	@media (max-width: 648px) {
    width: 80%;
		height: 79vh;
		/* margin: 0; */
	}
`;

export const Title = styled.h1`
  width: 65%;
  color: #85144B;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 648px) {
		width: 95%;
	}
`;

export const Code = styled.p`
  color: #FF4136;
  font-size: 2.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Overpass;

  @media (max-width: 648px) {
    margin: 3rem;
}
`;

export const Span = styled.span` 
  width: 85%;
  color: #231F20;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

@media (max-width: 648px) {
  width: 100%;
}
`;

export const SpanParagraph = styled.span`
  font-size: 0.8rem;
  font-family: Overpass, Regular;

  `;

class ResetPasswordCode extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: undefined,
		};
	}

hanleClick = () => {
	this.setState({
		redirect: true,
	});
}

render() {
	return (
		<Container>
			<ImageLogo marginLogo='3rem 0 2.5rem 0'/>
			<Div onSubmit={this.handleSubmit}>
				<Title>Aqui está o seu código de redefinição de senha:</Title>
				<Code>210704</Code>
				<Span>
					<SpanParagraph>Uma redefinição de senha foi necessária para o seu endereço de e-mail: nome@email.com.
               Se você não realizou essa solicitação,
               pode acessar sua conta normalmente.</SpanParagraph>
				</Span>
				<Button
          width='75%'
          widthMobile='100%'
          height='9vh'
          heightMobile='10vh'
					marginMobile='3rem 0 2rem 0'
					text="redefinir senha"
					type="button"
					onClick={this.hanleClick}
				/>
			</Div>
			{this.state.redirect && <Redirect to={'/newpassword'}/>}
		</Container>
	);
}
}

export default ResetPasswordCode;
