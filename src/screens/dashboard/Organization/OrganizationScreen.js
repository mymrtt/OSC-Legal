// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Header from '../components/Header';
import ImageCaminho from '../../../assets/caminho.svg';
import ModalOrganization from './ModalOrganization';
import DocumentsScreen from '../Documents/DocumentsScreen';

// Image
import authorizationIcon from '../../../assets/authorization.svg';
import payIcon from '../../../assets/pay.svg';
import freeIcon from '../../../assets/free.svg';
import extendDeadlineIcon from '../../../assets/extendDeadline.svg';

const Container = styled.div`
	width: 100%;
	height: 100vh;
`;

const ContainerSelectedViewBy = styled.div`
	margin: 3rem 4rem 0 4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 4;

	@media(max-width: 1024px) {
		margin: 3rem 0 0 4rem;
	}

	@media (max-width: 768px) {
		margin: 2rem 4rem 0 4rem;
		flex-direction: column;
		align-items: center;
	}

	@media (max-width: 648px) {
		margin: 1rem 2rem 1rem 2rem;
	}
`;

const TitleManageOrgs = styled.h2`
	color: #85144B;
	font-size: 2.2rem;
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
	padding: 0.5rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
	color: #959595;
	background-color: #FFFFFF;
	border: 0.5px solid #85144B;
	border-radius: 3px 3px 0 0;
	font-size: 0.875rem;
	cursor: pointer;
	z-index: 2;
`;

const SelectedViewByText = styled.p`
	width: 100%;
	padding-left: 0.3rem;
	/* text-align: center; */
	color: ${props => (props.color === 'Selecionar status' ? '#959595' : '#85144B')};
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
	position: absolute;
	top: 32px;
	width: 100%;
	border: 0.5px solid #85144B;
	border-radius: 0 0 3px 3px;
	background-color: #FFFFFF;
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
`;

const Table = styled.table`
	max-width: 100%;
	width: 100%;
	border-spacing: 0;
	padding: 2rem 4rem 0 4rem;

	@media (max-width: 768px) {
		padding: 2rem 0 0 0;
	}

	@media (max-width: 648px) {
		padding: 0;
		padding-top: 1rem;
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
	cursor: pointer;

	&:nth-child(even) {
    background-color: #FFCFCD;
  }
	&:nth-child(odd) {
    background-color: #FFFFFF;
	}

	@media(max-width: 768px) {
		margin-bottom: 1rem;
		padding: 1rem 1rem 13rem 1rem;
		display: flex;
    flex-wrap: wrap;
	}
`;

const TableTitle = styled.th`
	color: #FFFFFF;
	font-size: 0.90rem;
	font-family: Overpass, Regular;
	background-color: #85144B;
	padding-left: 0.7rem;

	@media (max-width: 768px) {
		display: none;
	}
`;

const ContainerTableTitleMob = styled.span`
	display: none;

	@media (max-width: 768px) {
		padding-right: 1rem;
		padding-bottom: 0.7rem;
		display: flex;
		flex-direction: column;
	}
`;

const TableTitleMob = styled.th`
	display: none;

	@media(max-width: 768px) {
		display: flex;
		color: #85144B;
		font-size: 0.8rem;
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
	padding: 0.5rem;
	display: flex;
	justify-content: ${props => (props.desc ? 'flex-start' : 'space-evenly')};
	align-items: center;

	@media(max-width: 768px) {
		padding: 0;
	}
`;

const SelectedImgs = styled.p`
	color: ${props => (props.color)};
	font-size: 0.8rem;
	font-family: Overpass, Light;
	text-transform: uppercase;
`;

const ImageStatus = styled.img`
	width: 1.3rem;
  padding-right: 0.3rem;
	cursor: pointer;

	@media(max-width: 1024px) {
		margin-right: .3rem;
	}
`;

class OrganizationScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModal: true,
			isSelected: undefined,
			selectedValue: 'Selecionar status',
			selectedItems: [
				'Selecionar status',
				'Pendente de Autorização',
				'Pendente de Pagamento',
				'Isento',
				'Pago',
				'Vencida',
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
			tableDatas: [
				{
					id: 1,
					organization: 'Instituto PrecisaSer',
					cpf: '00.000.000/0000-00',
					user: 'Jorge Amado da Silva',
					email: 'organização@email.com',
					telephone: '(11)11111-1111',
					createdIn: '19/05/19',
					authorization: '-',
					dueDate: '-',
					status: 'PENDENTE',
				},
				{
					id: 2,
					organization: 'Vai na Web',
					cpf: '00.000.000/0000-00',
					user: 'Yasmin Miranda',
					email: 'nome@email.com',
					telephone: '(99) 99999-9999',
					createdIn: '18/06/19',
					authorization: '-',
					dueDate: '-',
					status: 'PAGO',
				},
				{
					id: 3,
					organization: 'Casa de Rui Barbosa',
					cpf: '00.000.000/0000-00',
					user: 'Alice Barbosa Souza',
					email: 'organização@email.com',
					telephone: '(77)77777-7777',
					createdIn: '17/06/19',
					authorization: '02/06/19',
					dueDate: '02/07/19',
					status: 'PENDENTE',
				},
				{
					id: 4,
					organization: 'Biblioteca da Maré',
					cpf: '00.000.000/0000-00',
					user: 'Vinicius Almeida Rodrigues',
					email: 'organização@email.com',
					telephone: '(22)22222-2222',
					createdIn: '15/06/19',
					authorization: '15/07/19',
					dueDate: '-',
					status: 'ISENTO',
				},
				{
					id: 5,
					organization: 'Museu de Arte ZO',
					cpf: '00.000.000/0000-00',
					user: 'Tarcila do Amaral Gonçalves',
					email: 'organização@email.com',
					telephone: '(44)44444-4444',
					createdIn: '12/06/19',
					authorization: '15/06/19',
					dueDate: '15/07/19',
					status: 'VENCIDO',
				},
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

	isModalOpen = (event) => {
		event.stopPropagation();
		this.setState({
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

	handleSelectedStatus = (status, item) => {
		this.setState({
			selectedStatusImgs: status,
			selectedStatusOrg: item.id,

		});
	}

	chooseColor = (item) => {
		switch (item) {
		case 'Autorizar':
			return '#231F20';
		case 'Pago':
			return '#85144B';
		case 'Isento':
			return '#FF4136';
		case 'Prorrogar Prazo':
			return '#231F20';
		default:
			return '#959595';
		}
	}

	renderSelectedViewby = () => (
		<ContainerSelectedViewBy>
			<TitleManageOrgs>Gerenciar organizações</TitleManageOrgs>
			<SelectViewBy>
				<TitleViewBy>Visualizar por:</TitleViewBy>
				<SpanSelect>
					<InputSelect onClick={this.isSelectOpen}>
						<SelectedViewByText>{this.state.selectedValue}</SelectedViewByText>
						<img src={ImageCaminho} alt="arrow" />
					</InputSelect>
					{this.state.isSelected && (
						<InputSelectedItem>
							{this.state.selectedItems.map((item, index) => (
								<SelectedItem color
									onClick={() => this.handleSelectedValue(item)}
									key={index}
									hover={item}
								>
									{item}
								</SelectedItem>
							))}
						</InputSelectedItem>
					)}
				</SpanSelect>
			</SelectViewBy>
		</ContainerSelectedViewBy>
	)

	render() {
		const widthMob = (window.matchMedia('(max-width: 768px)').matches);

		return (
			<Container>
				{this.state.isSelected && (<Overlay onClick={this.isSelectOpen} />)}
				{this.state.isModal && <ModalOrganization handleCloseModal={this.isModalOpen} />}
				<Header handleClick={this.handleClick} />
				{this.state.redirect === 'organization' ? (
					<>
						{this.renderSelectedViewby()}
						<Table>
							<Thead>
								<Tr>
									{this.state.tableTitles.map(title => (
										<TableTitle key={title}>{title}</TableTitle>
									))}
								</Tr>
							</Thead>
							<tbody>
								{this.state.tableDatas.map(item => (
									<Tr key={item}>
										{widthMob
											? <ContainerTableTitleMob onClick={this.isModalOpen}>
												<TableTitleMob>Organização</TableTitleMob>
												<TableList>{item.organization}</TableList>
											</ContainerTableTitleMob>
											: <>
												<TableList onClick={this.isModalOpen}>{item.organization}</TableList>
											</>
										}
										<TableList mob onClick={this.isModalOpen}>{item.cpf}</TableList>
										<TableList mob onClick={this.isModalOpen}>{item.user}</TableList>
										{widthMob
											? <> <ContainerTableTitleMob onClick={this.isModalOpen}>
												<TableTitleMob>E-mail</TableTitleMob>
												<TableList>{item.email}</TableList>
											</ContainerTableTitleMob>
											<ContainerTableTitleMob onClick={this.isModalOpen}>
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
												<TableList onClick={this.isModalOpen}>{item.email}</TableList>
												<TableList onClick={this.isModalOpen}>{item.telephone}</TableList>
												<TableList>{item.createdIn}</TableList>
												<TableList>{item.authorization}</TableList>
												<TableList>{item.dueDate}</TableList>
											</>
										}
										{widthMob
											? <ContainerTableTitleMob>
												<TableTitleMob>Status</TableTitleMob>
												<ContainerStatus desc={this.state.selectedStatusImgs}>
													{ this.state.selectedStatusImgs === undefined
														? this.state.statusImgs.map((status, index) => (
															<ImageStatus
																key={index}
																src={status.img}
																alt={status.desc}
																onClick={() => this.handleSelectedStatus(status)}
															/>
														))
														: <p>{this.state.selectedStatusImgs.desc}</p>}
												</ContainerStatus>
											</ContainerTableTitleMob>
											: <>
												<ContainerStatus desc={this.state.selectedStatusImgs}>
													{ this.state.selectedStatusOrg === item.id
														? <SelectedImgs color={this.chooseColor(this.state.selectedStatusImgs.desc)}>{this.state.selectedStatusImgs.desc}</SelectedImgs>
														:														this.state.statusImgs.map((status, index) => (
															<ImageStatus
																key={index}
																src={status.img}
																alt={status.desc}
																onClick={() => this.handleSelectedStatus(status, item)}
															/>
														))}
												</ContainerStatus>
											</>
										}
									</Tr>
								))}
							</tbody>
						</Table>
					</>
				) : <DocumentsScreen />
				}
			</Container>
		);
	}
}

export default OrganizationScreen;
