// Libs
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';

// Components
import Header from '../components/Header';
import ImageCaminho from '../../../assets/caminho.svg';
import ModalOrganization from './ModalOrganization';

// Image
import authorizationIcon from '../../../assets/authorization.svg';
import payIcon from '../../../assets/pay.svg';
import freeIcon from '../../../assets/free.svg';
import extendDeadlineIcon from '../../../assets/extendDeadline.svg';
import selectMaisMobile from '../../../assets/selectMais.svg';

// Redux
const mapStateToProps = state => ({
	typeAccount: state.onboarding.users.typeAccount,
	tableDatas: state.dashboard.tableDatas,
});

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	overflow-x: hidden;
	overflow-y: scroll;
`;

const ContainerSelectedViewBy = styled.div`
	padding: 2.5rem .9rem 0 4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 4;
	width: 95%;
	margin: 0 auto;

	/* @media(max-width: 1024px) {
		padding: 3rem 3rem 0 4rem;
	} */

	@media (max-width: 768px) {
		padding: 2rem 4rem 0 4rem;
		align-items: center;
		flex-direction: column;
	}

	@media (max-width: 648px) {
		padding: 1rem 2rem 1rem 2rem;
	}
`;

const TitleManageOrgs = styled.h2`
	color: #85144B;
	font-size: 2rem;
	font-family: "Overpass", Black;
	font-weight: 900;

	@media (max-width: 648px) {
		display: none;
	}
`;

const SelectViewBy = styled.div`
	display: flex;
	flex-direction: row;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const SpanSelect = styled.div`
	width: 15rem;
	margin-top: 0.5rem;
	display: flex;
  flex-direction: column;
	position: relative;
	z-index: 2;

	@media (max-width: 940px) {
		width: 47%;
	}
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const TitleViewBy = styled.h2`
	color: #231F20;
	font-size: 1.125rem;
	font-family: Overpass;
	font-weight: bold;
	margin: 0.8rem 0.8rem 0 0;
	display: flex;
  align-items: center;

	@media (max-width: 768px) {
		display: none;
	}
`;

const InputSelect = styled.div`
	width: 100%;
	background-color: #FFFFFF;
	border: 0.5px solid #85144B;
	border-radius: 3px 3px 0 0;
	display: flex;
	color: #959595;
	justify-content: space-between;
	font-size: 0.875rem;
	padding: 0.5rem;
	cursor: pointer;
	z-index: 2;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

const SelectedViewByText = styled.p`
	width: 100%;
	color: ${props => (props.color === 'Selecionar status' ? '#959595' : '#85144B')};
	font-family: Overpass, Regular;
	padding-left: 0.3rem;

`;

const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: transparent;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
`;

const InputSelectedItem = styled.div`
	width: 100%;
	border: 0.5px solid #85144B;
	border-radius: 0 0 3px 3px;
	background-color: #FFFFFF;
	position: absolute;
	top: 32px;
	cursor: pointer;
`;

const SelectedItem = styled.p`
	font-size: 0.9rem;
	color: #85144B;
	font-family: Overpass, Regular;
	padding: 0.4rem;

	&:hover {
		background-color: #FFCFCD;
		border: 0.5px solid #85144B;
	}

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

const Table = styled.table`
	max-width: 100%;
	width: 100%;
	border-spacing: 0;
	padding: 1.5rem 4.5rem 0;
	margin: 1.5rem;


	@media (max-width: 768px) {
		padding: 2rem 0 0 0;
	}

	@media (max-width: 648px) {
		padding: 0;
		padding-top: 1rem;
		${({ modal }) => modal && css`
			display: none;
		`}
	}
`;

const Thead = styled.thead`
	text-align: left;

	@media (max-width: 768px) {
		display: none;
	}
`;

const Tr = styled.tr`
	height: 2.3rem;
	padding-left: 0.7rem;
	position: relative;
	cursor: pointer;

	&:nth-child(even) {
    background-color: #FFCFCD;
  }
	&:nth-child(odd) {
    background-color: #FFFFFF;
	}

	@media(max-width: 768px) {
		margin-bottom: 1rem;
		padding: 1rem 1rem 15.5rem 1rem;
		display: flex;
    flex-wrap: wrap;
	}

	@media(max-width: 768px) {
		/* margin-bottom: 1rem; */
		padding: 1rem 1rem 10rem 1rem;
		display: flex;
    flex-wrap: wrap;
	}
	@media(max-width: 648px) {
		padding: 1rem 1rem 12.5rem 1rem;
	}

	@media(max-width: 420px) {
		padding: 1rem 1rem 16rem 1rem;
	}
`;

const TableTitle = styled.th`
	/* width: 7rem; */
	color: #FFFFFF;
	font-size: 1rem;
	font-family: Overpass, Regular;
	background-color: #85144B;
	padding-left: 0.7rem;

	@media (max-width: 768px) {
		display: none;
	}
`;

const ImageMore = styled.img`
	display: none;

	@media(max-width: 648px) {
		display: flex;
		position: absolute;
		right: 15px;
	}
`;


const ContainerTableTitleMob = styled.span`
	display: none;

	@media (max-width: 768px) {
		padding-right: 1rem;
		padding-bottom: 1rem;
		display: flex;
		flex-direction: column;

		${({ selected }) => selected && css`
		/* img {display: block;} */
		p {display: none;}
		div {display: flex;}
	`}
	}
`;

const TextNoOrganitazion = styled.div`
	width: 89%;
	margin: 0 auto;
	height: 90vh;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 4rem;
	background: #FFF;

`;

const TextInformation = styled.p`
	font-size: 2rem;
	text-align: center;
	font-family: Overpass;
	color: #85144B;

	@media(max-width: 648px) {
		font-size: 1.5rem;
	}
`;

const Box = styled.div`
	display: none;
	flex-direction: row;

	@media(max-width: 768px) {
		display: ${props => (props.isClickedStatus ? 'flex' : 'none')};
	}
`;

const BoxButton = styled.button`
	width: 100%;
	height: 100%;
	border: none;
	background: none;
`;

const TableTitleMob = styled.th`
	display: none;

	@media(max-width: 768px) {
		display: flex;
		color: #85144B;
		font-size: 1rem;
		font-family: Overpass, Regular;
	}
`;

const TableList = styled.td`
	color: #404040;
	font-size: 0.95rem;
	padding: 0.5rem;

	@media (max-width: 768px) {
		padding: 0;
		display: ${props => (props.mob ? 'none' : 'flex')};
	}
`;

const ContainerStatus = styled.td`
	width: 6rem;
	padding: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: ${props => (props.desc ? 'flex-start' : 'space-evenly')};

	${({ selected }) => selected && css`
		img {display: block}
		p {display: none}
		div {display: flex}
	`}

	@media(max-width: 768px) {
		padding: 0;
	}
`;

const TextStatus = styled.p`
	color: ${props => (props.color)};
	font-size: 0.8rem;
	font-family: Overpass, Light;
	text-transform: uppercase;


	@media(max-width: 768px) {
		display: ${props => (props.isClickedName ? 'none' : 'flex')};
	}
`;

const ImageStatus = styled.img`
	width: 1.3rem;
  padding-right: 0.3rem;
	display: none;
	cursor: pointer;

	@media(max-width: 768px) {
		display: flex;
	}
`;

class OrganizationScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hovered: undefined,
			isModal: undefined,
			itemSelected: undefined,
			isSelected: undefined,
			selectedValue: 'Selecionar status',
			selectedItems: [
				'Selecionar status',
				{ select: 'Pendente de Autorização', filter: 'Autorizar' },
				{ select: 'Pendente de Pagamento', filter: 'Pendente' },
				'Isento',
				'Pago',
				'Vencido',
			],
			redirect: 'organization',
			tableTitles: [
				'Organização',
				'CPF',
				'Usuário',
				'E-mail',
				'Telefone',
				'Criado em',
				'Autorização',
				'Vencimento',
				'Status',
			],
			statusImgs: [
				{
					img: authorizationIcon,
					desc: 'Autorizar',
				},
				{
					img: payIcon,
					desc: 'Pago',
				},
				{
					img: freeIcon,
					desc: 'Isento',
				},
				{
					img: extendDeadlineIcon,
					desc: 'Prorrogar Prazo',
				},
			],
			selectedStatusImgs: undefined,
			selectedStatusOrg: undefined,
		};
	}

	isModalOpen = (item) => {
		this.setState({
			itemSelected: item,
			isModal: !this.state.isModal,
		});
	}

	isSelectOpen = (event) => {
		event.stopPropagation();
		this.setState({
			isSelected: !this.state.isSelected,
		});
	}

	handleSelectedValue = (item) => {
		this.setState({
			selectedValue: item,
			isSelected: false,
		});
	}

	handleClick = (item) => {
		this.setState({
			redirect: item,
		});
	};

	componentDidMount() {
		console.log(this.props.tableDatas);
	}

	handleSelectedStatus = (newStatus, item) => {
		const { tableDatas } = this.state;
		const newList = tableDatas.map((data) => {
			if (data === item) {
				return {
					...data,
					status: newStatus.desc,
					isChanged: true,
				};
			}
			return data;
		});
		this.setState({
			isClickedStatus: '',
			tableDatas: newList,
		});
	}

	handleClickedImageStatus = (item) => {
		this.setState({
			isClickedStatus: item.id,
		});
	};

	renderSelectedViewby = () => (
		<ContainerSelectedViewBy>
			{this.props.typeAccount === 'admin'
				? <TitleManageOrgs>Gerenciar organizações</TitleManageOrgs>
				: <h1>Minhas organizações</h1>
			}
			<SelectViewBy>
				{this.props.typeAccount === 'admin'
					? <TitleViewBy>Visualizar por:</TitleViewBy>
					: <p>Pesquisar</p>
				}
				<SpanSelect>
					<InputSelect onClick={this.isSelectOpen}>
						<SelectedViewByText color={this.state.selectedValue.select || this.state.selectedValue}>
							{this.state.selectedValue.select || this.state.selectedValue}
						</SelectedViewByText>
						<img src={ImageCaminho} alt="arrow" />
					</InputSelect>
					{this.state.isSelected && (
						<InputSelectedItem>
							{this.state.selectedItems.map((item, index) => (
								<SelectedItem
									onClick={() => this.handleSelectedValue(item)}
									key={index}
									hover={item}
								>
									{item.select || item}
								</SelectedItem>
							))}
						</InputSelectedItem>
					)}
				</SpanSelect>
			</SelectViewBy>
		</ContainerSelectedViewBy>
	)

	renderStatus = item => (
		<>
			<Box isClickedStatus={item.id === this.state.isClickedStatus}>
				{this.state.statusImgs.map((status, index) => (
					<ImageStatus
						key={index}
						src={status.img}
						alt={status.desc}
						onClick={() => this.handleSelectedStatus(status, item)}
					/>
				))}
			</Box>
			<BoxButton onClick={() => this.handleClickedImageStatus(item)}>
				<TextStatus color={item.isChanged ? '#FF4136' : '#85144B'}
					isClickedName={item.id === this.state.isClickedStatus}
				>
					{item.status}
				</TextStatus>
			</BoxButton>
		</>
	)

	renderTable = () => {
		const widthMob = (window.matchMedia('(max-width: 768px)').matches);
		return this.props.tableDatas.map(item => (
			<Tr key={item.organization}>
				{widthMob
					? <ContainerTableTitleMob>
						<TableTitleMob>Organização</TableTitleMob>
						<TableList>{item.organization}</TableList>
					</ContainerTableTitleMob>
					: <>
						<TableList onClick={() => this.isModalOpen(item)}>{item.organization}</TableList>
					</>
				}
				<TableList mob>{item.cpf}</TableList>
				<TableList mob>{item.user}</TableList>
				{widthMob
					? <> <ContainerTableTitleMob>
						<TableTitleMob>E-mail</TableTitleMob>
						<TableList>{item.email}</TableList>
					</ContainerTableTitleMob>
					<ContainerTableTitleMob>
						<TableTitleMob>Telefone</TableTitleMob>
						<TableList>{item.telephone}</TableList>
					</ContainerTableTitleMob>
					<ContainerTableTitleMob>
						<TableTitleMob>Criado em</TableTitleMob>
						<TableList>{item.createdIn}</TableList>
					</ContainerTableTitleMob>
					<ContainerTableTitleMob>
						<TableTitleMob>Autorização</TableTitleMob>
						<TableList>{item.authorization}</TableList>
					</ContainerTableTitleMob>
					<ContainerTableTitleMob>
						<TableTitleMob>Vencimento</TableTitleMob>
						<TableList>{item.dueDate}</TableList>
					</ContainerTableTitleMob>
					</>
					: <>
						<TableList onClick={() => this.isModalOpen(item)}>{item.email}</TableList>
						<TableList onClick={() => this.isModalOpen(item)}>{item.telephone}</TableList>
						<TableList>{item.createdIn}</TableList>
						<TableList>{item.authorization}</TableList>
						<TableList>{item.dueDate}</TableList>
					</>
				}
				{widthMob
					? <ContainerTableTitleMob
					// selected={this.state.hovered === item}
					>
						<TableTitleMob>Status</TableTitleMob>
						{this.renderStatus(item)}
					</ContainerTableTitleMob>
					: <>
						<ContainerStatus
							onMouseEnter={() => this.setState({ hovered: item })}
							onMouseLeave={() => this.setState({ hovered: undefined })}
							selected={this.state.hovered === item}
						>
							{this.renderStatus(item)}
						</ContainerStatus>
					</>
				}
				<ImageMore src={selectMaisMobile} onClick={() => this.isModalOpen(item)}/>
			</Tr>
		));
	}

	renderAllTable = () => {
		const { tableDatas, selectedValue } = this.state;
		let listTable = this.renderTable(tableDatas);
		if (
			selectedValue !== 'Selecionar status'
		) {
			listTable = this.renderTable(tableDatas.filter(item => item.status === (selectedValue.filter || selectedValue)));
		}
		return listTable;
	}

	render() {
		return (
			<Container>
				{/* {this.props.typeAccount === 'admin'
					? <button> - </button>
					: <button> Criar Organização </button>
				} */}
				{this.state.isSelected && <Overlay onClick={this.isSelectOpen} />}
				{this.state.isModal
				&& <ModalOrganization item={this.state.itemSelected} handleClosedModal={this.isModalOpen} />
				}
				<Header />
				{this.renderSelectedViewby()}
				<Table modal={this.state.isModal}>
					<Thead>
						<Tr>
							{this.state.tableTitles.map(title => (
								<TableTitle key={title}>{title}</TableTitle>
							))}
						</Tr>
					</Thead>
					<tbody>
						{this.renderAllTable()}
					</tbody>
				</Table>
				{this.renderAllTable().length === 0 && (
					<TextNoOrganitazion>
						<TextInformation>Não há organização.</TextInformation>
					</TextNoOrganitazion>
				)}
			</Container>
		);
	}
}

export default connect(mapStateToProps, null)(OrganizationScreen);
