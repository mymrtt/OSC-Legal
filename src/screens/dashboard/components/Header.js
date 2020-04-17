// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import ImageLogo from '../../../components/ImageLogo';

const Container = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  color: #231F20;
  font-family: Overpass, Light;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  text-transform: uppercase;
  opacity: 1;

	@media (max-width: 648px) {
		flex-wrap: wrap;
	}
`;

const WrapButton = styled.div`
	/* width: 40%; */
	display: flex;
	flex-direction: row;
	padding-top: 1rem;
	/* justify-content: space-evenly; */

	@media (max-width: 1080px) {
		width: 36%;
	}

	@media (max-width: 785px) {
		width: 26%;
	}

	@media (max-width: 648px) {
		width: 80%;
		justify-content: space-between;
		order: 3;
	}
`;

const Border = styled.span`
	height: 6rem;
	margin-right: 3rem;
	border-bottom: ${props => (props.border && '5px solid #231F20')};

	@media (max-width: 859px) {
		margin-right: 1.5rem;
	}
`;

const ParagraphContainer = styled.p`
  font-size: 1.375rem;
	font-weight: ${props => props.bold && '700'};
  margin-top: 2.2rem;
`;

const ParagraphContainer1 = styled.p`
  font-size: 1.3rem;
	font-family: Overpass, Light;
  margin-top: 1.2rem;

	@media (max-width: 648px) {
		font-size: 1rem;
	}
`;

const ContainerAdm = styled.div`
  width: 30%;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  /* font-size: 1.25rem; */


	@media (max-width: 785px) {
		width: 40%;
	}

	@media (max-width: 648px) {
		width: 43%;
		order: 2;
	}
`;

const ParagraphSair = styled.p`
  color: #85144B;
  font-family: Overpass, SemiBold;
	font-size: 1.25rem;
  opacity: 1;

	@media (max-width: 859px) {
		font-size: 1.2rem;
	}
`;

const Hr = styled.hr`
  width: 100%;
  background-color: #707070;
  display: flex;
  flex-direction: column;
`;

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
		};
	}

	handleChangeClick = (item) => {
		this.setState({
			redirect: item,
		});
		console.log('oiiii');
		this.props.handleClick(item);
	};

	renderButtons = item => (
		<Border border={this.state.redirect === item}>
			<ParagraphContainer
				onClick={() => this.handleChangeClick(item)}
				bold={this.state.redirect === item}
			>
				{item === 'documentos' ? item : 'organizações'}
			</ParagraphContainer>
		</Border>
	)

	render() {
		return (
			<div>
				<Container>
					<ImageLogo height='2.7rem'/>
					<WrapButton>
						{this.renderButtons('documentos')}
						{this.renderButtons('organization')}
					</WrapButton>
					<ContainerAdm>
						<ParagraphContainer1>administrador</ParagraphContainer1>
						<ParagraphSair>sair</ParagraphSair>
					</ContainerAdm>
				</Container>
				<Hr/>
			</div>
		);
	}
}

export default Header;
