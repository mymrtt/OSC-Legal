// /* eslint-disable class-methods-use-this */
// // Libs
// import React, { Component } from 'react';
// import styled from 'styled-components';
// import { Link, Redirect } from 'react-router-dom';

// // Components
// import ImageLogo from '../../../components/ImageLogo';
// import Header from '../components/Header';

// const Container = styled.div`
//   width: 100%;
//   background-color: #FFCFCD;
//   height: 100vh;
// `;

// const CreateButton = styled.button`
//   width: 25%;
//   padding: 1.3rem;
//   background-color: #FF4136;
//   border: 0;
//   border-radius: 3px;
//   box-shadow: 0 3px 6px #00000029;
//   color: #fff;
//   font-size: 1.4rem;
//   font-family: Overpass, SemiBold;
//   font-weight: bold;
//   margin: 1.5rem 0 1.5rem 2.5rem;
// `;

// const ContainerTable = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   border-radius: 5px;
// `;

// const Div = styled.div`
//   width: 94%;
//   height: 75vh;
//   background-color: #FFFFFF;
//   display: flex;
//   align-items: center;
//   flex-direction: column;

// `;

// const InputSearch = styled.span`
// 	width: 94%;
//   display: flex;
//   justify-content: space-between;
//   margin: 2rem 0 0 0;
// `;

// const Model = styled.p`
//   color: #85144B;
//   font-size: 2rem;
//   font-family: Overpass-Black;
//   font-weight: 600;
// `;

// const Span = styled.span`
//   width: 44%;
//   margin-top: 0.5rem;
// `;

// const Label = styled.label`
//   color: #231F20;
//   font-size: 1rem;
//   font-family: Overpass, Bold;
//   font-weight: 600;
//   margin-right: 0.8rem;
// `;

// const Input = styled.input`
//   width: 80%;
//   border: 0.5px solid #85144B;;
//   border-radius: 3px;
//   padding: 0.7rem;
// `;

// const Table = styled.div`
//   width: 94%;
// 	margin-top: 1rem;
// `;

// const TableCreate = styled.span`
//   /* width: 100%; */
// 	height: 2rem;
//   display: flex;
//   align-items: center;
//   flex-direction: row;
//   font-family: Overpass, Regular;
// 	&:nth-child(even) {
//     background-color: #FFFFFF;
//   }
// 	&:nth-child(odd) {
//     background-color: #FFCFCD;
//   }
// `;

// const TableTitle = styled.p`
//   width: ${props => (props.tableWidth ? props.tableWidth : '100%')};
//   height: 2rem;
// 	background-color: #85144B;
// 	color: #FFFFFF;
// 	font-size: 0.8rem;
// 	font-family: Overpass, Regular;
//   display: flex;
//   align-items: center;
//   padding-left: 0.7rem;
// `;

// const TableList = styled.p`
//   width: ${props => (props.tableWidth ? props.tableWidth : '100%')};
// 	color: #404040;
// 	padding-left: 0.7rem;
// `;

// class CreateOrganization extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 		};
// 	}

// 	// eslint-disable-next-line no-dupe-class-members
// 	render() {
// 		return (
// 			<Container>
// 				<Header />
// 				<CreateButton to={'/modalCreateOrganization'}>Criar Organização</CreateButton>
// 				<ContainerTable>
// 					<Div>
// 						<InputSearch>
// 							<Model>Minhas organizações</Model>
// 							<Span>
// 								<Label>Pesquisar</Label>
// 								<Input
// 									/* type="pesquisa"
//                 onChange={this.handleChange} */
// 									placeholder="Digite aqui para pesquisar"
// 								/>
// 							</Span>
// 						</InputSearch>
// 						<Table>
// 							<TableCreate>
// 								<TableTitle tableWidth={'16%'}>Organização</TableTitle>
// 								<TableTitle tableWidth={'16%'}>CNPJ</TableTitle>
// 								<TableTitle tableWidth={'15%'}>Usuário</TableTitle>
// 								<TableTitle tableWidth={'16%'}>E-mail</TableTitle>
// 								<TableTitle tableWidth={'11%'}>Telefone</TableTitle>
// 								<TableTitle tableWidth={'7%'}>Criado em</TableTitle>
// 								<TableTitle tableWidth={'7%'}>Autorização</TableTitle>
// 								<TableTitle tableWidth={'8%'}>Vencimento</TableTitle>
// 								<TableTitle tableWidth={'8%'}>Status</TableTitle>
// 							</TableCreate>
// 							<TableCreate>
// 								<TableList tableWidth={'16%'}>Instituto PrecisaSer</TableList>
// 								<TableList tableWidth={'16%'}>00.000.000/0000-00</TableList>
// 								<TableList tableWidth={'15%'}>Jorge Amado da Silva</TableList>
// 								<TableList tableWidth={'16%'}>organização@email.com</TableList>
// 								<TableList tableWidth={'11%'}>(11)11111-1111</TableList>
// 								<TableList tableWidth={'7%'}>19/05/19</TableList>
// 								<TableList tableWidth={'7%'}> - </TableList>
// 								<TableList tableWidth={'8%'}> - </TableList>
// 								<TableList tableWidth={'8%'}>PENDENTE</TableList>
// 							</TableCreate>
// 							<TableCreate>
// 								<TableList tableWidth={'16%'}>Vai na Web</TableList>
// 								<TableList tableWidth={'16%'}>00.000.000/0000-00</TableList>
// 								<TableList tableWidth={'15%'}>Yasmin Miranda</TableList>
// 								<TableList tableWidth={'16%'}>nome@email.com</TableList>
// 								<TableList tableWidth={'11%'}>(99) 99999-9999</TableList>
// 								<TableList tableWidth={'7%'}>18/06/19</TableList>
// 								<TableList tableWidth={'8%'}> - </TableList>
// 								<TableList tableWidth={'8%'}> - </TableList>
// 							</TableCreate>
// 							<TableCreate>
// 								<TableList tableWidth={'16%'}>Casa de Rui Barbosa</TableList>
// 								<TableList tableWidth={'16%'}>00.000.000/0000-00</TableList>
// 								<TableList tableWidth={'15%'}>Alice Barbosa Souza</TableList>
// 								<TableList tableWidth={'16%'}>organização@email.com</TableList>
// 								<TableList tableWidth={'11%'}>(77)77777-7777</TableList>
// 								<TableList tableWidth={'7%'}>17/06/19</TableList>
// 								<TableList tableWidth={'7%'}>02/06/19</TableList>
// 								<TableList tableWidth={'8%'}>02/07/19</TableList>
// 								<TableList tableWidth={'8%'}>PENDENTE</TableList>
// 							</TableCreate>
// 							<TableCreate>
// 								<TableList tableWidth={'16%'}>Biblioteca da Maré</TableList>
// 								<TableList tableWidth={'16%'}>00.000.000/0000-00</TableList>
// 								<TableList tableWidth={'15%'}>Vinicius Almeida Rodrigues</TableList>
// 								<TableList tableWidth={'16%'}>organização@email.com</TableList>
// 								<TableList tableWidth={'11%'}>(22)22222-2222</TableList>
// 								<TableList tableWidth={'7%'}>15/06/19</TableList>
// 								<TableList tableWidth={'7%'}>26/05/19</TableList>
// 								<TableList tableWidth={'8%'}> - </TableList>
// 								<TableList tableWidth={'8%'}> ISENTO </TableList>
// 							</TableCreate>
// 						</Table>
// 					</Div>
// 				</ContainerTable>
// 			</Container>
// 		);
// 	}
// }

// export default CreateOrganization;
