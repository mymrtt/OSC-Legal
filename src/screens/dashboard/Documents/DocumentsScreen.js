// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Header from '../components/Header';
import logo from '../../../assets/logo.svg';

// Images
import DocumentUser from '../../../assets/document-user.svg';
import ImageDocument from '../../../assets/document.png';
import magnifyingGlass from '../../../assets/magnifyingGlass.svg';
import DownloadIcon from '../../../assets/download.svg';
import DownloadWhiteIcon from '../../../assets/downloadwhite.svg';
import Exit from '../../../assets/exit.svg';
import DeleteIcon from '../../../assets/delete.svg';
import DeleteIconWhite from '../../../assets/deleteWhite.svg';
import documentWhite from '../../../assets/documentWhite.svg';
import ArrowDownIcon from '../../../assets/caminho.svg';

// Redux
import { addNewDocument, deleteDocument } from '../../../dataflow/modules/documents-modules';

const mapStateToProps = state => ({
	documentsList: state.documents.documentsList,
	email: state.onboarding.users.email,
	password: state.onboarding.users.password,
	name: state.onboarding.users.name,
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
	margin-top: 3rem;
	width: 100%;
	min-width: 100%;
	max-width: 1440px;
	display: flex;

	@media(max-width: 648px) {
		margin-top: 1rem;
	}
`;

const Teste = styled.div`
	width: 65%;
	@media(max-width: 648px) {
		width: 100%;
	}
`;

const ContainerHeader = styled.div`
	padding-right: 3rem;
  display: flex;
  justify-content: flex-end;

	@media (max-width: 1024px) {
		padding-right: 2rem;
	}

	@media (max-width: 490px) {
		padding-right: 0;
		margin: 1.2rem;
	}
`;

const AddModelImage = styled.img`
	width: 180px;

	@media (max-width: 1024px) {
		width: 140px;
	}

	@media (max-width: 768px) {
		width: 120px;
	}

	@media (max-width: 490px) {
		display: none;
	}
`;

const TitleSearch = styled.p`
	padding-bottom: 2rem;
  color: #85144B;
  font-size: 2rem;
  font-family: "Overpass", Black;
  font-weight: 900;

	@media (max-width: 1024px) {
		font-size: 1.5rem;
	}

	@media (max-width: 768px) {
		width: 60%;
		font-size: 1.5rem;
		text-align: center;
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
	justify-content: center;

	@media(max-width: 1024px) {
		padding-right: 1rem;
	}

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
		${'' /* display: flex;
		order: 1;
		width: 100%;
		justify-content: flex-end;
		z-index: 8; */}
		display: none;
	}
`;

const ContainerAddModelMob = styled.div`
	display: none;

	@media(max-width: 648px) {
		display: flex;
		width: 100%;
    justify-content: center;
	}
`;

const InitialAddModel = styled.div`
	width: 100%;
	height: 11rem;
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: #959595;
	border: 1px solid #959595;
	border-radius: 3px;

	@media (max-width: 1024px) {
		padding: 0 1%;
		width: 95%;
	}

	@media (max-width: 768px) {
		padding: 0 5%;
		width: 100%;
	}

	@media (max-width: 490px) {
		width: 94%;
		padding: 0 6%;
		margin-bottom: 2rem;
		margin-left: .7rem;
	}
`;

const ContainerScroll = styled.div`
	max-height: 73vh;
	width: 100%;
	max-height: 65vh;
	overflow-y: scroll;
	display: ${props => (props.initialModel ? 'none' : 'inline-block')};
	margin-right: 1rem;

	&::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 1680px) {
		max-height: 69vh;
	}

	@media (max-width: 1440px) {
		max-height: 65vh
	}

	@media(max-width: 768px) {
		max-height: 85vh
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
	margin-right: 1.2rem;
	width: 60%;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	@media (max-width: 1024px) {
		margin-right: 1.1rem;
		width: 55%;
	}

	@media (max-width: 768px) {
		margin-right: 0;
    width: 80%;
	}

	@media (max-width: 490px) {
		width: 100%;
		margin-right: 0;
		display: flex;
		justify-content: center;
	}
`;

const SearchText = styled.p`
  color: #231F20;
  font-size: 1.3rem;
  font-family: Overpass, Bold;
	font-weight: 600;
  margin-right: 1rem;

	@media (max-width: 490px) {
		display: none;
	}
`;

const ContainerSearchInput = styled.label`
	display: flex;
	width: 100%;
	border-radius: 3px;
	padding: 0.2rem 1rem 0.1rem 1rem;
	border: 0.5px solid #85144B;
	border-bottom-right-radius: ${props => (props.filter ? '0' : '3px')};
	border-bottom-left-radius: ${props => (props.filter ? '0' : '3px')};
	align-items: center;
	justify-content: space-between;
	position: relative;

	img {
		margin: 0.4rem 0 0.5rem 0.5rem;
    width: 1.09rem;
	}

	@media (max-width: 490px) {
		width: 95%;
	}
`;

const SearchInput = styled.input`
  width: 100%;
	border: 0;
	outline: none;
	padding-left: .5rem;
	font-size: 1rem;
	font-family: Overpass, Regular;
	color: #85144B;

	@media (max-width: 1024px) {
		font-size: 0.9rem;
	}

	@media (max-width: 768px) {
		font-size: 1rem;
	}

	@media (max-width: 490px) {
		font-size: 1rem;
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
	width: 100%;
	border-radius: 3px;
	height: 100%;
	display: flex;
	cursor: pointer;
	position: relative;
	z-index: ${props => (props.zIndex ? '-1' : 0)};
	align-self: center;

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
				margin-top: 21.6%;
    		top: 100%;
				z-index: 6;
				right: 0;
			}

			@media (max-width: 375px) {
				margin-top: 24.2%;
			}
		}
	}
	@media (max-width: 1024px) {
		padding-right: 1.1rem;
		width: 95%;
	}

	@media (max-width: 768px) {
		padding: 1.3rem 1rem 1.3rem 1.3rem;
		width: 100%;
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
	display: ${props => (props.contOptions ? 'flex' : 'none')};
	width: 15%;
	align-items: flex-end;
	justify-content: center;
	flex-direction: column;

	@media (max-width: 1024px) {
		width: 25%;
		padding: 0 0 0 3.4%;
	}

	@media (max-width: 768px) {
		width: 30%;
		padding: 0 0 0 4.5%;
	}

	@media (max-width: 490px) {
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
		padding: 0;
	}
`;

const Option = styled.button`
	margin-bottom: 1rem;
	width: 8rem;
	height: 2.5rem;
	padding: 0 1rem;
	display: ${props => (props.hidden ? 'none' : 'flex')};
	justify-content: space-between;
	background: transparent;
	border: none;
	border-radius: 4px;

	&:hover {
		background: #FF4136;
	}

	@media (max-width: 768px) {
		width: 7rem;
		padding: 0 0.8rem;
	}

	@media (max-width: 490px) {
		align-self: center;
		margin-bottom: 0;
		height: 100%;
		width: 100%;
		padding: 0 15%;
		border-radius: initial;
	}
`;

const OptionImage = styled.img`
`;

const OptionText = styled.p`
	color: ${props => (props.colorTextButton)};
	font-size: 1.2rem;
	font-family: "Overpass", SemiBold;

	p {
		margin-right: 0.8rem;
	}

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
	width: 18.75rem;
	height: 4.7rem;
	border: 0;
  color: #fff;
  box-shadow: 0 3px 6px #00000029;
  border-radius: 3px;
  font-size: 1.2rem;
	font-family: "Overpass", SemiBold;
  font-weight: bold;
	background-color: #FF4136;
	display: ${props => props.hidden ? 'none' : 'block'};

	@media (max-width: 1024px) {
		padding: 0;
		width: 65%;
		font-size: 1.2rem;
		height: 4rem;
	}

	@media (max-width: 768px) {
		font-size: 1.2rem;
		width: 70%;
	}

	@media (max-width: 490px) {
		position:fixed;
		bottom: 1vh;
		align-self: center;
		margin: 0;
		font-size: 1.2rem;
		width: ${props => (props.modelMob ? '86%' : '95%')};
		z-index: 6;
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
	min-height: 580px;
	background: #FFFFFF;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 4px;
	padding: 1rem 1.5rem;

	@media (max-width: 1024px) {
		height: 540px;
	}

	@media (max-width: 490px) {
		height: 100vh;
		width: 100%;
		position: absolute;
		top: 0%;
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
		margin-bottom: 1rem;
	}
`;

const ContainerInputs = styled.div`
	display: flex;
	flex-direction: column;

	@media(max-width: 648px){
		height: 80%;
	}
`;

const UploadFile = styled.label`
	width: 100%;
	display: flex;
	margin-bottom: 1rem;
	border-radius: 3px;
	padding: 3% 2.5%;
	border: ${props => (props.isError === true ? '2px solid #F00' : '1px solid #FFCFCD')};
	background: #FAFAFA;
	font-size: 1.1rem;
	font-family: "Overpass", SemiBold;

	@media(max-width: 490px){
		margin-bottom: 2rem;
	}

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
		font-size: 1.1rem;
		color:${props => (props.file === null ? '#959595' : 'green')};
	}
	span {
		cursor: pointer;
		text-decoration: underline;
		${''}
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
	border: ${props => (props.isError === true ? '2px solid #F00' : '1px solid #FFCFCD')};
	background: #FAFAFA;
	font-size: 1rem;
	font-family: "Overpass", SemiBold;

	@media(max-width: 490px){
		margin-bottom: 2.5rem;
	}
`;

const TextArea = styled.textarea`
	width: 100%;
	height: 150px;
	border-radius: 3px;
	padding: 3% 2.5%;
	margin-bottom: .5rem;
	border: ${props => (props.isError === true ? '2px solid #F00' : '1px solid #FFCFCD')};
	background: #FAFAFA;
	font-size: 1rem;
	font-family: "Overpass", SemiBold;

	@media (max-width: 490px) {
		height: 9.37rem;
		margin-bottom: 2rem;
		width: 100%;
	}
	resize: none;
`;

const ButtonAdd = styled(Button)`
	align-self: flex-end;
	width: 18.75rem;
	height: 4rem;
	font-size: 1.2rem;
	margin: 0;
	text-transform: uppercase;

	@media (max-width: 1024px) {
		font-size: .9rem;
		width: 55%;
		padding: .8rem;
	}

	@media (max-width: 768px) {
		width: 45%;
		padding: 1rem;
		font-size: 1.3rem;
		margin: 0;
	}

	@media (max-width: 490px) {
		width: 90%;
		font-size: 1.2rem;
		align-self: center;
	}
`;

const ContainerModalDelete = styled(ContainerModal)`
	@media (max-width: 490px) {
		background: #ffffff;
	}
`;

const ModalDelete = styled.div`
	background: #FFF;
	width: 480px;
	padding: 1% 1% 1% 2%;


	@media (max-width: 490px) {
		width: 100%;
		height: 100vh;
		padding: 5%;
		    display: flex;
    justify-content: space-between;
    flex-direction: column;
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
    ${''}
    flex-direction: column;
		${''}
	}
`;

const TextModal = styled.p`
	margin: 1.5rem  0;
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
	margin-right: .5rem;
	box-shadow: none;
	width: 50%;
	height: 3.5rem;

	@media (max-width: 1024px) {
		margin: 5% 0 0 0;
		width: 50%;
	}

	@media (max-width: 490px) {
		margin: 0;
		position: initial;
		width: 100%;
	}
`;

const ButtonConfirm = styled(Button)`
	margin: 5% 0 0 0;
	width: 50%;
	height: 3.5rem;

	@media (max-width: 1024px) {
		margin: 5% 0 0 0;
		width: 50%;
	}

	@media (max-width: 490px) {
		margin: 0;
		position: initial;
		width: 100%;
	}
`;

const ErrorText = styled.p`
	color: #f00;
	width: 100%;
	text-align: right;
	margin-bottom: .5rem;
	font-size: .9rem;
	font-family: Overpass;
`;

const BoxFilter = styled.div`
	width: 21.3rem;
	display: flex;
	flex-direction: column;
	border: 1px solid #85144B;
	padding: .5rem; 
	position: absolute;
	right: 0;
	left: 0;
	top: 1.85rem;
	background: #FFF;
`;

const Org = styled.div`
	color: #231F20;
	font-size: .75rem;
	font-family: 'Overpass';
	font-weight: 600;
	cursor: pointer;	
	width: 100%;
	padding: .3rem 0;

	:hover{
		background: #FFCFCD;
		border: 1px solid #85144B;
	}
`;

const TextOrg = styled.p`
	font-size: .8rem;
	color: #959595;
	font-family: 'Overpass', Regular;
`;

class DocumentsScreen extends Component {
	state = {
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
		redirect: false,
		isFile: null,
		hidden: false,
		document: {
			title: '',
			description: '',
			id: 0,
		},
		isError: false,
		isErrorDescription: false,
		isErrorTitle: false,
		isErrorFile: false,
		isErrorTitleQtd: false,
		isBoxFilter: false,
		Orgs: [
			'vai na web',
			'instituto precisa ser',
			'celebrations',
			'crianças felizes',
		],
	};

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
			isFile: null,
			isErrorDescription: false,
			isErrorFile: false,
			isErrorTitle: false,
			isErrorTitleQtd: false,
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
			isErrorFile: false,
			isErrorTitle: false,
			isErrorDescription: false,
			isErrorTitleQtd: false,
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
		e.preventDefault();
		const reader = new FileReader();
		const file = e.target.files[0];

		reader.onloadend = () => {
			this.setState({
				isFile: reader.result,
				isErrorFile: false,
			});
		};
		reader.readAsDataURL(file);
	}

	handleSelected = (item) => {
		this.setState({
			modelSelect: item,
		});
	}

	handleDelete = () => {
		this.props.deleteDocument(this.state.modelSelect.id);
		this.setState({
			modelSelect: '',
		});
		this.handleCancelDelete();
	}

	handleSearch = (e) => {
		this.setState({
			search: e.target.value,
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.handleErrors();
	}

	handleErrors = () => {
		const { title, description } = this.state.document;
		const { isFile } = this.state;

		if (isFile === null) {
			this.setState({
				isErrorFile: true,
			});
		} else {
			this.setState({
				isErrorFile: false,
			});
		}
		if (description === '') {
			this.setState({
				isErrorDescription: true,
			});
		} else {
			this.setState({
				isErrorDescription: false,
			});
		}
		if (title === '') {
			this.setState({
				isErrorTitle: true,
				isErrorTitleQtd: false,
			});
		} else {
			this.setState({
				isErrorTitle: false,
			});
		}
		if (title.length < 4 && title.length > 1) {
			this.setState({
				isErrorTitleQtd: true,
			});
		} else {
			this.setState({
				isErrorTitleQtd: false,
			});
		}
		if (title === '' && description === '' && isFile === null) {
			this.setState({
				isError: true,
				isErrorTitle: false,
				isErrorDescription: false,
				isErrorFile: false,
				isErrorTitleQtd: false,
			});
		}
		if (title !== '' && title.length > 4 && description !== '' && isFile !== null) {
			this.props.addNewDocument({
				title, description, isFile,
			});
			this.setState({
				document: {},
				isFile: null,
			});
			this.handleCancelAddModel();
		}
	}

	handleRedirect = () => {
		this.setState({ redirect: true });
	}

	openBoxFilter = (ev) => {
		ev.stopPropagation();
		this.setState({
			isBoxFilter: !this.state.isBoxFilter,
		});
	}

	closeBoxFilter = () => {
		this.setState({
			isBoxFilter: false,
		});
	}

	renderModalModels = () => {
		const Messages = [
			'Adicione um nome ao seu modelo',
			'Adicione uma descrição para o seu modelo',
			'Adicione um modelo',
			'Preencha todos os campos',
			'Nome do modelo deve ter no mínimo 4 letras',
		];
		return (
			<ContainerModal onClick={this.handleCancelAddModel}>
				<ModalAddModel
					onSubmit={this.handleSubmit}
					onClick={ev => ev.stopPropagation()}
				>
					<LogoAndData>
						<img src={logo} alt="Logo OSC Legal" />
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
							/>
							<img src={documentWhite} alt="Anexar Documento" />
							<TextUploadFile file={this.state.isFile}>
								<h3>{this.state.isFile === null ? 'Adicionar modelo' : 'Modelo adicionado'}</h3>
								<p>
									<span>Clique aqui</span>
									{this.state.isFile !== null && ' para adicionar outro.'}
								</p>
							</TextUploadFile>
						</UploadFile>
						{this.state.isErrorFile && <ErrorText>{Messages[2]}</ErrorText>}
						<ContainerInput>
							<TitleInputs>Nome do modelo</TitleInputs>
							<Input
								validationModel={this.state.validationModel}
								value={this.state.document.title}
								onChange={e => this.handleModelChange('title', e)}
								type="text"
								placeholder="Digitar nome do documento"
								isError={this.state.isError}
							/>
							{this.state.isErrorTitleQtd && <ErrorText>{Messages[4]}</ErrorText>}
							{this.state.isErrorTitle && <ErrorText>{Messages[0]}</ErrorText>}
						</ContainerInput>
						<ContainerInput>
							<TitleInputs>Descrição</TitleInputs>
							<TextArea
								validationModel={this.state.validationModel}
								value={this.state.document.description}
								onChange={e => this.handleModelChange('description', e)}
								type="text"
								placeholder="Como esse documento é usado"
								isError={this.state.isError}
							/>
							{this.state.isErrorDescription && <ErrorText>{Messages[1]}</ErrorText>}
						</ContainerInput>
					</ContainerInputs>
					<span>
						{this.state.isError && <ErrorText>{Messages[3]}</ErrorText>}
					</span>
					<ButtonAdd type="submit">Adicionar</ButtonAdd>
				</ModalAddModel>
			</ContainerModal>
		);
	}

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
			? this.props.documentsList.filter(model => model.title.match(new RegExp(this.state.search, 'i')))
			: this.props.documentsList;
		const { isAdmin } = this.props;
		const { addModel, modalDelete } = this.state;

		return (
			<Container onClick={this.handleClickedLabelLeave || this.closeBoxFilter}>
				<Header />
				<MaximumWidth>
					<ContainerAddModel>
						{isAdmin ? <TitleSearch>Modelos de Documentos</TitleSearch> : <TitleSearch>Documentos</TitleSearch>}
						{
							isAdmin ? (
								<AddModelImage src={ImageDocument} />
							) : (
								<AddModelImage src={DocumentUser} />
							)}
						{isAdmin ? (
							<Button
								onClick={this.handleAddModel}
								hidden={this.state.addModel || this.state.deleteModal}
							>
									Adicionar Modelo
							</Button>
						) : (
								<Button
									onClick={this.handleListDoc}
								>
									Adicionar Documento
							</Button>
						)}
					</ContainerAddModel>
					<Teste>
						<ContainerHeader>
							<ContainerSearch>
								<SearchText>
									{isAdmin ? 'Pesquisar' : 'Organização'}
								</SearchText>
								{/* {isAdmin ? ( */}
								<ContainerSearchInput
									filter={this.state.isBoxFilter}
									onClick={this.openBoxFilter}
								>
									{isAdmin
										? <SearchInput
											onChange={this.handleSearch}
											placeholder="Digite aqui para pesquisar"
										/> : <TextOrg>Selecionar Organização</TextOrg>}
									{isAdmin
										? <img src={magnifyingGlass} alt="Lupa" style={{ cursor: 'pointer' }}/>
										: <img src={ArrowDownIcon}
											alt="arrow"
											style={{ cursor: 'pointer' }}
											onClick={this.openBoxFilter}
										/>
									}
									{this.state.isBoxFilter && (
										<BoxFilter onClick={ev => ev.stopPropagation()}>
											{this.state.Orgs.map(orgs => (
												<Org key={orgs}>{orgs}</Org>
											))}
										</BoxFilter>
									)}
								</ContainerSearchInput>
							</ContainerSearch>
						</ContainerHeader>
						<ContainerContent>
							<ContainerScroll>
								<ContainerModels>
									{documentsList && documentsList.length > 0 ? (
										documentsList.map((item, index) => (
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
															alt="Exportar" />
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
															<p>Excluir</p>
														</OptionText>
													</Option>
												</ContainerOptions>
											</ContainerModel>
										))
									) : (
										<InitialAddModel>
											<TitleInitialAddModel>
												{isAdmin ? (
													'Você ainda não possui um modelo'
												) : (
													'Você não tem nenhum documento'
												)}
											</TitleInitialAddModel>
											<TextInitialAddModel>
												Escolha um modelo de documento
												clicando em <span onClick={this.handleAddModel}>Adicionar Modelo</span>
											</TextInitialAddModel>
										</InitialAddModel>
									)}
									<ContainerAddModelMob>
										<Button modelMob
											hidden={this.state.addModel || this.state.modalDelete}
											onClick={this.handleAddModel}
										>
											Adicionar Modelo
										</Button>
									</ContainerAddModelMob>
									{this.state.addModel && this.renderModalModels()}
									{this.state.modalDelete && this.renderModalDelete()}
								</ContainerModels>
							</ContainerScroll>
						</ContainerContent>
					</Teste>
				</MaximumWidth>
			</Container>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentsScreen);
