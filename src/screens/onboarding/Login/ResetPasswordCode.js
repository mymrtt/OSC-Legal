// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import ImageLogo from '../../../components/ImageLogo';
import Button from '../../../components/Button';

// Redux
const mapStateToProps = state => ({
	onboarding: state.onboarding,
});

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #FFCFCD;
  display: flex;
	justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;

  @media (max-width: 648px) {
		padding: 1rem;
		background-color: #fff;
		justify-content: center;
	}
`;

const Content = styled.div`
	padding: 1rem;
	height: 25vh;
  background-color: #fff;
  border-radius: 5px;
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
	}
`;

const ContainerParagraph = styled.span`
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

const Paragraph = styled.span`
  font-size: 0.8rem;
  font-family: Overpass, Regular;
`;

class ResetPasswordCode extends Component {
	state = {
		redirect: undefined,
	};

	handleRedirect = () => {
		this.setState({
			redirect: true,
		});
	}

	render() {
		return (
			<Container>
				<ImageLogo margin='3rem 0 2.5rem 0'/>
				<Content>
					<ContainerParagraph>
						<Paragraph>Uma redefinição de senha foi enviada para o seu endereço de e-mail: { }
							{this.props.onboarding.emailReset ? this.props.onboarding.emailReset : ' nome@email.com'}.
						</Paragraph>
					</ContainerParagraph>
					<Button
						width='75%'
						widthMobile='100%'
						marginMobile='3rem 0 2rem 0'
						text="voltar para o login"
						type="button"
						textTransform
						onClick={this.handleRedirect}
					/>
				</Content>
				{this.state.redirect && <Redirect to={'/'}/>}
			</Container>
		);
	}
}

export default connect(mapStateToProps)(ResetPasswordCode);
