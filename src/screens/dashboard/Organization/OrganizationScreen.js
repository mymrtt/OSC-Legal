// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

// Components
import ImageLogo from '../../../components/ImageLogo';
import Header from '../components/Header';
import ImageCaminho from '../../../assets/caminho.svg';
import ModalOrganization from './ModalOrganization';
import DocumentsScreen from '../Documents/DocumentsScreen';

const Container = styled.div`
	width: 100%;
	height: 100vh;
`;

const InputSearch = styled.span`
	width: 90%;
	display: flex;
	justify-content: space-between;
	margin: 2rem 3rem 0 3rem;

	@media (max-width: 1125px) {
	}

	@media (max-width: 940px) {
		/* width: 40%; */

	}
`;

const Model = styled.p`
	color: #85144B;
	font-size: 2rem;
	font-family: Overpass-Black;
	font-weight: 600;
	/* margin-left: 5.5rem; */


	@media (max-width: 648px) {
		display: none;
	}
`;

const Span = styled.span`
	width: 38%;
	margin-top: 0.5rem;

	@media (max-width: 1125px) {
		width: 45%;
	}

	@media (max-width: 940px) {
		width: 47%;
	}

	@media (max-width: 648px) {
		width: 100%;
	}
`;

const Label = styled.label`
	color: #231F20;
	font-size: 1rem;
	font-family: Overpass, Bold;
	margin-right: 0.8rem;

	@media (max-width: 648px) {
		display: none;
	}
`;

const Input = styled.input`
	width: 72%;
	border: 0.5px solid #85144B;;
	border-radius: 3px;
	padding: 0.7rem;
`;

const Image = styled.img`
	/* width: 15%; */

`;

const ParagraphInput = styled.p`
	font-size: 0.9rem;
	font-family: Overpass, Regular;
`;

const Table = styled.table`
	width: 90%;
	margin: 2rem 3rem 0 3rem;

	@media (max-width: 785px) {
		display: flex;
		flex-direction: column;
	}

`;

const Tr = styled.tr`
	height: 2rem;
`;

const TableTitle = styled.th`
	background-color: #85144B;
	color: #FFFFFF;
	font-size: 0.8rem;
	font-family: Overpass, Regular;

	@media (max-width: 785px) {
		background-color: #FFFFFF;
		color: #85144B;
	}

`;

const TableList = styled.td`
	color: #404040;
`;

const TableList1 = styled.td`
	background-color: #FFCFCD;
	color: #404040;
`;

class OrganizationScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModal: undefined,
			isModalCategory: undefined,
			redirect: 'organization',
		};
	}

		isOpen = (event) => {
			event.stopPropagation();
			this.setState({
				isModal: true,
			});
		}

		isClose = (event) => {
			event.stopPropagation();
			this.setState({
				isModal: false,
			});
		}

		handleIsModal = (event) => {
			event.stopPropagation();
			this.setState({
				isModal: !this.state.isModal,
			});
		}

		handleClick = (item) => {
			console.log('item', item);
			this.setState({
				redirect: item,
			});
		};

		render() {
			console.log('000000000000', this.state.redirect)
			console.log('000000000000')

			return (
				<Container>
					{this.state.isModal && <ModalOrganization handleCloseModal={this.isClose}/> }
					<Header handleClick={this.handleClick} />
					{this.state.redirect === 'organization' ? (
						<>
							<InputSearch>
								<Model>Gerenciar organizações</Model>
								<Span>
									<Label>Vizualizar por:</Label>
									<Input
										/* type="select"
							onChange={this.handleChange} */
										placeholder="Selecionar status"
									/>
									{/* <Image src={ImageCaminho} /> */}
									{/* <ParagraphInput>Pendente de Autorização</ParagraphInput>
						<ParagraphInput>Pendente de Pagamento</ParagraphInput>
						<ParagraphInput>Isento</ParagraphInput>
						<ParagraphInput>Pago</ParagraphInput>
						<ParagraphInput>Vencida</ParagraphInput> */}
								</Span>
							</InputSearch>
							<Table>
								<Tr>
									<TableTitle>Organização</TableTitle>
									<TableTitle>CPJ</TableTitle>
									<TableTitle>Usuário</TableTitle>
									<TableTitle>E-mail</TableTitle>
									<TableTitle>Telefone</TableTitle>
									<TableTitle>Criado em</TableTitle>
									<TableTitle>Autorização</TableTitle>
									<TableTitle>Vencimento</TableTitle>
									<TableTitle>Status</TableTitle>
								</Tr>
								<Tr>
									<TableList>Instituto PrecisaSer</TableList>
									<TableList>00.000.000/0000-00</TableList>
									<TableList>Jorge Amado da Silva</TableList>
									<TableList>organização@email.com</TableList>
									<TableList>(11)11111-1111</TableList>
									<TableList>19/05/19</TableList>
									<TableList> - </TableList>
									<TableList> - </TableList>
									<TableList onClick={this.isOpen}>PENDENTE</TableList>
								</Tr>
								<Tr>
									<TableList1>Vai na Web</TableList1>
									<TableList1>00.000.000/0000-00</TableList1>
									<TableList1>Yasmin Miranda</TableList1>
									<TableList1>nome@email.com</TableList1>
									<TableList1>(99) 99999-9999</TableList1>
									<TableList1>18/06/19</TableList1>
									<TableList1> - </TableList1>
									<TableList1> - </TableList1>
									<TableList1>PAGO</TableList1>
								</Tr>
								<Tr>
									<TableList>Casa de Rui Barbosa</TableList>
									<TableList>00.000.000/0000-00</TableList>
									<TableList>Alice Barbosa Souza</TableList>
									<TableList>organização@email.com</TableList>
									<TableList>(77)77777-7777</TableList>
									<TableList>17/06/19</TableList>
									<TableList>02/06/19</TableList>
									<TableList>02/07/19</TableList>
									<TableList>PENDENTE</TableList>
								</Tr>
								<Tr>
									<TableList1>Biblioteca da Maré</TableList1>
									<TableList1>00.000.000/0000-00</TableList1>
									<TableList1>Vinicius Almeida Rodrigues</TableList1>
									<TableList1>organização@email.com</TableList1>
									<TableList1>(22)22222-2222</TableList1>
									<TableList1>15/06/19</TableList1>
									<TableList1>26/05/19</TableList1>
									<TableList1> - </TableList1>
									<TableList1> ISENTO </TableList1>
								</Tr>
								<Tr>
									<TableList>Museu de Arte ZO</TableList>
									<TableList>00.000.000/0000-00</TableList>
									<TableList>Tarcila do Amaral Gonçalves</TableList>
									<TableList>organização@email.com</TableList>
									<TableList>(44)44444-4444</TableList>
									<TableList>12/06/19</TableList>
									<TableList>15/06/19</TableList>
									<TableList>15/07/19</TableList>
									<TableList>VENCIDO</TableList>
								</Tr>
							</Table>
						</>
					) : <DocumentsScreen />
					}
				</Container>
			);
		}
}

export default OrganizationScreen;
