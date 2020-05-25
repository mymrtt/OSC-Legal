/* eslint-disable no-mixed-spaces-and-tabs */
// Libs
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';

// Components
import Header from '../components/Header';
import ModalOrganization from './ModalOrganization';
import ModalCreateOrganization from './ModalCreateOrganization';
import Button from '../../../components/Button';
// import Sucessfully from './ModalSucessfully';

// Image
import ImageCaminho from '../../../assets/caminho.svg';
import ArrowUpIcon from '../../../assets/arrow-up.svg';
import magnifyingGlass from '../../../assets/magnifyingGlass.svg';
import authorizationIcon from '../../../assets/authorization.svg';
import payIcon from '../../../assets/pay.svg';
import freeIcon from '../../../assets/free.svg';
import extendDeadlineIcon from '../../../assets/extendDeadline.svg';
import selectMaisMobile from '../../../assets/selectMais.svg';
import Exit from '../../../assets/exit.svg';

// Redux
import { updateTableDatas, deleteOrg } from '../../../dataflow/modules/organization-modules';

const mapStateToProps = state => ({
	isAdmin: state.onboarding.users.isAdmin,
	tableDatas: state.organization.tableDatas,
	user: state.onboarding.users,
});

const mapDispatchToProps = dispatch => ({
	updateTableDatas: info => dispatch(updateTableDatas(info)),
	deleteOrg: info => dispatch(deleteOrg(info)),
});


const Container = styled.div`
	width: 100%;
	height: 100vh;
`;

const ContainerUser = styled.div`
	width: 100%;
	height: ${props => (!props.height && 'calc(100vh - -3px - 5.5rem)')};
	background-color: ${props => (props.background ? '#FFFFFF' : '#FFCFCD')};
	${'' /* border-right: 1px solid #707070;
	border-left: 1px solid #707070;
	border-bottom: 1px solid #707070; */}

	@media(max-width: 648px) {
		background-color: ${props => (props.background ? '#FFFFFF' : '#FFFFFF')};
	}
`;

const InvolveButton = styled.div`
	padding: .5rem 0.2rem;

	@media (max-width: 768px) {
		padding: 0;
	}
`;

const ContainerSelectedViewBy = styled.div`
	padding-right: .6rem;

	@media(max-width: 768px) {
		padding-right: 0;
	}

	@media(max-width: 648px) {
		margin-top: 0;
	}
`;

const ContainerContentSelectedViewBy = styled.div`
	padding-bottom: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 4;

	@media (max-width: 768px) {
		align-items: center;
		flex-direction: column;
	}

	@media (max-width: 490px) {
		align-items: center;
		flex-direction: column;
	}
`;

const TitleManageOrgs = styled.h2`
	color: #85144B;
	font-size: 2rem;
	font-family: "Overpass", Black;
	font-weight: 900;

	@media (max-width: 768px) {
		padding-bottom: 0.8rem;
	}

	@media (max-width: 648px) {
		display: none;
	}
`;

const TitleMyOrganization = styled.h2`
	color: #85144B;
	font-size: 2rem;
	font-family: "Overpass", Black;
	font-weight: 900;

	@media (max-width: 768px) {
		margin-left: 1rem;
	}

	@media (max-width: 648px) {
		display: none;
	}
`;

const SelectViewBy = styled.div`
	/* width: ${props => (props.width)}; */
 /* width: 45%; */
	width: 35%;
	display: flex;
	flex-direction: row;
	justify-content: ${props => (props.isAdmin ? 'flex-end' : 'initial')};

	@media (max-width: 1024px) {
		width: ${props => (props.isAdmin ? '48%' : '43%')};
	}

	@media (max-width: 768px) {
		width: 100%;
		justify-content: center;
	}

	@media(max-width: 490px) {
    width: 85%;
		margin-right: 0;
	}
`;

const SpanSelect = styled.div`
	width: 15rem;
	margin: 0.5rem 0 0;
	display: flex;
  flex-direction: column;
	position: relative;
	z-index: 11;
	cursor: pointer;

	@media (max-width: 940px) {
		width: 47%;
	}

	@media (max-width: 768px) {
		margin: 0;
		width: 100%;
		align-items: center;
	}

	@media(max-width: 490px) {
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

const TitleSearch = styled.h2`
	color: #231F20;
	font-size: 1,375rem;
	font-family: Overpass;
	font-weight: bold;
	margin: 0.8rem 0.9rem 0 0;
	display: flex;
  align-items: center;

	@media (max-width: 768px) {
		display: none;
	}
`;

const SelectInputUser = styled.span`
	width: 100%;
	border: 0.5px solid #85144B;
	border-radius: 3px;
	padding: 0.1rem 1rem;
	display: flex;
	margin-top: 0.8rem;
	justify-content: space-between;

	@media(max-width: 768px) {
		width: 75%;
	}

	@media(max-width: 490px) {
		width: 100%;
	}
`;

const Input = styled.input`
	border: none;
	outline: none;
	width: 90%;

	@media (max-width: 768px) {
		width: 100%;
		padding: 0.5rem;
	}
`;

const ImageMagnifyng = styled.img`
	cursor: pointer;
`;

const InputSelect = styled.div`
	width: 100%;
	background-color: #FFFFFF;
	border: 0.5px solid #85144B;
	border-radius: 3px 3px 0 0;
	color: #959595;
	font-size: 0.875rem;
	padding: 0.5rem;
	display: flex;
	justify-content: space-between;
	z-index: 2;

	@media (max-width: 768px) {
		width: 75%;
		font-size: 1rem;
	}

	@media (max-width: 490px) {
		width: 100%;
	}
`;

const ImageArrow = styled.img`
	cursor: pointer;
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

	@media (max-width: 768px) {
		width: 75%;
		top: 36px;
	}

	@media (max-width: 490px) {
		width: 100%;
		top: 32px;
	}
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

const ContainerTableUser = styled.div`
	width: ${props => (props.width && '100%')};
	max-height: 100vh;
	${'' /* max-height: ${props => (props.height ? '0' : '100vh')}; */}
	background-color: ${props => (props.background ? '#FFFFFF' : '#FFFFFF')};
	border-radius: ${props => (props.border ? '0' : '3px 3px 0 0')};
	margin: ${props => (props.margin ? '0' : ' 0 2.5rem')};
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 768px) {
		margin: 0 auto;
		width: 100%;
	}
`;

const Content = styled.div`
	width: 100%;
	max-width: 100%;
	height: calc(100vh - 85px - 5.8rem - 1.87rem);
	${'' /* height: calc(100vh - 85px - 5.8rem - 2.4rem); */}
	${'' /* height: ${props => (props.height ? 'auto' : 'calc(100vh - 85px - 5.8rem - 2.4rem)')}; */}
	padding: ${props => (props.padding ? '4rem 5.5rem 0' : '2rem 2rem 0')};

	@media (max-width: 768px) {
		padding: 1.5rem 0 0;
		width: 100%;
		max-width: 100%;
	}
`;

const ContainerTable = styled.div`
	max-height: 66vh;
	overflow-y: scroll;

	::-webkit-scrollbar {
  width: 10px;
	}
	::-webkit-scrollbar-track {
  background: #fff;
	}
	::-webkit-scrollbar-thumb {
  	background: #FFCFCD;
	}
	::-webkit-scrollbar-thumb:hover {
  	background: #f9bdbb;
	}

	@media(max-width: 648px) {
		overflow-y: visible;
		max-height: 100%;
		margin: 0;
	}
`;

const Table = styled.table`
	max-width: 100%;
  width: 100%;
	border-spacing: 0;

	@media (max-width: 648px) {
		padding: 0;
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
	/* cursor: pointer; */

	&:nth-child(even) {
    background-color: #FFCFCD;
  }
	&:nth-child(odd) {
    background-color: #FFFFFF;
	}

	@media(max-width: 768px) {
		padding: 1rem 1rem 10rem 1rem;
		display: flex;
    flex-wrap: wrap;
		position: relative;
	}

	@media(max-width: 648px) {
		padding: 1rem 1rem 12.5rem 1rem;
	}

	@media(max-width: 420px) {
		padding: 1rem 1rem 16.8rem 1rem;
	}
`;

const TableTitle = styled.th`
	width: ${props => (props.width)};
	background-color: #85144B;
	padding: .25rem;
	color: #FFFFFF;
	font-family: Overpass, Regular;
	font-size: 1rem;
	text-align: ${props => (props.center === 'Status' && 'center')};
	position: sticky;
	top: 0;
	z-index: 5;

	@media (max-width: 768px) {
		display: none;
	}
`;

const ImageMore = styled.img`
	display: none;

	@media(max-width: 768px) {
		width: 1rem;
		display: flex;
		position: absolute;
		right: 15px;
	}
`;

const ContainerTableTitleMob = styled.span`
	display: none;

	@media (max-width: 768px) {
		padding-right: 2rem;
		padding-bottom: 1rem;
		display: flex;
		flex-direction: column;
		${({ selected }) => selected && css`
		p {display: none;}
		div {display: flex;}
	`}
	}
`;

const TextNoOrganitazion = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 4rem;
`;

const TextInformation = styled.p`
	font-size: 1.5rem;
	text-align: center;
	font-family: Overpass, Regular;
	color: #85144B;
`;

const Box = styled.div`
	display: none;

	@media(max-width: 768px) {
		display: ${props => (props.isClickedStatus ? 'flex' : 'none')};
		flex-direction: row;
	}
`;

const BoxButton = styled.button`
	border: none;
	background: none;
	outline: none;
	cursor: auto;

	@media(max-width: 768px) {
		display: ${props => (props.isClickedName ? 'none' : 'flex')};
	}
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
	width: ${props => (props.width)};
	padding: .25rem;
	color: #404040;
	font-family: "Overpass", Light;
	font-weight: ${props => (props.font && '900')};
	font-size: 0.95rem;
	text-align: ${props => (props.wNumber && 'center')};
	cursor: pointer;
	padding:0 .5%;


	@media (max-width: 768px) {
		padding: 0.5rem 0;
		display: ${props => (props.mob ? 'none' : 'flex')};
	}
`;

const ContainerStatus = styled.td`
	display: flex;
	height: inherit;
	justify-content: ${props => (props.desc ? 'flex-start' : 'center')};

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
	color: ${props => (props.color ? '#FF4136' : '#85144B')};
	font-size: 0.8rem;
	text-transform: uppercase;
	cursor: auto;

	@media(max-width: 768px) {
		display: ${props => (props.isClickedName ? 'none' : 'flex')};
	}
`;

const ImageStatus = styled.img`
	width: 1.3rem;
  padding-right: 0.3rem;
	display: none;
	cursor: ${props => (props.cursor ? 'pointer' : 'auto')};

	@media(max-width: 768px) {
		display: flex;
	}
`;

const ContainerModalDelete = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 30;
	background: rgba(112, 112, 112, 0.5);

	@media (max-width: 490px) {
		flex-direction: column;
		background: #ffffff;
	}
`;

const ModalDelete = styled.div`
	background: #FFF;
	width: 480px;
	padding: 1% 1% 1% 1%;

	@media (max-width: 490px) {
		width: 100%;
		height: 100vh;
		padding: 5%;
		display: flex;
    justify-content: space-between;
    flex-direction: column;
	}
`;

const TitleModal = styled.div`
	display: flex;
	justify-content: space-between;

	img {
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
`;

const TitleDelete = styled.h2`
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

const WrapTextModal = styled.div`
	@media (max-width: 490px) {
		height: 30%;
    display: flex;
    flex-direction: column;
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
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 5%;

	@media (max-width: 490px) {
		width: 100%;
		margin: 0;
	}
`;

const ButtonCancel = styled.button`
	width: 50%;
	height: 3.5rem;
	color: #F00;
	border-radius: 4px;
	border: none;
	background: #FFF;
	font-size: 1rem;
	font-family: "Overpass", Bold;
	font-weight: 600;

	@media (max-width: 490px) {
		margin: 0;
		position: initial;
		width: 100%;
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
			toFilter: false,
			isDeleteModal: false,
			modalType: '',
			filter: '',
			selectedValue: 'Selecionar status',
			selectedItems: [
				'Selecionar status',
				{ select: 'Pendente de Pagamento', filter: 'pendente' },
				{ select: 'Pendente de Autorização', filter: 'autorizar' },
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

	isModalCreateOrganization = (type) => {
		this.setState({
			isModalCreateOrg: !this.state.isModalCreateOrg,
			modalType: type,
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

	handleClosedModal = () => {
		this.setState({
			isModal: false,
		});
	}

	handleDeleteModal = () => {
		this.setState({
			isDeleteModal: !this.state.isDeleteModal,
		});
	}

	deleteOrganization = () => {
		this.props.deleteOrg(this.state.itemSelected);
		this.setState({
			isModal: false,
		});
		this.handleDeleteModal();
	}

	handleSelectedStatus = (newStatus, item) => {
		const { tableDatas } = this.props;
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
		this.props.updateTableDatas(
			newList,
		);
	}

	handleClickedImageStatus = (item) => {
		this.setState({
			isClickedStatus: item.id,
		});
	};

	handleChangeFilter = (ev) => {
		this.setState({
			filter: ev.target.value,
		});
	}

	handleChangeFilterKey = (ev) => {
		if (ev.key === 'Enter') {
			this.setState({
				toFilter: true,
			});
		}
	}

	handleToFilter = () => {
		this.setState({
			toFilter: true,
		});
	}

	renderSelectedViewby = () => (
		<ContainerSelectedViewBy>
			<ContainerContentSelectedViewBy>
				<TitleManageOrgs>Gerenciar organizações</TitleManageOrgs>
				<SelectViewBy isAdmin={this.props.isAdmin}>
					<TitleViewBy>Visualizar por:</TitleViewBy>
					<SpanSelect>
						<InputSelect isAdmin={this.props.isAdmin} onClick={this.isSelectOpen}>
							<SelectedViewByText color={this.state.selectedValue.select || this.state.selectedValue}>
								{this.state.selectedValue.select || this.state.selectedValue}
							</SelectedViewByText>
							{this.state.isSelected ? (
								<ImageArrow src={ArrowUpIcon} alt="arrow" />
							) : <ImageArrow src={ImageCaminho} alt="arrow" />}
						</InputSelect>
						{this.state.isSelected && (
							<InputSelectedItem>
								{this.state.selectedItems.map((item, index) => (
									<SelectedItem
										onClick={() => this.handleSelectedValue(item)}
										style={{ paddingTop: item === 'Selecionar status' && '.7rem' }}
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
			</ContainerContentSelectedViewBy>
		</ContainerSelectedViewBy>
	)

	renderSelectedViewbyUser = () => (
		<ContainerSelectedViewBy>
			<ContainerContentSelectedViewBy>
				<TitleMyOrganization>Minhas organizações</TitleMyOrganization>
				<SelectViewBy>
					<TitleSearch>Pesquisar</TitleSearch>
					<SelectInputUser>
						<Input
							onChange={this.handleChangeFilter}
							onKeyUp={this.handleChangeFilterKey}
							placeholder='Digite aqui para pesquisar'
							type="text"
						/>
						<ImageMagnifyng src={magnifyingGlass} alt="Lupa" onClick={this.handleToFilter} />
					</SelectInputUser>
				</SelectViewBy>
			</ContainerContentSelectedViewBy>
		</ContainerSelectedViewBy>
	)

	renderStatus = item => (
		<>
			<Box isClickedStatus={item.id === this.state.isClickedStatus}>
				{this.state.statusImgs.map((status, index) => (
					<ImageStatus
						cursor={this.props.isAdmin}
						key={index}
						src={status.img}
						alt={status.desc}
						onClick={() => this.handleSelectedStatus(status, item)}
					/>
				))}
			</Box>
			<BoxButton
				isClickedName={item.id === this.state.isClickedStatus}
				onClick={() => this.handleClickedImageStatus(item)}
			>
				<TextStatus color={item.isChanged}
				// isClickedName={item.id === this.state.isClickedStatus}
				>
					{item.status}
				</TextStatus>
			</BoxButton>
		</>
	)

	renderModalDelete = () => (
		<ContainerModalDelete onClick={this.handleDeleteModal}>
			<ModalDelete onClick={e => e.stopPropagation()}>
				<TitleModal>
					<TitleDelete>Excluir Organização</TitleDelete>
					<img onClick={this.handleDeleteModal} src={Exit} alt="Sair" />
				</TitleModal>
				<WrapTextModal>
					<TextModal>
						Após ser excluido, uma organização não pode ser recuperada.
					</TextModal>
					<TextModal>
						Você deseja excluir <strong>{this.state.itemSelected.tradingName}</strong> permanentemente?
					</TextModal>
				</WrapTextModal>
				<ButtonsModal>
					<ButtonCancel onClick={this.handleDeleteModal}>Cancelar</ButtonCancel>
					<Button
						onClick={this.deleteOrganization}
						width="50%"
						height="3.5rem"
						text="Confirmar"
					/>
				</ButtonsModal>
			</ModalDelete>
		</ContainerModalDelete>
	)

	renderTable = (listTable) => {
		const widthMob = (window.matchMedia('(max-width: 768px)').matches);
		const { user, org } = this.props;

		return listTable.map(item => (
			<Tr key={item.id}>
				{widthMob
					? <ContainerTableTitleMob>
						<TableTitleMob>Organização</TableTitleMob>
						<TableList>{item.tradingName}</TableList>
					</ContainerTableTitleMob>
					: <>
						<TableList
							font={this.state.hovered === item}
							onClick={() => this.isModalOpen(item)}
							style={{ paddingLeft: '.7rem' }}
							width={'9.5rem'}
						>
							{item.tradingName}
						</TableList>
					</>
				}
				<TableList
					mob
					font={this.state.hovered === item}
					onClick={() => this.isModalOpen(item)}
					width={'8rem'}
				>
					{user.cpf || '-'}
				</TableList>
				<TableList
					mob
					font={this.state.hovered === item}
					onClick={() => this.isModalOpen(item)}
					width={'9rem'}
				>
					{user.name || '-'}
				</TableList>
				{widthMob
					? <> <ContainerTableTitleMob>
						<TableTitleMob>E-mail</TableTitleMob>
						<TableList>{user.email || '-'}</TableList>
					</ContainerTableTitleMob>
					<ContainerTableTitleMob>
						<TableTitleMob>Telefone</TableTitleMob>
						<TableList width={'7rem'} font={this.state.hovered === item}>{user.telephone || '-'}</TableList>
					</ContainerTableTitleMob>
					<ContainerTableTitleMob>
						<TableTitleMob>Criado em</TableTitleMob>
						<TableList font={this.state.hovered === item}>{item.createdIn}</TableList>
					</ContainerTableTitleMob>
					<ContainerTableTitleMob>
						<TableTitleMob>Autorização</TableTitleMob>
						<TableList font={this.state.hovered === item}>{item.authorization}</TableList>
					</ContainerTableTitleMob>
					<ContainerTableTitleMob>
						<TableTitleMob>Vencimento</TableTitleMob>
						<TableList font={this.state.hovered === item}>{item.dueDate}</TableList>
					</ContainerTableTitleMob>
					</>
					: <>
						<TableList
							font={this.state.hovered === item}
							onClick={() => this.isModalOpen(item)}
							width={'9rem'}
						>
							{user.email || '-'}
						</TableList>
						<TableList
							font={this.state.hovered === item}
							onClick={() => this.isModalOpen(item)}
							width={'8rem'}
						>
							{user.telephone || '-'}
						</TableList>
						<TableList
							wNumber
							font={this.state.hovered === item}
							onClick={() => this.isModalOpen(item)}
						>
							{item.createdIn}
						</TableList>
						<TableList
							wNumber
							font={this.state.hovered === item}
							onClick={() => this.isModalOpen(item)}
						>
							{item.authorization}
						</TableList>
						<TableList
							wNumber
							font={this.state.hovered === item}
							onClick={() => this.isModalOpen(item)}
						>
							{item.dueDate}
						</TableList>
					</>
				}
				{widthMob
					? <ContainerTableTitleMob
					// selected={this.state.hovered === item}
					>
						<TableTitleMob center>Status</TableTitleMob>
						{this.renderStatus(item)}
					</ContainerTableTitleMob>
					: <>
						{this.props.isAdmin ? (
							<ContainerStatus
								onMouseEnter={() => this.setState({ hovered: item })}
								onMouseLeave={() => this.setState({ hovered: undefined })}
								selected={this.state.hovered === item}
							>
								{this.renderStatus(item)}
							</ContainerStatus>
						) : (
							<ContainerStatus>
								{this.renderStatus(item)}
							</ContainerStatus>
						)}
					</>
				}
				<ImageMore src={selectMaisMobile} onClick={() => this.isModalOpen(item)} />
			</Tr>
		));
	}

	renderAllTable = () => {
		const { selectedValue, filter, toFilter } = this.state;
		const { tableDatas } = this.props;

		let listTable = this.renderTable(tableDatas);
		if (
			selectedValue !== 'Selecionar status'
		) {
			listTable = this.renderTable(tableDatas.filter(item => item.status === (selectedValue.filter || selectedValue)));
		}
		if (
			toFilter
		) {
			listTable = this.renderTable(tableDatas.filter(item => (filter.split(' ').length === 1
				? item.tradingName.split(' ').includes(filter)
				: item.tradingName.toLowerCase() === filter.toLowerCase())));
		}
		return listTable;
	}

	handleChangeCloseModal = (ev) => {
		ev.stopPropagation();
		this.setState({
			isModalCreateOrg: false,
			modalSucess: true,
		});
	}

	handleRedirect = (ev) => {
		ev.stopPropagation();
  	this.setState({
			modalSucess: !this.state.modalSucess,
			isModalCreateOrg: false,
  	});
	}

	render() {
		const { isAdmin, tableDatas } = this.props;
		const {
			isSelected,
			isModal,
			isDeleteModal,
			itemSelected,
			modalType,
			isModalCreateOrg,
		} = this.state;

		return (
			<Container>
				{isSelected && <Overlay onClick={this.isSelectOpen} />}
				{isModal
					&& <ModalOrganization
						org={itemSelected}
						handleClosedModal={this.isModalOpen}
						isModalCreateOrganization={this.isModalCreateOrganization}
						handleDeleteModal={this.handleDeleteModal}
					/>
				}
				{isModalCreateOrg
					&& <ModalCreateOrganization
						item={itemSelected}
						modalType={modalType}
						tableDatas={tableDatas}
						handleClosedModal={this.isModalCreateOrganization}
						closeModal={this.isModalOpen}
						handleRedirect={this.handleRedirect}
					/>
				}
				<Header />
				<ContainerUser
					width={isAdmin}
					height={isAdmin}
					background={isAdmin}
				>
					{!isAdmin
						&& <InvolveButton><Button
							width='18%'
							widthMobileSmall='90%'
							height='4.3rem'
							heightMobile='5.3rem'
							fontSize='1.4rem'
							margin='1.2rem 0 1.2rem 2.5rem'
							marginMobile='1.5rem 2.5rem 1.5rem 4rem'
							marginMobileSmall='1.5rem 2.5rem 1.5rem 1.5rem'
							text='Criar Organização'
							type='button'
							orderMobile
							organizationMobile
							onClick={this.isModalCreateOrganization} /></InvolveButton>
					}
					<ContainerTableUser
						width={isAdmin}
						height={isAdmin}
						background={isAdmin}
						border={isAdmin}
						margin={isAdmin}>
						<Content height={isAdmin} padding={isAdmin}>
							{isAdmin
								? this.renderSelectedViewby()
								: this.renderSelectedViewbyUser()}
							<ContainerTable maxHeight={this.props.isAdmin}>
								<Table modal={this.state.isModal}>
									<Thead>
										<Tr>
											{this.state.tableTitles.map(title => (
												<TableTitle width={'6rem'}
													key={title}
													center={title}
													style={{
														paddingLeft: title === 'Organização' && '0.7rem',
														textAlign: title === 'Criado em'
															|| title === 'Autorização' || title === 'Vencimento' ? 'center' : null,
													}}
												>
													{title}
												</TableTitle>
											))}
										</Tr>
									</Thead>
									<tbody>
										{this.renderAllTable()}
									</tbody>
								</Table>
							</ContainerTable>
							{this.renderAllTable().length === 0 && (
								<TextNoOrganitazion>
									<TextInformation>Não há organizações no momento.</TextInformation>
								</TextNoOrganitazion>
							)}
						</Content>
					</ContainerTableUser>
				</ContainerUser>
				{isDeleteModal && this.renderModalDelete()}
			</Container>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationScreen);
