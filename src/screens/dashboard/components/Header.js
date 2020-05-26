// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import ImageLogo from '../../../components/ImageLogo';

// Redux
const mapStateToProps = state => ({
	email: state.onboarding.users.email,
	password: state.onboarding.users.password,
	name: state.onboarding.users.name,
	isAdmin: state.onboarding.users.isAdmin,
});

const Container = styled.div`
	width: 100%;
	background-color: #FFFFFF;
	color: #231F20;
	font-family: Overpass, Light;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	text-transform: uppercase;
	border-bottom: ${props => (props.border ? '1px solid  #707070' : 'none')};

	@media (max-width: 890px) {
		padding: 0 2rem;
	}

	@media (max-width: 785px) {
		padding: 0 1.2rem;
	}

	@media (max-width: 648px) {
		padding: 0;
		flex-wrap: wrap;
	}
`;

const WrapButton = styled.div`
	width: 55%;
	height: 5.3rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;

	a{
		display: flex;
		align-items: flex-end;
		height: 40px;
		align-self: flex-end;
		padding-bottom: 1rem;
		font-size: 1.375rem;
		text-decoration: none;
		color: #000;
		margin: 0 1.5rem;
	}

	@media(max-width: 768px){
		width: 50%;
		margin-left: 2rem;

		a {
			font-size: 1rem;
		}
	}

	@media (max-width: 648px) {
		width: 100%;
		justify-content: center;
		order: 3;
		margin: 0;

		a{
			font-size: 1.2rem;
			width: 50%;
			display: flex;
			justify-content: center;
			margin: 0;
		}
	}
`;

const ContainerUser = styled.div`
	display: flex;
	align-items: flex-end;
	flex-direction: column;
	margin: 0 6.2rem 0.8rem 0;

	@media (max-width: 785px) {
		margin: 0 .5rem 0.8rem 0;
		width: 40%;
	}

	@media (max-width: 750px) {
		width: 20%;
		margin: 0 0 0.8rem 0;
	}

	@media (max-width: 648px) {
		white-space: nowrap;
		padding-top: 0.7rem;
		margin: 0 2.2rem 0 0;
		order: 2;
	}
`;

const ParagraphUserName = styled.p`
	font-size: 1.25rem;
	font-family: "Overpass", Light;
	margin-top: 1.2rem;

	@media (max-width: 859px) {
		font-size: 1rem;
	}

	@media (max-width: 648px) {
		font-size: 1.2rem;
	}
`;

const ParagraphSair = styled.p`
	color: #85144B;
	font-family: Overpass, SemiBold;
	font-size: 1.25rem;
	cursor: pointer;

	@media(max-width: 768px){
		font-size: 1rem;
	}
`;

class Header extends Component {
	state = {
		redirect: false,
	}

	handleRedirect = () => {
		this.setState({ redirect: true });
	}

	render() {
		return (
			<Container border={this.props.isAdmin}>
				<NavLink exact to="/organizations">
					<ImageLogo
						margin={'0 0 0 2.5rem'}
						marginMobile='1rem 0 0 .5rem'
						paddingMobile='0.5rem'
						height='2.8rem'
					/>
				</NavLink>
				<WrapButton>
					<NavLink
						exact to="/organizations"
						activeClassName="button-header-dash"
					>
						Organizações
					</NavLink>
					<NavLink
						exact to="/documents"
						activeClassName="button-header-dash"
					>
						Documentos
					</NavLink>
				</WrapButton>
				<ContainerUser>
					<ParagraphUserName>
						{this.props.isAdmin ? 'Administrador' : this.props.name}
					</ParagraphUserName>
					<ParagraphSair onClick={this.handleRedirect}>
						sair
					</ParagraphSair>
					{this.state.redirect && <Redirect exact to="/" />}
				</ContainerUser>
			</Container>
		);
	}
}

export default connect(mapStateToProps, null)(Header);
