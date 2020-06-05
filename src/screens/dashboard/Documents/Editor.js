/* eslint-disable class-methods-use-this */
// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import '../../../index.css';

// Images
import Logo from '../../../assets/logo.svg';
import DownloadIcon from '../../../assets/download.svg';
import SaveIcon from '../../../assets/save.svg';
import PrintIcon from '../../../assets/print.svg';
import Doc2 from './files/doc2.pdf';

// Styled
const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #FCFCFC;
`;

const Header = styled.header`
	width: 100%;
	padding: 1rem;
	display: flex;
	align-items: center;
	box-shadow: 0 1px 2px #0000001A;
`;

const ImageLogo = styled.img`
	width: 100px;
	margin-right: 1.5rem;
`;

const DocName = styled.p`
	font-size: 1.3rem;
	color: #231F20;
	font-family: 'Overpass';
	font-weight: bold;
`;

const Content = styled.div`
	width: 100%;
	min-height: 93.4vh;
	background: #E9E9E9;
	display: flex;
	justify-content: flex-start;
`;

const BoxDoc = styled.div`
	width: 50%;
	height: 80vh;
	background: #FFF;
	margin-top: 2rem;
	border: 1px solid #707070;
	display: flex;
	justify-content: center;
	padding: 1rem;
	position: relative;
	box-shadow: 0 3px 6px #00000029;
`;

const BoxOptions = styled.div`
	width: 18rem;
	height: 12.2rem;
	display: flex;
	flex-direction: column;
	border: 1px solid #85144B;
	margin-top: 2rem;
	margin-left: 2rem;
	margin-right: 4rem;
	background: #FFF;
`;

const Option = styled.span`
	width: 100%;
	border-top: 1px solid #C1C0C0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem 0;
	cursor: pointer;

	:hover{
		background: #C1C0C0;
	}
`;

const ImageSave = styled.img`
	width: 30px;
	margin-right: 2rem;
`;

const ImageDownload = styled.img`
	width: 25px;
	margin-right: 1rem;
`;

const ImagePrint = styled.img`
	width: 30px;
	margin-right: 1.5rem;
`;

const TextOption = styled.p`
	color: #231F20;
	font-family: 'Overpass';
	font-weight: bold;
	text-transform: uppercase;
`;

class Editor extends Component {
	state = {
		doc: null,
	}

	componentDidMount() {
		this.handleDoc();
		console.log(this.state.doc);
	}

	handleDoc = () => {
		this.setState({
			doc: Doc2,
		});
	} 

	render() {
		console.log(this.state.doc);
		return (
			<Container>
				<Header>
					<ImageLogo src={Logo} />
					<DocName>Nome do Documento selecionado</DocName>
				</Header>
				<Content>
					<BoxOptions>
						<Option>
							<ImageSave src={SaveIcon}/>
							<TextOption>Salvar</TextOption>
						</Option>
						<Option>
							<ImageDownload src={DownloadIcon}/>
							<TextOption>Exportar</TextOption>
						</Option>
						<Option>
							<ImagePrint src={PrintIcon}/>
							<TextOption>Imprimir</TextOption>
						</Option>
					</BoxOptions>
					<BoxDoc>
						{/* Conteudo doc
						<p>Meu nome é
							<TextareaAutosize style={{ backgroundColor: '#C1C0C0' }} /> tenho <TextareaAutosize style={{ backgroundColor: '#C1C0C0' }} /> anos, sou portar do RG <TextareaAutosize style={{ backgroundColor: '#C1C0C0' }} /> e CPF <TextareaAutosize style={{ backgroundColor: '#C1C0C0' }} /> </p> */}
						<iframe src={this.state.doc} width="100%" height="100%"/>
							<TextareaAutosize class="text-editor" />
					</BoxDoc>
				</Content>
			</Container>
		);
	}
}

export default Editor;
