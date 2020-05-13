// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
// import { Link, Redirect } from 'react-router-dom';

// Components
import ImageClose from '../../../assets/fechar.svg';
// import ImageEdit from '../../../assets/edit.svg';
// import ImageDelete from '../../../assets/delete.svg';
import ImageBackMobile from '../../../assets/setaLado.svg';

// ImageClosed
import authorizationIcon from '../../../assets/authorization.svg';
import payIcon from '../../../assets/pay.svg';
import freeIcon from '../../../assets/free.svg';
import extendDeadlineIcon from '../../../assets/extendDeadline.svg';

const Overlay = styled.div`
	width: 100vw;
	min-height: 100vh;
	background-color: #707070a1;
	display: flex;
  align-items: center;
  justify-content: center;
	z-index: 20;
	position: absolute;
`;

const Container = styled.div`
	width: 70%;
	background-color: #FFFFFF;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (max-width: 935px) {
		width: 95%;
		margin: 0;
	}

	@media (max-width: 648px) {
		width: 100%;
		min-height: 100vh;
		overflow-x: hidden;
		overflow-y: scroll;
	}
`;

const Figure = styled.figure`
	width: 100%;
	background-color: #FFFFFF;
	position: fixed;
	top: 0;
`;


const ImageBack = styled.img`
	display: none;

	@media (max-width: 648px) {
		display: flex;
		align-self: end;
		padding: 1rem 0 2.3rem 1rem;
	}
`;

const ContentAdmin = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: ${props => (props.margin && '0 3.4rem')};

	@media (max-width: 935px) {
		margin: ${props => (props.margin && '0 1rem')};
	}

	@media (max-width: 648px) {
		height: auto;
		margin: 0;
		flex-direction: column;
		order: 1;
	}
`;

const ContentConsultor = styled.span`
	width: 60%;
	display: flex;
	flex-direction: column;

	@media (max-width: 648px) {
		width: 100%;
		padding: 0 1rem;
		order: 2;
	}
`;

const ContentConsultorItem = styled.div`
	/* width: 90%; */
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-left: 3.4rem;

	@media (max-width: 935px) {
		width: 100%;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-left: 1rem;
	}

	@media (max-width: 648px) {
		margin: 0;
	}
`;

const Title = styled.h2`
	color: #231F20;
	font-size: 1.25rem;
	font-family: Overpass, ExtraBold;
	font-weight: 900;
	padding-top: 2rem;
	padding-bottom: 1.7rem;
	margin-left: 3.4rem;
	text-transform: uppercase;

	@media (max-width: 935px) {
		margin-left: 1rem;
	}

	@media (max-width: 648px) {
		margin: 0;
	}
`;

const SubTitle = styled.p`
  color: #85144B;
	font-size: 0.75rem;
	font-family: Overpass, Bold;
	font-weight: 600;
  text-transform: uppercase;
`;

const SubAnswer = styled.p`
	color: #231F20;
	font-size: 0.9rem;
	font-family: "Overpass", Light;
	margin: 0.5rem 0 1rem 0;
`;

const ContentCreate = styled.div`
	width: 35%;
  color: #85144B;
	padding: 0 0 2rem 3rem;
  border-left: 1px solid;
	display: flex;
	flex-direction: column;

	@media (max-width: 648px) {
		width: 100%;
		border-left: 0;
		border-bottom: 1px solid;
		flex-direction: row;
		padding: 0 1rem;
		order: 1;
}
`;

const ImageClosed = styled.img`
	display: flex;
	align-self: flex-end;
	padding: 1rem 1rem 0;
	cursor: pointer;

	@media (max-width: 648px) {
		display: none;
	}
`;

const ContainerOrganization = styled.span`
	background-color: #FFCFCD;
	display: flex;
	flex-direction: column;
	padding-bottom: 1.5rem;

	@media (max-width: 648px) {
		/* height: auto; */
		padding: 0 1rem 2rem;
		order: 3;
	}
`;

const ContentOrganization = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: ${props => (props.margin && '0 3.4rem')};
	padding: 0 0 2rem;

	@media (max-width: 935px) {
		margin: ${props => (props.margin && '0 1rem')};
	}

	@media (max-width: 648px) {
		flex-direction: column;
		margin: 0;
		order: 4;
	}
`;

const ContentOrganizationMobile = styled.div`
	display: flex;
	flex-direction: row;
`;

const ContentConsultorDetails = styled.div`
	display: flex;
	flex-direction: column;

	 @media (max-width: 648px) {
		width: 100%;
		flex-direction: row;
		justify-content: space-between;
		margin: 5rem 0 0;

	}
`;

const Separation = styled.div`
	/* display: flex; */

	@media (max-width: 648px) {
		display: none;
	}
`;

const SeparationMobile = styled.div`
	display: none;

	@media (max-width: 648px) {
		width: 50%;
		display: flex;
		flex-direction: column;
	}
`;

const ContainerSelected = styled.div`
		display: none;

		@media (max-width: 648px) {
			width: 100%;
			padding: 1rem 0 0;
			display: flex;
			justify-content: center;
			justify-content: space-evenly;
			background-color: #FFFFFF;
			bottom: 0;
			align-items: center;
			position: fixed;
 	}
`;

const ContainerPaymentMethod = styled.div`
	border-bottom: ${props => (props.border && '5px solid #FF4136')};
	color: #231F20;
	padding-bottom: 1rem;
	display: flex;
	flex-direction: row;
	cursor: pointer;
`;

const PaymentMethodText = styled.p`
	color: ${props => (props.color && '#FF4136')};
	font-family: "Overpass", Light;
	padding-left: 0.3rem;
`;

class ModalOrganization extends Component {
	constructor(props) {
		super(props);
		this.state = {
			paymentMethodList: [
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
					desc: 'Prorrogar',
				},
			],
		};
	}

	handleClicked = (item) => {
		this.setState({
			selectedStatus: item.desc,
		});
	};

	render() {
		const { item } = this.props;
		return (
			<Overlay onClick={this.props.handleClosedModal}>
				<Container onClick={ev => ev.stopPropagation()}>
					<Figure>
						<ImageBack src={ImageBackMobile} onClick={this.props.handleClosedModal} />
					</Figure>
					<ContentAdmin>
						<ContentConsultor>
							<Title>consultor</Title>
							<ContentConsultorItem>
								<div>
									<SubTitle>nome</SubTitle>
									<SubAnswer>{item.admin.name}</SubAnswer>
									<SubTitle>rg</SubTitle>
									<SubAnswer>{item.admin.rg}</SubAnswer>
								</div>
								<div>
									<SubTitle>data de nascimento</SubTitle>
									<SubAnswer>{item.admin.dateOfBirth}</SubAnswer>
									<SubTitle>cpf</SubTitle>
									<SubAnswer>{item.cpf}</SubAnswer>
								</div>
								<div>
									<SubTitle>e-mail</SubTitle>
									<SubAnswer>{item.email}</SubAnswer>
									<SubTitle>telefone</SubTitle>
									<SubAnswer>{item.telephone}</SubAnswer>
								</div>
							</ContentConsultorItem>
						</ContentConsultor>
						<ContentCreate>
							<ImageClosed src={ImageClose} alt="Fechar" onClick={this.props.handleClosedModal} />
							<ContentConsultorDetails>
								<div>
									<SubTitle>criado em</SubTitle>
									<SubAnswer>{item.createdIn}</SubAnswer>
								</div>
								<div>
									<SubTitle>autorizado em</SubTitle>
									<SubAnswer>{item.authorization}</SubAnswer>
								</div>
								<div>
									<SubTitle>vencimento</SubTitle>
									<SubAnswer>{item.dueDate}</SubAnswer>
								</div>
							</ContentConsultorDetails>
						</ContentCreate>
					</ContentAdmin>
					<ContainerOrganization>
						<Title>organização</Title>
						<ContentOrganization margin>
							<Separation>
								<SubTitle>nome fantasia</SubTitle>
								<SubAnswer>{item.admin.fantasyName}</SubAnswer>
								<SubTitle>razão social</SubTitle>
								<SubAnswer>{item.admin.reasonSocial}</SubAnswer>
							</Separation>
							<Separation>
								<SubTitle>cnpj</SubTitle>
								<SubAnswer>{item.admin.cnpj}</SubAnswer>
								<SubTitle>telefone</SubTitle>
								<SubAnswer>{item.telephone}</SubAnswer>
							</Separation>
							<Separation>
								<SubTitle>email</SubTitle>
								<SubAnswer>{item.email}</SubAnswer>
								<SubTitle>endereço</SubTitle>
								<SubAnswer>{item.admin.address}</SubAnswer>
							</Separation>
							<Separation>
								<SubTitle>complemento</SubTitle>
								<SubAnswer>{item.admin.complement}</SubAnswer>
								<SubTitle>bairro</SubTitle>
								<SubAnswer>{item.admin.neighborhood}</SubAnswer>
							</Separation>
							<Separation>
								<SubTitle>cep</SubTitle>
								<SubAnswer>{item.admin.cep}</SubAnswer>
								<SubTitle>cidade</SubTitle>
								<SubAnswer>{item.admin.city}</SubAnswer>
							</Separation>
							<ContentOrganizationMobile>
								<SeparationMobile>
									<SubTitle>nome fantasia</SubTitle>
									<SubAnswer>{item.admin.fantasyName}</SubAnswer>
									<SubTitle>email</SubTitle>
									<SubAnswer>{item.email}</SubAnswer>
									<SubTitle>cnpj</SubTitle>
									<SubAnswer>{item.admin.cnpj}</SubAnswer>
									<SubTitle>complemento</SubTitle>
									<SubAnswer>{item.admin.complement}</SubAnswer>
									<SubTitle>bairro</SubTitle>
									<SubAnswer>{item.admin.neighborhood}</SubAnswer>
								</SeparationMobile>
								<SeparationMobile>
									<SubTitle>razão social</SubTitle>
									<SubAnswer>{item.admin.reasonSocial}</SubAnswer>
									<SubTitle>telefone</SubTitle>
									<SubAnswer>{item.telephone}</SubAnswer>
									<SubTitle>endereço</SubTitle>
									<SubAnswer>{item.admin.address}</SubAnswer>
									<SubTitle>cep</SubTitle>
									<SubAnswer>{item.admin.cep}</SubAnswer>
									<SubTitle>cidade</SubTitle>
									<SubAnswer>{item.admin.city}</SubAnswer>
								</SeparationMobile>
							</ContentOrganizationMobile>
						</ContentOrganization>
					</ContainerOrganization>
					<ContainerSelected>
						{this.state.paymentMethodList.map(item => (
							<ContainerPaymentMethod
								key={item.desc}
								border={this.state.selectedStatus === item.desc}
								onClick={() => this.handleClicked(item)}
							>
								<img src={item.img} alt={item.desc} />
								<PaymentMethodText
									color={this.state.selectedStatus === item.desc}
								>
									{item.desc}
								</PaymentMethodText>
							</ContainerPaymentMethod>))}
					</ContainerSelected>
				</Container>
			</Overlay>
		);
	}
}

export default ModalOrganization;
