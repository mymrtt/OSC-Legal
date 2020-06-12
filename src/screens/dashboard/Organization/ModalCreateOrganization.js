// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Sucessfully from './ModalSucessfully';
import HeaderModal from '../components/HeaderModal';

// Icon
import Exit from '../../../assets/fechar.svg';

// Redux
import { addNewOrg, editOrg } from '../../../dataflow/modules/organization-modules';

// Api
import { createOrganization, getAllOrganizations, patchOrg } from '../../../services/api';
import { validateCNPJ } from '../../../utils';

const mapStateToProps = state => ({
	name: state.onboarding.users.name,
	email: state.onboarding.users.email,
	telephone: state.onboarding.users.telephone,
	cpf: state.onboarding.users.cpf,
	tableDatas: state.organization.tableDatas,
});

const mapDispatchToProps = dispatch => ({
	addNewOrg: org => dispatch(addNewOrg(org)),
	editOrg: org => dispatch(editOrg(org)),
});

const Overlay = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #707070a1;
  display: flex;
  align-items: center;
  justify-content: center;
	position: fixed;
	z-index: 20;

	@media(max-width: 648px) {
		display: flex;
    flex-direction: column;
	}
`;

const Container = styled.form`
	/* width: 33%; */
	background-color: #FFFFFF;
	border-radius: 3px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow: hidden auto;

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

	@media(max-width: 768px) {
		width: 70%;
	}

	@media(max-width: 648px) {
		width: 100%;
		z-index: 10;
		border-radius: 0;
		border-top: 1px solid #707070;
	}
`;

const Content = styled.div`
	max-height: calc(98vh - 0.25rem);
`;

const ContainerExit = styled.figure`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

const ExitIcon = styled.img`
	display: flex;
	align-self: flex-end;
	padding: 0.8rem 0.8rem 0.8rem;
	cursor: pointer;
`;

const Title = styled.h2`
	width: 100%;
	font-family: Overpass;
	font-size: 1.3rem;
	font-weight: 900;
	text-transform: uppercase;
	padding-top: ${props => (props.org && '3rem')};
	padding-left: ${props => (props.org && '.6rem')};
	padding-bottom: 2rem;
`;

const ContainerUser = styled.div`
	width: 100%;
	padding-left: 3.7rem;
	display: flex;
	flex-flow: wrap column;

	@media(max-width: 648px) {
		padding-left: 2.5rem;
	}
`;

const UserTitle = styled.h2`
	padding-left: ${props => (props.org && '.8rem')};
	padding-bottom: .5rem;
	font-size: 0.7rem;
	color: #85144b;
	text-transform: uppercase;
	font-family: Overpass;
	font-weight: bold;

	@media(max-width: 768px) {
		font-size: .9rem;
	}
	@media(max-width: 648px) {
		font-size: 0.85rem;
	}
`;

const UserText = styled.p`
  font-size: 1rem;
	padding-bottom: 1.5rem;
  font-family: "Overpass", Light;
  @media (max-width: 648px) {
		font-size: 1rem;
  }
`;

const CreateOrgTitle = styled.h1`
	align-self: flex-start;
	color: #85144B;
	font-family: "Overpass", sans-serif;
	font-size: 2rem;
	font-weight: 900;
	padding: 0 3.5rem 2.5rem;

	@media(max-width: 648px) {
		padding-left: 2rem;
	}
`;

const ContentOrganization = styled.div`
	width: 100%;
`;

const ContentOrganizationItem = styled.label`
	padding-bottom: 2rem;
`;

const WrapOrganization = styled.div`
	width: 100%;
  margin-bottom: 1rem;
  display: flex;
	justify-content: center;
  flex-direction: column;
`;

const WrapOrganizationContent = styled.div`
	display: flex;
	padding-bottom: ${props => (props.textError ? '1rem' : '2rem')};
`;

const WrapOrganizationContent2 = styled.div`
	display: flex;
`;

const WrapOrganizationItem = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
`;

const ContainerConcludeButton = styled.span`
	width: 100%;
	padding-left: 3rem;
	padding-right: 3rem;
	margin-top: 1.5rem;

	@media(max-width: 648px) {
		padding-left: 2rem;
    padding-right: 2rem;
		padding-bottom: 5rem;
	}
`;

const ContentWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ContainerCreateOrg = styled.div`
	width: 100%;
	padding-left: 3rem;
	padding-right: 3rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media(max-width: 648px) {
		padding-left: 2rem;
    padding-right: 2rem;
	}
`;

const ErrorMessage = styled.p`
  margin: 0.5rem 0 1rem 0.8rem;
  align-self: flex-start;
  color: #f00;
  font-size: 0.8rem;
  font-weight: 400;
	font-family: Overpass, Regular;

  @media (max-width: 648px) {
    margin: 0.5rem 0 0.8rem 0;
  }
`;

const ErrorAllMessage = styled.p`
  color: #f00;
  font-size: 0.8rem;
  font-weight: 400;
	font-family: Overpass, Regular;
	text-align: center;
	margin-bottom: 0.5rem;

  @media (max-width: 648px) {
    margin: 0.5rem 0 0.8rem 0;
  }
`;

class ModalCreateOrganization extends Component {
	state = {
		tradingName: '',
		companyName: '',
		cpf: '',
		cnpj: '',
		telephone: '',
		address: '',
		addressComplement: '',
		neighborhood: '',
		city: '',
		cep: '',
		modalSucess: false,
		isTradingNameError: false,
		isCompanyNameError: false,
		isCnpjError: false,
		isTelephoneError: false,
		isAddressError: false,
		isAddressComplementError: false,
		isNeighborhoodError: false,
		isCityError: false,
		isCepError: false,
		allStateTrue: false,
		redirect: false,
	};

	componentDidMount() {
		this.getAllOrgs();

		if (this.props.modalType === 'edit') {
			this.setState({
				orgId: this.props.item.orgId,
				tradingName: this.props.item.tradingName,
				companyName: this.props.item.companyName,
				cpf: this.props.item.cpf,
				cnpj: this.props.item.cnpj,
				telephone: this.props.item.telephone,
				address: this.props.item.address,
				addressComplement: this.props.item.addressComplement,
				neighborhood: this.props.item.neighborhood,
				city: this.props.item.city,
				cep: this.props.item.cep,
				user_id: this.props.userData.id,
				createdIn: this.props.item.createdIn,
				authorization: this.props.item.authorization,
				status: this.props.item.status,
			});
		}
	}

	createOrg = async (org) => {
		try {
			const response = await createOrganization(org);

			const newOrg = {
				...org,
				orgId: response.data.insertId,
				authorization: null,
			};

			this.setState({
				allStateTrue: true,
				isCnpjError: '',
				error: '',
			});

			this.handleModalSucess(org.tradingName);
			this.props.addNewOrg(newOrg);
		} catch (error) {
			console.log('error', error.response);
			if (error.response.status === 401) {
				setTimeout(() => {
					localStorage.removeItem('user');
					localStorage.removeItem('token');
					this.setState({ redirect: true });
				}, 5000);
				return this.setState({
					error: 'Token expirado, faça login novamente',
				});
			}
			if (error.response.status === 400) {
				this.setState({
					error: error.response.data.errors[0].message,
				});
			}
		}
	}

	editOrganization = async (org) => {
		try {
			const newOrg = {
				...org,
				authorization: this.state.authorization,
				status: this.state.status,
			};
			await patchOrg(newOrg);

			const newTableDatas = this.props.tableDatas.map(item => (item.orgId === newOrg.orgId ? newOrg : item));

			this.props.editOrg(newTableDatas);
			this.props.handleClosedModal();
			this.props.closeModal();
		} catch (error) {
			console.log('error', error);

			console.log('error.response', error.response);
			if (error.response.data.errors[0]) {
				this.setState({
					error: error.response.data.errors[0].message,
				});
			}
			console.log('error.response.data.errors[0].message', error.response.data.errors[0].message)
			// this.setState({
			// 	error: 'Não foi possível editar.',
			// });
		}
	}

	getAllOrgs = async () => {
		try {
			const userId = this.props.userData.id;
			await getAllOrganizations(userId);
		} catch (error) {
			console.log('error', error);
			console.log('error.response', error.response);
		}
	}

	handleModalSucess = (item) => {
		this.setState({
			isCloseForm: true,
			modalSucess: !this.state.modalSucess,
			tradingName: item,
		});
	}

	validateOrg = () => {
		const {
			tradingName,
			companyName,
			cnpj,
			telephone,
			address,
			addressComplement,
			neighborhood,
			city,
			cep,
		} = this.state;

		if (!tradingName || tradingName.length < 4) {
			this.setState({
				isTradingNameError: true,
			});
		} else {
			this.setState({
				isTradingNameError: false,
			});
		}

		if (!companyName || companyName.length < 4) {
			this.setState({
				isCompanyNameError: true,
			});
		} else {
			this.setState({
				isCompanyNameError: false,
			});
		}

		if (cnpj) {
			if (cnpj.length !== 14 || validateCNPJ(cnpj)) {
				this.setState({
					isCnpjError: true,
				});
			} else {
				this.setState({
					isCnpjError: false,
				});
			}
		}

		if (!telephone || telephone.length < 8) {
			this.setState({
				isTelephoneError: true,
			});
		} else {
			this.setState({
				isTelephoneError: false,
			});
		}

		if (!address || address.length < 4) {
			this.setState({
				isAddressError: true,
			});
		} else {
			this.setState({
				isAddressError: false,
			});
		}

		if (!addressComplement || addressComplement.length < 4) {
			this.setState({
				isAddressComplementError: true,
			});
		} else {
			this.setState({
				isAddressComplementError: false,
			});
		}

		if (!city || city.length < 4) {
			this.setState({
				isCityError: true,
			});
		} else {
			this.setState({
				isCityError: false,
			});
		}

		if (!neighborhood || neighborhood.length < 4) {
			this.setState({
				isNeighborhoodError: true,
			});
		} else {
			this.setState({
				isNeighborhoodError: false,
			});
		}

		if (!cep || cep.length !== 8) {
			this.setState({
				isCepError: true,
			});
		} else {
			this.setState({
				isCepError: false,
			});
		}

		if (tradingName.length >= 4 && companyName.length >= 4 && (!cnpj || !cnpj.length || cnpj.length === 14)
			&& telephone.length >= 8 && address.length >= 4 && addressComplement.length >= 4
			&& city.length >= 4 && neighborhood.length >= 4 && cep.length === 8
		) {
			const createDate = () => {
				const date = new Date();
				return `${date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}/${date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`}/${date.getFullYear()}`;
			};

			const org = {
				tradingName: this.state.tradingName,
				address: this.state.address,
				addressComplement: this.state.addressComplement,
				neighborhood: this.state.neighborhood,
				city: this.state.city,
				cep: this.state.cep,
				...cnpj && { cnpj: this.state.cnpj },
				// cnpj: !cnpj ? null : this.state.cnpj,
				companyName: this.state.companyName,
				createdIn: this.props.modalType === 'edit' ? this.state.createdIn : createDate(),
				user_id: this.props.userData.id,
				telephone: this.state.telephone,
				orgId: this.state.orgId,
				deletedAt: 0,
				status: this.props.userData.status || 'pendente de autorização',
			};

			if (this.props.modalType === 'edit') {
				this.editOrganization(org);
			} else {
				this.createOrg(org);
			}
		}
	}

	handleSubmit = (ev) => {
		ev.preventDefault();
		this.validateOrg();
	};

	handleChange = (field, ev) => {
		this.setState({
			[field]: ev.target.value,
		});
	};

	handleChangeCnpj = (field, ev) => {
		this.setState({
			[field]: ev.target.value,
		});
	};

	render() {
		const errorMessage = [
			'Insira um nome fantasia válido.',
			'Insira uma razão social válida.',
			'Insira um CNPJ válido.',
			'Insira um número de telefone válido.',
			'Insira um endereço válido.',
			'Insira um complemento válido.',
			'Insira uma cidade válida.',
			'Insira um bairro válido.',
			'Insira um cep válido.',
		];

		const { userData, modalType } = this.props;

		const {
			isTradingNameError,
			isCompanyNameError,
			isCnpjError,
			isTelephoneError,
			isAddressError,
			isAddressComplementError,
			isCityError,
			isNeighborhoodError,
			isCepError,
			error,
		} = this.state;

		return (
			<Overlay onClick={this.props.handleClosedModal}>
				<HeaderModal />
				{this.state.isCloseForm ? null : (
					<Container onSubmit={this.handleSubmit} onClick={ev => ev.stopPropagation()}>
						<Content>
							<ContainerExit>
								<ExitIcon src={Exit} alt="close" onClick={this.props.handleClosedModal} />
							</ContainerExit>
							<ContentWrapper>
								{modalType === 'edit'
									? (<CreateOrgTitle>Editar Organização</CreateOrgTitle>)
									: (<CreateOrgTitle>Criar Organização</CreateOrgTitle>)
								}
								<ContainerUser>
									<Title>Usuário</Title>
									<UserTitle>nome</UserTitle>
									<UserText>{userData.name}</UserText>
									<UserTitle>e-mail</UserTitle>
									<UserText>{userData.email}</UserText>
									<UserTitle>telefone</UserTitle>
									<UserText>{userData.telephone}</UserText>
									<UserTitle>cpf</UserTitle>
									<UserText>{userData.cpf}</UserText>
								</ContainerUser>
								<ContainerCreateOrg>
									<Title org>Organização</Title>
									<ContentOrganization>
										<ContentOrganizationItem>
											<UserTitle org>nome fantasia</UserTitle>
											<Input
												modalOrg
												margin={isTradingNameError ? '0' : '0 0 2rem'}
												type="text"
												placeholder="Nome da organização"
												onChange={ev => this.handleChange('tradingName', ev)}
												value={this.state.tradingName}
												name="tradingName"
												isError={isTradingNameError}
												required
											/>
											{isTradingNameError && <ErrorMessage>{errorMessage[0]}</ErrorMessage>}
										</ContentOrganizationItem>
										<ContentOrganizationItem>
											<UserTitle org>razão social</UserTitle>
											<Input
												modalOrg
												margin={isCompanyNameError ? '0' : '0 0 2rem'}
												type="text"
												placeholder="Razão social"
												onChange={ev => this.handleChange('companyName', ev)}
												value={this.state.companyName}
												name="companyName"
												isError={isCompanyNameError}
												required
											/>
											{isCompanyNameError && <ErrorMessage>{errorMessage[1]}</ErrorMessage>}
										</ContentOrganizationItem>
										<ContentOrganizationItem>
											<UserTitle org>cnpj</UserTitle>
											<Input
												modalOrg
												margin={isCnpjError ? '0' : '0 0 2rem'}
												type="number"
												placeholder="00000000000000"
												onChange={ev => this.handleChangeCnpj('cnpj', ev)}
												value={this.state.cnpj}
												name="cnpj"
												isError={isCnpjError}
											/>
											{isCnpjError && <ErrorMessage>{errorMessage[2]}</ErrorMessage>}
										</ContentOrganizationItem>
										<ContentOrganizationItem>
											<UserTitle org>telefone</UserTitle>
											<Input
												modalOrg
												margin={isTelephoneError ? '0' : '0 0 2rem'}
												type="number"
												placeholder="(00) 00000-0000"
												onChange={ev => this.handleChange('telephone', ev)}
												value={this.state.telephone}
												name="telephone"
												isError={isTelephoneError}
												required
											/>
											{isTelephoneError && <ErrorMessage>{errorMessage[3]}</ErrorMessage>}
										</ContentOrganizationItem>
										<ContentOrganizationItem>
											<UserTitle org>endereço</UserTitle>
											<Input
												modalOrg
												margin={isAddressError ? '0' : '0 0 2rem'}
												type="text"
												placeholder="Endereço"
												onChange={ev => this.handleChange('address', ev)}
												value={this.state.address}
												name="address"
												isError={isAddressError}
												required
											/>
											{isAddressError && <ErrorMessage>{errorMessage[4]}</ErrorMessage>}
										</ContentOrganizationItem>
									</ContentOrganization>
									<WrapOrganization>
										<WrapOrganizationContent textError={isAddressComplementError || isCityError}>
											<WrapOrganizationItem
												style={{
													marginRight: '1rem',
												}}
											>
												<UserTitle org>complemento</UserTitle>
												<Input
													modalOrg
													type="text"
													placeholder="Complemento"
													onChange={ev => this.handleChange('addressComplement', ev)}
													value={this.state.addressComplement}
													name="addressComplement"
													isError={isAddressComplementError}
													required
												/>
												{isAddressComplementError && <ErrorMessage>{errorMessage[5]}</ErrorMessage>}
											</WrapOrganizationItem>
											<WrapOrganizationItem>
												<UserTitle org>cidade</UserTitle>
												<Input
													modalOrg
													type="text"
													placeholder="Cidade"
													onChange={ev => this.handleChange('city', ev)}
													value={this.state.city}
													name="city"
													isError={isCityError}
													required
												/>
												{isCityError && <ErrorMessage>{errorMessage[6]}</ErrorMessage>}
											</WrapOrganizationItem>
										</WrapOrganizationContent>
										<WrapOrganizationContent2>
											<WrapOrganizationItem
												style={{
													marginRight: '1rem',
													paddingBottom: isNeighborhoodError && '1rem',
												}}>
												<UserTitle org>bairro</UserTitle>
												<Input
													modalOrg
													type="text"
													placeholder="Bairro"
													onChange={ev => this.handleChange('neighborhood', ev)}
													value={this.state.neighborhood}
													name="neighborhood"
													isError={isNeighborhoodError}
													required
												/>
												{isNeighborhoodError && <ErrorMessage>{errorMessage[7]}</ErrorMessage>}
											</WrapOrganizationItem>
											<WrapOrganizationItem style={{ paddingBottom: isCepError && '1rem' }}>
												<UserTitle org>cep</UserTitle>
												<Input
													modalOrg
													type="number"
													placeholder="00000-000"
													onChange={ev => this.handleChange('cep', ev)}
													value={this.state.cep}
													name="cep"
													isError={isCepError}
													required
												/>
												{isCepError && <ErrorMessage>{errorMessage[8]}</ErrorMessage>}
											</WrapOrganizationItem>
										</WrapOrganizationContent2>
									</WrapOrganization>
								</ContainerCreateOrg>
								<ContainerConcludeButton>
									{error && <ErrorAllMessage>{error}</ErrorAllMessage>}
									<Button
										width={'100%'}
										margin='0 0 2rem'
										type="submit"
										text="concluir"
										textTransform
									/>
								</ContainerConcludeButton>
							</ContentWrapper>
						</Content>
					</Container>
				)}
				{this.state.modalSucess && <Sucessfully
					tradingName={this.state.tradingName}
					handleClosedModal={this.props.handleClosedModal}
					handleModalSucess={this.handleModalSucess}
					handleRedirect={this.props.handleRedirect}
				/>}
				{this.state.redirect && <Redirect exact to="/" />}
			</Overlay>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateOrganization);
