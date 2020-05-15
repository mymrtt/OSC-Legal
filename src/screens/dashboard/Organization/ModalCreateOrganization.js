// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Input from '../../../components/Input';
import Button from '../../../components/Button';

// Icon
import Exit from '../../../assets/exit.svg';

const Overlay = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #00000060;
  display: flex;
  align-items: center;
  justify-content: center;
	z-index: 20;
	position: absolute;
`;

const Container = styled.div`
	margin: 1rem;
	width: 33%;
	${'' /* max-height: calc(98vh - 0.25rem); */}
	overflow: hidden auto;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-radius: 3px;
`;

const Content = styled.div`
	max-height: calc(98vh - 0.25rem);
`;

const ContainerExit = styled.figure`
	padding-top: 1rem;
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

const ExitIcon = styled.img`
	width: 1.3rem;
	align-self: flex-end;
	margin-right: 4%;
`;

const Title = styled.h2`
	padding-top: ${props => (props.org && '3rem')};
	padding-left: 3.5rem;
	padding-bottom: 2rem;
	font-size: 1.3rem;
	text-transform: uppercase;
	font-family: Overpass;
	font-weight: 900;
`;

const ContainerUser = styled.div`
	display: flex;
	flex-flow: wrap column;
`;

const UserTitle = styled.h2`
	padding-left: 3.5rem;
	padding-bottom: .5rem;
	font-size: 0.7rem;
	color: #85144b;
	text-transform: uppercase;
	font-family: Overpass;
	font-weight: bold;
`;

const UserText = styled.p`
  font-size: 1rem;
	padding-left: 3.5rem;
	padding-bottom: 1.5rem;
  font-family: "Overpass", Light;

  @media (max-width: 648px) {
    & {
      margin: 0 0 1.6rem 3.5rem;
    }
  };

  @media (max-width: 425px) {
    & {
      margin: 0 0 1.6rem 0;
    }
  };
`;

const CreateOrgTitle = styled.h1`
	padding-left: 3.5rem;
	padding-bottom: 2rem;
	color: #85144B;
	font-size: 2rem;
	align-self: flex-start;
	font-family: "Overpass", sans-serif;
	font-weight: 900;
`;

const ContentOrganization = styled.div`
`;

const ContentOrganizationItem = styled.label`

`;

const WrapOrganization = styled.div`
  margin-bottom: 3rem;
  display: flex;
	justify-content: center;
  flex-direction: column;
`;

const WrapOrganizationContent = styled.div`
	display: flex;
`;

const WrapOrganizationItem = styled.label`
	width: 44.5%;
	display: flex;
	flex-direction: column;
	${'' /* align-items: center; */}
`;

const ContainerConcludeButton = styled.span`
	padding-bottom: 1rem;
	width: 100%;
	display: flex;
	justify-content: center;
`;

export default class ModalCreateOrganization extends Component {
	state = {
		nomeError: false,
		dataLegalPerson: {
			fantasyName: '',
			companyName: '',
			cnpj: '',
			email: '',
			telephone: '',
			address: '',
			complement: '',
			neighborhood: '',
			city: '',
			zipCode: '',
		},
		userData: [
			{
				name: 'Yasmin Miranda',
				email: 'nome@email.com',
				telephone: '(99) 99999-9999',
				cpf: '000000000-00',
			},
		],
	};

	handleSubmit = (ev) => {
		ev.preventDefault();
		if (this.state.dataLegalPerson.fantasyName === '') {
			this.setState({
				nomeError: true,
			});
		} else {
			this.setState({
				nomeError: false,
			});
		}

		if (this.state.dataLegalPerson.cnpj === '') {
			this.setState({
				nomeError: true,
			});
		} else {
			this.setState({
				nomeError: false,
			});
		}
	};

	handleChange = (field, ev) => {
		const { dataLegalPerson } = this.state;
		dataLegalPerson[field] = ev.target.value;
		this.setState({
			dataLegalPerson,
		});
	};

	render() {
		const error = ['Nome fantasia invalido', 'CNPJ invalido', 'Email invalido'];

		return (
			<Overlay onClick={this.ModalClosed}>
				<Container onSubmit={this.handleSubmit}>
					<Content>
						<ContainerExit onClick={this.ModalClosed}>
							<ExitIcon src={Exit} alt="Sair"/>
						</ContainerExit>
						<CreateOrgTitle>Criar Organização</CreateOrgTitle>
						<Title>Usuário</Title>
						{this.state.userData.map(item => (
							<ContainerUser key={item}>
								<UserTitle>nome</UserTitle>
								<UserText>{item.name}</UserText>
								<UserTitle>e-mail</UserTitle>
								<UserText>{item.email}</UserText>
								<UserTitle>telefone</UserTitle>
								<UserText>{item.telephone}</UserText>
								<UserTitle>cpf</UserTitle>
								<UserText>{item.cpf}</UserText>
							</ContainerUser>
						))}
						<Title org>Organização</Title>
						<ContentOrganization>
							<ContentOrganizationItem>
								<UserTitle>nome fantasia</UserTitle>
								<Input
									modalOrg
									margin={'0 0 1.5rem 3rem'}
									placeholder="Nome da organização"
									onChange={ev => this.handleChange('fantasyName', ev)}
									value={this.state.fantasyName}
								/>
								{this.state.nomeError && <span>{error[0]}</span>}
							</ContentOrganizationItem>
							<ContentOrganizationItem>
								<UserTitle>razão social</UserTitle>
								<Input
									modalOrg
									margin={'0 0 1.5rem 3rem'}
									placeholder="Razão social"
									onChange={ev => this.handleChange('companyName', ev)}
									value={this.state.companyName}
								/>
							</ContentOrganizationItem>
							<ContentOrganizationItem>
								<UserTitle>cnpj</UserTitle>
								<Input
									modalOrg
									margin={'0 0 1.5rem 3rem'}
									type="number"
									placeholder="00.000.000/0000-00"
									onChange={ev => this.handleChange('cnpj', ev)}
									value={this.state.cnpj}
								/>
								{this.state.nomeError && <span>{error[1]}</span>}
							</ContentOrganizationItem>
							<ContentOrganizationItem>
								<UserTitle>email</UserTitle>
								<Input
									modalOrg
									margin={'0 0 1.5rem 3rem'}
									placeholder="endereçodeemail@email.com"
									value={this.state.email}
								/>
							</ContentOrganizationItem>
							<ContentOrganizationItem>
								<UserTitle>telefone</UserTitle>
								<Input
									modalOrg
									margin={'0 0 1.5rem 3rem'}
									type="number"
									placeholder="(00) 00000-0000"
									value={this.state.telephone}
								/>
							</ContentOrganizationItem>
							<ContentOrganizationItem>
								<UserTitle>endereço</UserTitle>
								<Input
									modalOrg
									margin={'0 0 1.5rem 3rem'}
									placeholder="Endereço"
									value={this.state.address}
								/>
							</ContentOrganizationItem>
						</ContentOrganization>
						<WrapOrganization>
							<WrapOrganizationContent>
								<WrapOrganizationItem>
									<UserTitle>complemento</UserTitle>
									<Input
										modalOrg
										margin={'0 0 1.5rem 3rem'}
										placeholder="Complemento"
										value={this.state.complement}
									/>
								</WrapOrganizationItem>
								<WrapOrganizationItem>
									<UserTitle>cidade</UserTitle>
									<Input
										modalOrg
										margin={'0 0 1.5rem 3rem'}
										placeholder="Cidade"
										value={this.state.city}
									/>
								</WrapOrganizationItem>
							</WrapOrganizationContent>
							<WrapOrganizationContent>
								<WrapOrganizationItem>
									<UserTitle>bairro</UserTitle>
									<Input
										modalOrg
										margin={'0 0 1.5rem 3rem'}
										placeholder="Bairro"
										value={this.state.neighborhood}
									/>
								</WrapOrganizationItem>
								<WrapOrganizationItem>
									<UserTitle>cep</UserTitle>
									<Input
										modalOrg
										margin={'0 0 1.5rem 3rem'}
										type="number"
										placeholder="00000-000"
										value={this.state.zipCode}
									/>
								</WrapOrganizationItem>
							</WrapOrganizationContent>
						</WrapOrganization>
						<ContainerConcludeButton>
							<Button
								to={'/modalSucessfully'}
								type="submit"
								width={'80%'}
								text="concluir"
							/>
						</ContainerConcludeButton>
					</Content>
				</Container>
			</Overlay>
		);
	}
}
