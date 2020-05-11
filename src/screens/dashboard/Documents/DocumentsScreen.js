/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-len */
/* eslint-disable react/jsx-key */
/* eslint-disable class-methods-use-this */
// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import ImageDocument from '../../../assets/document.png';
import magnifyingGlass from '../../../assets/magnifyingGlass.svg';
import DownloadIcon from '../../../assets/download.svg';
import DownloadWhiteIcon from '../../../assets/downloadwhite.svg';
import Exit from '../../../assets/exit.svg';
import DeleteIcon from '../../../assets/delete.svg';
import DeleteIconWhite from '../../../assets/deleteWhite.svg';
import documentWhite from '../../../assets/documentWhite.svg';

import Header from '../components/Header';
import logo from '../../../assets/logo.svg';

// Redux
import { addNewDocument, deleteDocument } from '../../../dataflow/modules/dashboard-modules';

const mapStateToProps = state => ({
	documentsList: state.dashboard.documentsList,
});

const mapDispatchToProps = dispatch => ({
	addNewDocument: info => dispatch(addNewDocument(info)),
	deleteDocument: info => dispatch(deleteDocument(info)),
});

const Container = styled.div`
  width: 100%;
	height: 90%;

	@media (max-width: 490px) {
		height: 45%;
	}
`;

const MaximumWidth = styled.div`
	max-width: 1440px;
	margin: 0 auto;
`;

const ContainerHeader = styled.div`
	margin: 3rem 4rem 0 4rem;
  display: flex;
  justify-content: space-between;

	@media (max-width: 1024px) {
		margin: 3rem 4rem 0 3rem;
	}

	@media (max-width: 768px) {
		margin: 3rem 2rem 0 0;
	}

	@media (max-width: 490px) {
		margin: 1.2rem;
	}
`;

const AddModelImage = styled.img`
	width: 35%;
	@media (max-width: 490px) {
		display: none;
	}
`;

const TitleSearch = styled.p`
  color: #85144B;
  font-size: 2rem;
  font-family: "Overpass", Black;
  font-weight: 900;

	@media (max-width: 1024px) {
		font-size: 1.5rem;
	}

	@media (max-width: 768px) {
		font-size: 1.5rem;
		text-align: center;
		width: 37%;
	}

	@media (max-width: 490px) {
		display: none;
	}
`;

const ContainerContent = styled.div`
	padding-top: 3rem;
	padding-right: 3rem;
	width: 100%;
	display: flex;
	@media (max-width: 768px) {
		padding-right: 1rem;
		padding-top: 2rem;
	}
	@media (max-width: 490px) {
		padding: 0 1.2rem;
		flex-direction: column;
	}
`;

const ContainerAddModel = styled.div`
	width: 35%;
	display: flex;
	align-items: center;
	flex-direction: column;

	@media (max-width: 490px) {
		display: flex;
		order: 1;
		width: 100%;
		justify-content: flex-end;
		height: ${props => (props.initialModel ? '60vh' : 'initial')};
	}
`;

const InitialAddModel = styled.div`
	width: 61.4%;
	height: 170px;
	display: ${(props => (props.initialModel ? 'flex' : 'none'))};
	text-align: center;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: #959595;
	border: 1px solid #959595;
	border-radius: 3px;

	@media (max-width: 1024px) {
		padding: 0 1%;
	}

	@media (max-width: 768px) {
		padding: 0 5%;
	}

	@media (max-width: 490px) {
		width: 100%;
		padding: 0 6%;
		margin-bottom: 2rem;
	}
`;


const ContainerScroll = styled.div`
	max-height: 73vh;
	width: 65%;
	overflow-y: scroll;
	display: ${props => (props.initialModel ? 'none' : 'inline-block')};

	&::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 1680px) {
		max-height: 69vh;
	}

	@media (max-width: 1440px) {
		max-height: 65vh;
	}

	@media (max-width: 490px) {
		width: 100%;
		max-height: 50vh;
	}
`;

const TitleInitialAddModel = styled.h2`
	font-size: 1.5rem;
  font-family: "Overpass", Black;
	font-weight: 900;

	@media (max-width: 768px) {
		font-size: 1.2rem;
	}
`;

const TextInitialAddModel = styled.p`
	font-size: 1.2rem;
  font-family: "Overpass", Regular;
	font-weight: 300;

	span {
		color: #85144B;
		text-decoration: underline;
		cursor: pointer;
		text-underline-position: under;
	}

	@media (max-width: 768px) {
		font-size: 1rem;
	}

	@media (max-width: 490px) {
		margin-top: 1rem;
	}
`;

const ContainerSearch = styled.div`
	margin-right: 2rem;
	width: 35%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	@media (max-width: 1024px) {
		margin-right: 1.1rem;
	}
	@media (max-width: 768px) {
		margin-right: .6rem;
		width: 40%;
	}
	@media (max-width: 490px) {
		width: 100%;
		margin-right: 0;
	}
`;

const SearchText = styled.p`
  color: #231F20;
  font-size: 1.2rem;
  font-family: Overpass, Bold;
	font-weight: 600;
  margin-right: 0.8rem;
	@media (max-width: 490px) {
		display: none;
	}
`;

const ContainerSearchInput = styled.label`
	display: flex;
	width: 100%;
	border-radius: 3px;
  padding: 0.7rem;
	border: ${props => (props.clickLabel ? '1px solid #FF4136' : '0.5px solid #85144B')};
	img {
		margin: 0 0 0 10px;
	}
`;

const SearchInput = styled.input`
  width: 100%;
  border: 0;
	outline: none;
	@media (max-width: 768px) {
		&::placeholder {
			font-size: .7rem;
		}
	}
`;

const ContainerModels = styled.div`
	width: 100%;
	display: ${(props => (props.initialModel ? 'none' : 'flex'))};
	flex-direction: column;
	@media (max-width: 490px) {
    margin-bottom: 10rem;
	}

	@media (max-width: 490px) {
		width: 100%;
		margin-bottom: 0;
	}
`;

const ContainerModel = styled.div`
	margin-bottom: 1rem;
	padding: 2rem;
	width: 95%;
	border-radius: 3px;
	height: 100%;
	display: flex;
	cursor: pointer;
	position: relative;
	z-index: ${props => (props.zIndex ? '-1' : 0)};

	&:hover {
		border:1px solid #85144B;

		&::before {
			content: '';
			background: #85144B;
			width: 1px;
			height: 100%;
			top: 0;
			right: 12rem;
			position: absolute;

			@media (max-width: 1024px) {
				right: 10.5rem;
			}

			@media (max-width: 768px) {
				right: 9rem;
			}

			@media (max-width: 490px) {
				width: 10rem;
				height: 1px;
				display: ${props => (props.displayBefore ? 'none' : 'flex')};
				margin-top: 21.5%;
    		top: 100%;
				z-index: 6;
				right: 0;
			}

			@media (max-width: 375px) {
				margin-top: 24.2%;
			}
		}
	}
	@media (max-width: 768px) {
		padding: 1.3rem;
	}
	@media (max-width: 490px) {
		width: 100%;
		padding: 1rem;
		order: 3;
		z-index: initial;
	}
`;

const ContainerModelDescription = styled.div`
	width: 85%;
	display: flex;
	flex-direction: column;
	span {
		display: flex;

		@media (max-width: 768px) {
			width: 95%;
		}

		@media (max-width: 490px) {
			width: 100%;
		}
	}

	@media (max-width: 768px) {
		width: 70%;
	}

	@media (max-width: 490px) {
		width: 100%;
	}
`;

const ModelNumber = styled.h2`
	margin-right: 0.5rem;
	color: #FF4136;
	font-family: "Overpass", Black;
	font-size: 1.5rem;
	@media (max-width: 490px) {
		font-size: 1.2rem;
	}
`;

const ModelTitle = styled.h2`
	margin-bottom: .5rem;
  color: #85144B;
  font-family: "Overpass", Black;
	@media (max-width: 768px) {
		font-size: 1.3rem;
	}
	@media (max-width: 490px) {
		font-size: 1rem;
	}
`;

const ModelParagraph = styled.p`
  width: 92%;
  font-size: 1.2rem;
  font-family: 'Overpass', Regular;
	@media (max-width: 768px) {
		font-size: 1rem;
		width: 98%;
	}
	@media (max-width: 490px) {
		width: 100%;
		font-size: .8rem;
		line-height: 1.3rem;
	}
`;

const ContainerOptions = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;

	@media (max-width: 768px) {
		margin-left: 1.7rem;
	}

	@media (max-width: 490px) {
		display: ${props => (props.contOptions ? 'flex' : 'none')};
		position: absolute;
		width: 160px;
		height: 130px;
    top: 100%;
		margin-top: 5%;
    right: 0rem;
    border: 1px solid #85144B;
		z-index: 5;
		background: #ffffff;
		align-items: center;
		border-radius: 3px;
	}
`;

const Option = styled.button`
	margin-bottom: 1rem;
	width: 7rem;
	height: 2.5rem;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: transparent;
	border: none;
	border-radius: 4px;

	&:hover {
		background: #FF4136;
	}

	@media (max-width: 768px) {
		width: 6rem;
	}

	@media (max-width: 490px) {
		align-self: center;
		justify-content: space-around;
		margin-bottom: 0;
		height: 100%;
		width: 100%;
		padding: 0 15%;
		border-radius: initial;
	}
`;

const OptionImage = styled.img`
	@media (max-width: 768px) {
		width: 20px;
		height: 20px;
	}
`;

const OptionText = styled.p`
	color: ${props => (props.colorTextButton)};
	font-size: 1.2rem;
	font-family: "Overpass", SemiBold;

	@media (max-width: 768px) {
		font-size: 1rem;
	}

	@media (max-width: 490px) {
		font-size: 1.3rem;
    margin-left: 0.8rem;
	}
`;

const Button = styled.button`
  margin: 2rem;
	padding: 1.3rem;
  width: 60%;
  border: 0;
  color: #fff;
  box-shadow: 0 3px 6px #00000029;
  border-radius: 3px;
  font-size: 1.2rem;
	font-family: "Overpass", SemiBold;
  font-weight: bold;
  background-color: #FF4136;

	@media (max-width: 1024px) {
		padding: 1rem;
		width: 70%;
	}

	@media (max-width: 768px) {
		font-size: 1rem;
		width: 75%;
	}

	@media (max-width: 490px) {
		font-size: 1.2rem;
		width: 100%;
	}
`;

const ContainerModal = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 3;
	background: rgba(112, 112, 112, 0.5);

	@media (max-width: 490px) {
		flex-direction: column;
	}
`;

const ModalAddModel = styled.form`
	width: 660px;
	min-height: 560px;
	background: #FFFFFF;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 4px;
	padding: 1% 2% 2% 3%;

	@media (max-width: 1024px) {
		height: 540px;
	}

	@media (max-width: 490px) {
		height: 100vh;
		width: 100%;
		padding: 5%;
	}
`;

const LogoAndData = styled.div`
	display: none;

	@media (max-width: 490px) {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10%;
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
	font-size: 1rem;
	cursor: pointer;
	align-self: flex-end;
	text-transform: uppercase;
`;

const HeaderAddModel = styled.div`
	display: flex;
	justify-content: space-between;
	img {
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
`;

const TitleAddModel = styled.h2`
	color: #85144B;
	font-size: 2rem;
	margin-top: 2%;
	margin-bottom: 1%;
	margin-left: 1rem;
  font-family: "Overpass", Bold;
  font-weight: 900;

	@media (max-width: 490px) {
		font-size: 1.5rem;
	}
`;

const ContainerInputs = styled.div`
	display: flex;
	flex-direction: column;
`;

const UploadFile = styled.label`
	width: 100%;
	display: flex;
	margin-bottom: 1rem;
	border-radius: 3px;
	padding: 3% 2.5%;
	border: ${props => (props.isError === true ? '2px solid #ff4136' : '1px solid #85144B')};
	background: #FAFAFA;
	font-size: 1.1rem;
	font-family: "Overpass", SemiBold;

	input[type='file'] {
		display: none;
	}
	img {
		width: 50px;
	}
`;

const TextUploadFile = styled.div`
	width: 34%;
	display: flex;
	flex-direction: column;
	margin-left: 1rem;
	font-family: "Overpass", SemiBold;
	font-size: .9rem;
	color: #959595;
	h3 {
		font-family: "Overpass", Bold;
		margin-bottom: .5rem;
		font-size: 1.2rem;
	}
	span {
		cursor: pointer;
		text-decoration: underline;
	}
	@media (max-width: 490px) {
		width: 52%;
	}
`;

const ContainerInput = styled.label`
`;

const TitleInputs = styled.h3`
	color: #85144B;
	font-size: .8rem;
	margin-left: 1rem;
	margin-bottom: 0.2rem;
  font-family: "Overpass", Bold;
  font-weight: 600;
	text-transform: uppercase;
`;

const Input = styled.input`
	width: 100%;
	margin-bottom: 1rem;
	border-radius: 3px;
	padding: 3% 2.5%;
	border: ${props => (props.isError === true ? '2px solid #ff4136' : '1px solid #85144B')};
	background: #FAFAFA;
	font-size: 1rem;
	font-family: "Overpass", SemiBold;
`;

const TextArea = styled.textarea`
	width: 100%;
	height: 150px;
	border-radius: 3px;
	padding: 3% 2.5%;
	margin-bottom: .5rem;
	border: ${props => (props.isError === true ? '2px solid #ff4136' : '1px solid #85144B')};
	background: #FAFAFA;
	font-size: 1rem;
	font-family: "Overpass", SemiBold;
	resize: none;
`;

const ButtonAdd = styled(Button)`
	align-self: flex-end;
	width: 55%;
	margin: 0;
	text-transform: uppercase;

	@media (max-width: 1024px) {
		font-size: .9rem;
		width: 55%;
		padding: .8rem;
	}

	@media (max-width: 768px) {
		width: 60%;
		padding: 1rem;
		margin: 0;
	}

	@media (max-width: 490px) {
		width: 100%;
		font-size: 1.2rem;
	}
`;

const ContainerModalDelete = styled(ContainerModal)`
	@media (max-width: 490px) {
		background: #ffffff;
	}
`;

const ModalDelete = styled(ModalAddModel)`
	width: 460px;
	height: auto;
	padding: 1% 1% 1% 2%;
	
	@media (max-width: 490px) {
		width: 100%;
		height: 100vh;
		padding: 5%;
	}
`;

const TitleModal = styled(HeaderAddModel)`
	img {
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
`;

const TitleDelete = styled(TitleAddModel)`
	margin-left: 0;
`;

const WrapTextModal = styled.div`
	@media (max-width: 490px) {
		height: 30%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
	}
`;

const TextModal = styled.p`
	margin-top: 4%;
	font-size: 1rem;
	font-family: 'Overpass', Regular;
	color: #404040;

	strong {
		font-family: 'Overpass', Bold;
		color: #404040;
	}
	@media (max-width: 490px) {
		margin: 0;
		font-size: 1.3rem;
	}
`;

const ButtonsModal = styled.div`
	display: flex;
	width: 98%;
	margin-top: 5%;
	@media (max-width: 490px) {
		margin: 0;
		width: 100%;
	}
`;

const ButtonCancel = styled(Button)`
	color: #FF4136;
	background: #ffffff;
	margin: 5% 0 0 0;
	box-shadow: none;
	@media (max-width: 490px) {
		margin: 0;
	}
`;

const ButtonConfirm = styled(Button)`
	margin: 5% 0 0 0;
	@media (max-width: 490px) {
		margin: 0;
	}
`;

const ErrorText = styled.p`
	color: #f00;
	width: 100%;
	text-align: right;
	margin-bottom: .5rem;
	font-size: .9rem;
`;

class DocumentsScreen extends Component {
	state = {
		initialModel: true,
		changeColorLabel: false,
		options: false,
		selectedOptions: '',
		modalDelete: false,
		addModel: false,
		downloadExport: DownloadIcon,
		downloadDelete: DeleteIcon,
		modelSelect: '',
		search: '',
		hoverExport: '',
		hoverDelete: '',
		colorTextExport: '',
		colorTextDelete: '',
		isFile: null,
  	redirect: false,
		document: {
			title: '',
			description: '',
			id: this.props.documentsList.length + 1,
		},
		isError: false,
	};

	componentDidMount() {
		if (this.props.documentsList.length !== 0) {
			this.setState({
				initialModel: false,
			});
		}
	}

	handleClickedLabel = (ev) => {
		ev.stopPropagation();
		this.setState({
			changeColorLabel: true,
		});
	}


	handleClickedLabelLeave = () => {
		this.setState({
			changeColorLabel: false,
		});
	}

	handleOnOptions = (item) => {
		this.setState({
			options: true,
			selectedOptions: item,
		});
	}

	handleOffOptions = () => {
		this.setState({
			options: false,
			selectedOptions: '',
		});
	}

		handleAddModel = () => {
			this.setState({
				addModel: true,
			});
		}

		handleCancelAddModel = () => {
			this.setState({
				addModel: false,
				isError: false,
			});
		}

		handleModalDelete = () => {
			this.setState({
				modalDelete: true,
				options: false,
			});
		}

		handleCancelDelete = () => {
			this.setState({
				modalDelete: false,
			});
		}

	handleModelChange = (field, e) => {
		const { document } = this.state;
		document[field] = e.target.value;
		this.setState({
			document,
			isError: false,
			file: this.state.isFile,
		});
	}

		handleChangeColorExport = (item) => {
			this.setState({
				downloadExport: DownloadWhiteIcon,
				hoverExport: item,
				colorTextExport: '#ffffff',
			});
		}

		handleChangeColorLeaveExport = () => {
			this.setState({
				downloadExport: DownloadIcon,
				hoverExport: '',
				colorTextExport: '#85144B',
			});
		}

		handleChangeColorDelete = (item) => {
			this.setState({
				downloadDelete: DeleteIconWhite,
				hoverDelete: item,
				colorTextDelete: '#ffffff',
			});
		}

		handleChangeColorLeaveDelete = () => {
			this.setState({
				downloadDelete: DeleteIcon,
				hoverDelete: '',
				colorTextDelete: '#85144B',
			});
		}

	uploadFile = (e) => {
		const file = e.target.files[0];
		this.setState({
			isFiles: file.name,
		});
	}

		handleSelected = (item) => {
			this.setState({
				modelSelect: item,
			});
		}

		handleDelete = () => {
			// ev.preventDefault();
			this.props.deleteDocument(this.state.modelSelect.id);
			this.setState({
				modelSelect: '',
			});
			this.handleCancelDelete();
			// const documentsList = this.props;
			// documentsList.splice(documentsList.indexOf(this.props.documentsList), 1);
			// this.setState({
			// 	list,
			// 	modalDelete: false,
			// });
		}

		handleSearch = (e) => {
			this.setState({
				search: e.target.value,
			});
		}

		handleSubmit = (e) => {
			e.preventDefault();
			const { title, description, id } = this.state.document;
			const { isFiles } = this.state;
			if (title === '' || description === '' || isFiles === null) {
				this.setState({
					isError: true,
				});
			} else {
				this.props.addNewDocument({
					title, description, id, isFiles,
				});
				this.handleCancelAddModel();
			}
		}

		handleRedirect = () => {
			this.setState({ redirect: true });
		}


	renderModalModels = () => (
		<ContainerModal onClick={this.handleCancelAddModel}>
			<ModalAddModel
				onSubmit={this.handleSubmit}
				onClick={ev => ev.stopPropagation()}
			>
				<LogoAndData>
					<img src={logo} alt="Logo OSC Legal"/>
					<ParagraphContainer1>
  					{this.props.email && this.props.password && this.props.email === 'teste@gmail.com'
                && this.props.password === '12345678' ? 'Administrador' : this.props.name}
  				</ParagraphContainer1>
					<ParagraphSair onClick={this.handleRedirect}>
              sair
  				</ParagraphSair>
					{this.state.redirect && <Redirect exact to="/" />}
				</LogoAndData>
				<HeaderAddModel>
					<TitleAddModel>Adicionar Modelo</TitleAddModel>
					<img onClick={this.handleCancelAddModel} src={Exit} alt="Sair" />
				</HeaderAddModel>
				<ContainerInputs>
					<UploadFile
						validationModel={this.state.validationModel}
						htmlFor='upload-file'
						isError={this.state.isError}
					>
						<input
							onChange={this.uploadFile}
							id='upload-file'
							type="file"
							placeholder="Anexar Modelo"
						/>
						<img src={documentWhite} alt="Anexar Documento" />
						<TextUploadFile>
							<h3>Anexar Modelo</h3>
							<p>Arraste o documento para cá ou <span>Clique aqui</span></p>
						</TextUploadFile>
					</UploadFile>
					<ContainerInput>
						<TitleInputs>Nome do modelo</TitleInputs>
						<Input
							validationModel={this.state.validationModel}
							value={this.props.documentsList.title}
							onChange={e => this.handleModelChange('title', e)}
							type="text"
							placeholder="Digitar nome do documento"
							isError={this.state.isError}
						/>
					</ContainerInput>
					<ContainerInput>
						<TitleInputs>Descrição</TitleInputs>
						<TextArea
							validationModel={this.state.validationModel}
							value={this.props.documentsList.description}
							onChange={e => this.handleModelChange('description', e)}
							type="text"
							placeholder="Como esse documento é usado"
							isError={this.state.isError}
						/>
					</ContainerInput>
				</ContainerInputs>
				<span>
					{this.state.isError && <ErrorText>Preencha todos os valores</ErrorText>}
				</span>
				<ButtonAdd type="submit">Adicionar</ButtonAdd>
			</ModalAddModel>
		</ContainerModal>
	)

	renderModalDelete = () => (
		<ContainerModalDelete onClick={this.handleCancelDelete}>
			<ModalDelete onClick={e => e.stopPropagation()}>
				<TitleModal>
					<TitleDelete>Excluir Modelo</TitleDelete>
					<img onClick={this.handleCancelDelete} src={Exit} alt="Sair" />
				</TitleModal>
				<WrapTextModal>
					<TextModal>
						Após ser excluido, um modelo não pode ser recuperado.
					</TextModal>
					<TextModal>
						Você deseja excluir o <strong>{this.state.modelSelect.title}</strong> permanentemente?
					</TextModal>
				</WrapTextModal>
				<ButtonsModal>
					<ButtonCancel onClick={this.handleCancelDelete}>Cancelar</ButtonCancel>
					<ButtonConfirm onClick={this.handleDelete}>Confirmar</ButtonConfirm>
				</ButtonsModal>
			</ModalDelete>
		</ContainerModalDelete>
	)

	render() {
		const documentsList = (this.state.search !== '')
			? this.props.documentsList.filter(model => model.title.match(new RegExp(this.state.search, 'i'))) : this.props.documentsList;

		return (
			<Container onClick={this.handleClickedLabelLeave}>
				<Header />
				<MaximumWidth>
					<ContainerHeader>
						<TitleSearch>Modelos de Documentos</TitleSearch>
						<ContainerSearch>
							<SearchText>Pesquisar</SearchText>
							<ContainerSearchInput
								onClick={this.handleClickedLabel}
								clickLabel={this.state.changeColorLabel}>
								<SearchInput
									onChange={this.handleSearch}
									placeholder="Digite aqui para pesquisar"
								/>
								<img src={magnifyingGlass} alt="Lupa" />
							</ContainerSearchInput>
						</ContainerSearch>
					</ContainerHeader>
					<ContainerContent>
						<ContainerAddModel initialModel={this.state.initialModel}>
							<AddModelImage src={ImageDocument}/>
							<Button onClick={this.handleAddModel}>Adicionar Modelo</Button>
							{this.state.addModel
							&& this.renderModalModels()}
						</ContainerAddModel>
						<InitialAddModel initialModel={this.state.initialModel}>
							<TitleInitialAddModel>Você ainda não tem nenhum documento</TitleInitialAddModel>
							<TextInitialAddModel>Escolha um modelo de documento clicando em <a onClick={this.handleAddModel}>Adicionar Documento</a></TextInitialAddModel>
						</InitialAddModel>
						<ContainerScroll initialModel={this.state.initialModel}>
							<ContainerModels initialModel={this.state.initialModel}>
								{documentsList.map((item, index) => (
									<ContainerModel key={item}
										style={{ margin: index === documentsList.length - 1 && '0 0 10rem 0' }}
										zIndex={this.state.addModel}
										displayBefore={this.state.modalDelete}
										onMouseEnter={() => this.handleOnOptions(item)}
										onMouseLeave={this.handleOffOptions}>
										<ContainerModelDescription>
											<span>
												<ModelNumber>{item.id}</ModelNumber>
												<ModelTitle>{item.title}</ModelTitle>
											</span>
											<ModelParagraph>{item.description}</ModelParagraph>
										</ContainerModelDescription>
										<ContainerOptions
											contOptions={this.state.options && (this.state.selectedOptions === item)}>
											<Option
												onMouseEnter={() => this.handleChangeColorExport(item)}
												onMouseLeave={this.handleChangeColorLeaveExport}
											>
												<OptionImage
													src={this.state.hoverExport === item ? this.state.downloadExport : DownloadIcon}
													alt="Download" />
												<OptionText
													colorTextButton={this.state.hoverExport === item ? this.state.colorTextExport : '#85144B'}
												>
												Exportar
												</OptionText>
											</Option>
											<Option
												onMouseEnter={() => this.handleChangeColorDelete(item)}
												onMouseLeave={this.handleChangeColorLeaveDelete}
												onClick={this.handleModalDelete}
											>
												<OptionImage
													src={this.state.hoverDelete === item ? this.state.downloadDelete : DeleteIcon}
													alt="Deletar" />
												<OptionText
													colorTextButton={this.state.hoverDelete === item ? this.state.colorTextDelete : '#85144B'}
													onClick={() => this.handleSelected(item)}
												>
												Excluir
												</OptionText>
											</Option>
										</ContainerOptions>
									</ContainerModel>
								))}
								{this.state.modalDelete
									&& this.renderModalDelete()}
							</ContainerModels>
						</ContainerScroll>
					</ContainerContent>
				</MaximumWidth>
			</Container>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsScreen);
