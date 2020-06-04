// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Images
import logo from '../../../assets/logo.svg';

// Redux
const mapStateToProps = state => ({
	user: state.onboarding.user,
});

const Container = styled.div`
	display: none;

	@media (max-width: 648px) {
		padding-top: 1rem;
    padding-left: .45rem;
    padding-bottom: 1rem;
		width: 100%;
		display: flex;
		justify-content: space-between;
		background-color: #fff;
	}
`;

const Logo = styled.img`
	padding-top: 0.5rem;
	width: 10rem;
`;

const ContainerUser = styled.div`
	@media (max-width: 648px) {
    white-space: nowrap;
		padding-top: 0.7rem;
		margin-bottom: 0;
		order: 2;
	}

	@media (max-width: 490px) {
		text-align: right;
	}
`;

const ParagraphUserName = styled.p`
	@media (max-width: 648px) {
		margin-right: 1.7rem;
		font-size: 1.25rem;
		font-family: "Overpass", Light;
		font-size: 1.2rem;
	}

	@media (max-width: 490px) {
		margin: 0;
	}
`;

const ParagraphSair = styled.p`
	margin-right: 1.7rem;
  color: #85144B;
  font-family: Overpass, SemiBold;
	font-size: 1.25rem;
	cursor: pointer;
	align-self: flex-end;
	text-transform: uppercase;

	@media (max-width: 490px) {
		margin: 0;
	}
`;

class HeaderModal extends Component {
	state = {
		redirect: false,
	}

	handleRedirect = () => {
		this.setState({ redirect: true });
	}

	render() {
		const { user } = this.props;
		return (
			<Container>
				<Logo src={logo} alt="Logo OSC Legal" />
				<ContainerUser>
					<ParagraphUserName>
						{user.isAdmin === 1 ? 'Administrador' : user.name}
					</ParagraphUserName>
					<ParagraphSair onClick={this.handleRedirect}>
						sair
					</ParagraphSair>
				</ContainerUser>
				{this.state.redirect && <Redirect exact to="/" />}
			</Container>
		);
	}
}

export default connect(mapStateToProps, null)(HeaderModal);
