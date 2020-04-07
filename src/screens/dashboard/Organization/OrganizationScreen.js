// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import ImageLogo from '../../../components/ImageLogo';
import Header from '../components/Header';


const Container = styled.div`
  width: 100%;
`;

const InputSearch = styled.span`
	width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 2rem 3rem 0 3rem;
`;

const Model = styled.p`
  color: #85144B;
  font-size: 2rem;
  font-family: Overpass-Black;
  font-weight: 600;
  /* margin-left: 5.5rem; */
`;

const Span = styled.span`
  width: 35%;
  margin-top: 0.5rem;
	/* display: flex;
  flex-direction: row; */
  /* margin-right: 4.2rem; */
`;

const Label = styled.label`
  color: #231F20;
  font-size: 1rem;
  font-family: Overpass, Bold;
  margin-right: 0.8rem;
`;

const Input = styled.input`
  width: 68%;
  border: 0.5px solid #85144B;;
  border-radius: 3px;
  padding: 0.7rem;
`;

const Table = styled.table`
	width: 100%;
	margin-top: 1rem;
`;

const Tr = styled.tr`
	height: 2rem;
`;

const TableTitle = styled.th`
	background-color: #85144B;
	color: #FFFFFF;
	font-size: 0.8rem;
	font-family: Overpass, Regular;
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
		};
	}

	render() {
		return (
			<Container>
			<Header/>
				<InputSearch>
					<Model>Gerenciar organizações</Model>
					<Span>
						<Label>Vizualizar por:</Label>
						<Input
						/* type="pesquisa"
            onChange={this.handleChange} */
							placeholder="Selecionar status"
						/>
					</Span>
				</InputSearch>
				<Table>
					<Tr>
						<TableTitle>Organização</TableTitle>
						<TableTitle>CNPJ</TableTitle>
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
						<TableList>PENDENTE</TableList>
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
			</Container>
		);
	}
}

export default OrganizationScreen;
