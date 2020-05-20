// Libs
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';

// Components
import Header from '../components/Header';
import ModalOrganization from './ModalOrganization';
import ModalCreateOrganization from './ModalCreateOrganization';
import Button from '../../../components/Button';

// Image
import ImageCaminho from '../../../assets/caminho.svg';
import ArrowUpIcon from '../../../assets/arrow-up.svg';
import magnifyingGlass from '../../../assets/magnifyingGlass.svg';
import authorizationIcon from '../../../assets/authorization.svg';
import payIcon from '../../../assets/pay.svg';
import freeIcon from '../../../assets/free.svg';
import extendDeadlineIcon from '../../../assets/extendDeadline.svg';
import selectMaisMobile from '../../../assets/selectMais.svg';

// Redux
import { updateTableDatas, deleteOrg } from '../../../dataflow/modules/organization-modules';

const mapStateToProps = state => ({
	isAdmin: state.onboarding.users.isAdmin,
	tableDatas: state.organization.tableDatas,
});

const mapDispatchToProps = dispatch => ({
	updateTableDatas: info => dispatch(updateTableDatas(info)),
	deleteOrg: info => dispatch(deleteOrg(info)),
});


const Container = styled.div`
	width: 100%;
	height: 100vh;
	/* padding: 0 0 2rem; */
`;

const ContainerUser = styled.div`
	width: 100%;
	height: ${props => (!props.height && 'calc(100vh - 5.5rem)')};
	background-color: ${props => (props.background ? '#FFFFFF' : '#FFCFCD')};

	@media(max-width: 648px) {
		background-color: ${props => (props.background ? '#FFFFFF' : '#FFFFFF')};
	}
`;

const ContainerSelectedViewBy = styled.div`
	/* margin-top: 1.3rem; */
	padding-right: .6rem;

	@media(max-width: 768px) {
		/* margin: 1.3rem 0; */
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
		padding-bottom: 0.8rem;
	}

	@media (max-width: 648px) {
		display: none;
	}
`;

const SelectViewBy = styled.div`
	width: ${props => (props.width)};
	display: flex;
	flex-direction: row;

	@media (max-width: 768px) {
		width: 100%;
		justify-content: center;
	}

	@media(max-width: 648px) {
    justify-content: center;
	}
`;

const SpanSelect = styled.div`
	width: 15rem;
	margin: 0.5rem 0 0;
	display: flex;
  flex-direction: column;
	position: relative;
	z-index: 11;

	@media (max-width: 940px) {
		width: 47%;
	}

	@media (max-width: 768px) {
		width: 100%;
		align-items: center;
		margin: 0;
	}

	@media(max-width: 648px) {
		width: 90%;
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
	width: 75%;
	border: 0.5px solid #85144B;
	border-radius: 3px;
	padding: 0.1rem 1rem;
	margin-top: 0.8rem;
	display: flex;
	justify-content: space-between;

	@media(max-width: 768px) {
		width: 73%;
		margin-top: 0;
	}

	/* @media(max-width: 490px) {
		width: 80%;
	} */
`;

const Input = styled.input`
	border: none;
	outline: none;

	@media (max-width: 768px) {
		width: 100%;
		padding: 0.5rem;
	}
`;
const ImageMagnifyingGlass = styled.img`
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
	cursor: pointer;
	z-index: 2;

	@media (max-width: 768px) {
		width: 75%;
		font-size: 1rem;
	}

	@media (max-width: 490px) {
		width: 100%;
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

	@media (max-width: 768px) {
		width: 50%;
		top: 36px;
	}

	@media (max-width: 490px) {
		width: 100%;
		top: 32px;
	}
`;

const SelectedItem = styled.p`
	color: #85144B;
	font-size: 0.9rem;
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
  width: ${props => (props.width ? '100%' : '94%')};
  max-height: ${props => (props.height ? '0' : '100vh')};
  background-color: ${props => (props.background ? '#FFFFFF' : '#FFFFFF')};
	border-radius: ${props => (props.border ? '0' : '3px')};
	margin: ${props => (props.margin ? '0' : ' 0 2.5rem')};

	@media (max-width: 768px) {
		width: ${props => (props.width ? '100%' : '100%')};
		margin: 0 0;
	}
/*
	@media (max-width: 648px) {
		padding: 3rem;
	} */
`;

const Content = styled.div`
	width: 100%;
	max-width: 100%;
	padding: ${props => (props.padding ? '3rem 5.5rem 0' : '1.8rem 1.5rem 0')};

	@media (max-width: 768px) {
		padding: 1.5rem 0 0;
	}
`;

const ContainerTable = styled.div`
	${''}
	/* max-height: calc(100vh - 85px - 96px - 2.8rem); */
	max-height: ${props => (props.maxHeight ? 'calc(100vh - 85px - 96px - 2.8rem)' : 'calc(80vh - 179px)')};
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
	/* height: 100%; */
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
	color: #FFFFFF;
	font-family: Overpass, Regular;
	font-size: 1rem;
	text-align: ${props => (props.center === 'Status' && 'center')};
	position: sticky;
	top: 0;
	z-index: 5;
	${''}

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
		/* img {display: block;} */
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
/*
	@media(max-width: 648px) {
		font-size: 1.5rem;
	} */
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
	color: #404040;
	font-family: "Overpass", Light;
	font-weight: ${props => (props.font && '900')};
	font-size: 0.95rem;
	text-align: ${props => (props.wNumber && 'center')};

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

	@media(max-width: 768px) {
		display: ${props => (props.isClickedName ? 'none' : 'flex')};
	}
`;

const ImageStatus = styled.img`
	width: 1.3rem;
  padding-right: 0.3rem;
	display: none;
	/* cursor: pointer; */

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
			toFilter: false,
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

	deleteOrganization = () => {
		this.props.deleteOrg(this.state.itemSelected);
		this.setState({
			isModal: false,
		});
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
			toFilter: false,
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
				<SelectViewBy>
					<TitleViewBy>Visualizar por:</TitleViewBy>
					<SpanSelect>
						<InputSelect onClick={this.isSelectOpen}>
							<SelectedViewByText color={this.state.selectedValue.select || this.state.selectedValue}>
								{this.state.selectedValue.select || this.state.selectedValue}
							</SelectedViewByText>
							{this.state.isSelected ? (
								<img src={ArrowUpIcon} alt="arrow" />
							) : <img src={ImageCaminho} alt="arrow" />}
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
				<SelectViewBy width={'30%'}>
					<TitleSearch>Pesquisar</TitleSearch>
					<SelectInputUser>
						<Input
							onChange={this.handleChangeFilter}
							onKeyUp={this.handleChangeFilterKey}
							placeholder='Digite aqui para pesquisar'
							type="text"
						/>
						<ImageMagnifyingGlass src={magnifyingGlass} alt="Lupa" onClick={this.handleToFilter} />
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

	renderTable = (listTable) => {
		const widthMob = (window.matchMedia('(max-width: 768px)').matches);

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
							width={'9rem'}
						>
							{item.tradingName}
						</TableList>
					</>
				}
				<TableList
					mob
					font={this.state.hovered === item}
					onClick={() => this.isModalOpen(item)}
					width={'9.5rem'}
				>
					{/* {item.cpf} */}
					cpf do user
				</TableList>
				<TableList
					mob
					font={this.state.hovered === item}
					onClick={() => this.isModalOpen(item)}
					width={'8rem'}
				>
					{/* {item.name} */}
					nome do user
				</TableList>
				{widthMob
					? <> <ContainerTableTitleMob>
						<TableTitleMob>E-mail</TableTitleMob>
						<TableList>{item.email}</TableList>
					</ContainerTableTitleMob>
					<ContainerTableTitleMob>
						<TableTitleMob>Telefone</TableTitleMob>
						<TableList font={this.state.hovered === item}>{item.telephone}</TableList>
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
						>
							{/* {item.email} */}
							email do user
						</TableList>
						<TableList
							font={this.state.hovered === item}
							onClick={() => this.isModalOpen(item)}
							width={'8rem'}
						>
							{/* {item.telephone} */}
							telefone do user
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
				? item.organization.split(' ').includes(filter)
				: item.organization.toLowerCase() === filter.toLowerCase())));
		}
		return listTable;
	}

	render() {
		const { isAdmin } = this.props;

		return (
			<Container>
				{this.state.isSelected && <Overlay onClick={this.isSelectOpen} />}
				{this.state.isModal
					&& <ModalOrganization
						item={this.state.itemSelected}
						handleClosedModal={this.isModalOpen}
						isModalCreateOrganization={this.isModalCreateOrganization}
						deleteOrganization={this.deleteOrganization}
					/>
				}
				{this.state.isModalCreateOrg
					&& <ModalCreateOrganization
						item={this.state.itemSelected}
						modalType={this.state.modalType}
						tableDatas={this.props.tableDatas}
						handleClosedModal={this.isModalCreateOrganization}
						closeModal={this.isModalOpen}
					/>
				}
				<Header />
				<ContainerUser
					height={isAdmin}
					background={isAdmin}
				>
					{!isAdmin
						&& <Button
							width='20%'
							height='4.9rem'
							fontSize='1.4rem'
							margin='1.2rem 0 1.2rem 2.5rem'
							marginMobile='1.5rem 2.5rem 1.5rem 4rem'
							marginMobileSmall='1.5rem 2.5rem 1.5rem 2.5rem'
							text='Criar Organização'
							type='button'
							orderMobile
							organizationMobile
							onClick={this.isModalCreateOrganization} />
					}
					<ContainerTableUser
						width={isAdmin}
						height={isAdmin}
						background={isAdmin}
						border={isAdmin}
						margin={isAdmin}>
						<Content padding={isAdmin}>
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
			</Container>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationScreen);
