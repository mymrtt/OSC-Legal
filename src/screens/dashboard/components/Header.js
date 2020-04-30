// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Components
import ImageLogo from '../../../components/ImageLogo';

// Redux
const mapStateToProps = state => ({
	email: state.onboarding.users.email,
	password: state.onboarding.users.password,
	name: state.onboarding.users.name,
});

const Container = styled.div`
  width: 100%;
	/* height: auto; */
  background-color: #FFFFFF;
  color: #231F20;
  font-family: Overpass, Light;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
	padding: 0 3rem;
  text-transform: uppercase;
	border-bottom: 1px solid  #707070;
	/* opacity: 1; */

	@media (max-width: 890px) {
		padding: 0 2rem;
	}

	@media (max-width: 785px) {
		padding: 0 1.2rem;
	}

	@media (max-width: 648px) {
		flex-wrap: wrap;
	}
`;

const WrapButton = styled.div`
	width: 36%;
	display: flex;
	flex-direction: row;

	@media (max-width: 785px) {
		width: 20%;
	}

	@media (max-width: 686px) {
		width: 40%;
	}

	@media (max-width: 648px) {
		width: 100%;
		justify-content: space-between;
		order: 3;
	}
`;

const Border = styled.span`
	height: 5.3rem;
	margin-right: 3rem;
	border-bottom: ${props => (props.border && '6px solid #231F20')};
	cursor: pointer;

	@media (max-width: 859px) {
		margin-right: 2.5rem;
		/* padding-right: 1.5rem; */
	}

	@media (max-width: 648px) {
		margin-right: 0.5rem;
		padding-right: 0;
	}

	@media (max-width: 320px) {
		margin-right: 0;
	}
`;

const ParagraphContainer = styled.p`
  font-size: 1.375rem;
	font-weight: ${props => props.bold && '700'};
	margin-top: 2.2rem;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

const ContainerAdm = styled.div`
  width: 30%;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: flex-end;
  flex-direction: column;

	@media (max-width: 785px) {
		width: 40%;
	}

	@media (max-width: 750px) {
		width: 20%;
	}

	@media (max-width: 648px) {
		padding-top: 0.7rem;
		margin-bottom: 0;
		order: 2;
	}
`;

const ParagraphContainer1 = styled.p`
	font-size: 1.25rem;
	font-family: "Overpass", Light;
	margin-top: 1.2rem;

	@media (max-width: 859px) {
		font-size: 1rem;
	}

	@media (max-width: 685px) {
		margin-top: 0;
	}

	@media (max-width: 648px) {
		font-size: 0.8rem;
	}
`;

const ParagraphSair = styled.p`
  color: #85144B;
  font-family: Overpass, SemiBold;
	font-size: 1.25rem;
  opacity: 1;
	cursor: pointer;

	@media (max-width: 859px) {
		font-size: 1rem;
	}
`;

class Header extends Component {
	state = {
		redirect: 'organization',
	};


	handleChangeClick = (item) => {
		this.setState({
			redirect: item,
		});
		this.props.handleClick(item);
	};

	renderButtons = item => (
		<Border
			border={this.state.redirect === item}
			onClick={() => this.handleChangeClick(item)}
		>
			<ParagraphContainer bold={this.state.redirect === item}>
				{item === 'documentos' ? item : 'organizações'}
			</ParagraphContainer>
		</Border>
	)

	render() {
		return (
			<Container>
				<ImageLogo marginMobile='0 0 0 -1rem' height='2.8rem' paddingMobile='0.5rem'/>
				<WrapButton>
					{this.renderButtons('organization')}
					{this.renderButtons('documentos')}
				</WrapButton>
				<ContainerAdm>
					<ParagraphContainer1>
						{this.props.email && this.props.password && this.props.email === 'teste@gmail.com'
						&& this.props.password === '12345678' ? 'Administrador' : this.props.name}
					</ParagraphContainer1>
					<ParagraphSair>sair</ParagraphSair>
				</ContainerAdm>
			</Container>
		);
	}
}

// export default Header;
export default connect(mapStateToProps)(Header);
