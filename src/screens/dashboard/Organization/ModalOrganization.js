// Libs
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

// Components
import ImageClose from '../../../assets/fechar.svg';
import ImageEdit from '../../../assets/edit.svg';
import ImageDelete from '../../../assets/delete.svg';
import ImageSeta from '../../../assets/setaLado.svg';

const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #707070a1;
	display: flex;
  justify-content: center;
  align-items: center;
	position: absolute;
	z-index: 2;

	@media (max-width: 648px) {
		/* background-color: #FFFFFF; */
	}
`;

const Container = styled.div`
	width: 83%;
	height: 75%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	background-color: #FFFFFF;
	/* opacity: 10; */


	@media (max-width: 935px) {
		width: 90%;
		height: 50%;
	}

	@media (max-width: 648px) {
		width: 100%;
		height: 100%;
	}
`;

const Image = styled.img`
	display: flex;
	align-self: flex-end;
	padding: 1rem;
	cursor: pointer;

	@media (max-width: 648px) {
		display: none;
	}
`;

const ImageS = styled.img`
	display: none;

	@media (max-width: 648px) {
		width: 4%;
		display: flex;
		margin: 0 0 1rem 1rem;
	}
`;

const ContentConsultorItem = styled.div`
	width: 90%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-left: 3.4rem;

	@media (max-width: 935px) {
		width: 98%;
		justify-content: space-between;
		margin-left: 1rem;
	}
`;

const ContentConsultorDetails = styled.div`
	display: flex;
	flex-direction: row;
`;

const Title = styled.h2`
	color: #231F20;
	display: flex;
	padding-top: 2rem;
	padding-bottom: 1.7rem;
	margin-left: 3.4rem;
	font-family: Overpass, ExtraBold;
	text-transform: uppercase;

	@media (max-width: 935px) {
		margin-left: 1rem;
	}
`;

const Span = styled.span`
  height: 50%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: ${props => (props.margin && '0 3.4rem')};

	@media (max-width: 935px) {
		margin: ${props => (props.margin && '0 1rem')};
	}

	@media (max-width: 648px) {
		flex-direction: column-reverse;
	}
`;

const SpanOrganization = styled.span`
	height: 50%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: ${props => (props.margin && '0 3.4rem')};

	@media (max-width: 935px) {
		margin: ${props => (props.margin && '0 1rem')};
	}

	@media (max-width: 768px) {
		flex-flow: wrap;
	}
`;

const ContentConsultor = styled.span`
	width: 60%;
	display: flex;
	flex-direction: column;

	@media (max-width: 648px) {
		width: 100%;
		height: 30vh;
	}
`;

const ImageEdite = styled.img`
	display: flex;
  flex-direction: row;
`;

const ContentSubTitle = styled.div`
	width: 60%;

	@media (max-width: 648px) {
		width: 100%;
		display: flex;
		flex-direction: row;
    justify-content: space-between;
    margin: 0 1rem;
	}
`;

const Div = styled.div`
	width: 35%;
  color: #85144B;
	padding-left: 3rem;
  border-left: 1px solid;
	display: flex;
	flex-direction: column;

	@media (max-width: 648px) {
    width: 100%;
		border-left: 0;
    border-bottom: 1px solid;
		padding: 1.5rem 0;
	}
`;

const ContainerEdit = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 648px) {
		display: none;
	}
`;

const SpanContainer = styled.span`
	display: flex;
	flex-direction: row;
`;

const ContainerOption = styled.p`
	color: #85144B;
	font-family: Overpass, Regular;
	font-size: 1.2rem;
	display: flex;
  align-items: center;
	margin-left: 0.3rem;
`;

const SubTitle = styled.p`
  color: #85144B;
	font-size: 1rem;
	font-family: Overpass, Bold;
	font-weight: 600;
  text-transform: uppercase;

	@media (max-width: 648px) {
		font-size: 1.2rem;
	}
`;

const SubAnswer = styled.p`
	color: #231F20;
	font-size: 0.9rem;
	font-family: Overpass, Light;
	margin: 0.5rem 0 0.8rem 0;

	@media (max-width: 648px) {
		font-size: 1rem;
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
		display: flex;
		flex-direction: column;
	}
`;

const Parte2 = styled.span`
	height: 50%;
	background-color: #FFCFCD;
	display: flex;
	flex-direction: column;

	@media (max-width: 648px) {

	}
`;

const ContainerEditImage = styled.div`
	display: none;

	@media (max-width: 648px) {
		height: 5vh;
		display: flex;
		justify-content: center;
		justify-content: space-evenly;
		background-color: #FFFFFF;
	}
`;

const SpanContainerImage = styled.div`
	  display: flex;
    flex-direction: row;

`;


class ModalOrganization extends Component {
	render() {
		return (
			<Overlay>
				<Container>
					<Span>
						<ContentConsultor>
							<Title>consultor</Title>
							<ContentConsultorItem>
								<div>
									<SubTitle>nome</SubTitle>
									<SubAnswer>Yasmin Miranda</SubAnswer>
									<SubTitle>rg</SubTitle>
									<SubAnswer>00000000-0</SubAnswer>
								</div>
								<div>
									<SubTitle>data de nascimento</SubTitle>
									<SubAnswer>22/02/2020</SubAnswer>
									<SubTitle>cpf</SubTitle>
									<SubAnswer>000.000.000-00</SubAnswer>
								</div>
								<div>
									<SubTitle>email</SubTitle>
									<SubAnswer>nome@email.com</SubAnswer>
									<SubTitle>telefone</SubTitle>
									<SubAnswer>(99) 99999-9999</SubAnswer>
								</div>
							</ContentConsultorItem>
						</ContentConsultor>
						<Div>
							<Image src={ImageClose} onClick={this.props.handleCloseModal}/>
							<div>
								<ImageS src={ImageSeta}/>
							</div>
							<ContentConsultorDetails>
								<ContentSubTitle>
									<div>
										<SubTitle>criado em</SubTitle>
										<SubAnswer>18/06/19</SubAnswer>
									</div>
									<div>
										<SubTitle>autorizado em</SubTitle>
										<SubAnswer> - </SubAnswer>
									</div>
									<div>
										<SubTitle>vencimento</SubTitle>
										<SubAnswer> - </SubAnswer>
									</div>
								</ContentSubTitle>
								{/* <ContainerEdit>
									<SpanContainer>
										<ImageEdite src={ImageEdit}/>
										<ContainerOption>Editar</ContainerOption>
									</SpanContainer>
									<SpanContainer>
										<img src={ImageDelete}/>
										<ContainerOption>Excluir</ContainerOption>
									</SpanContainer>
								</ContainerEdit> */}
							</ContentConsultorDetails>
						</Div>
					</Span>
					<Parte2>
						<Title>organização</Title>
						<SpanOrganization margin>
							<Separation>
								<SubTitle>nome fantasia</SubTitle>
								<SubAnswer>Vai na Web</SubAnswer>
								<SubTitle>nome razão</SubTitle>
								<SubAnswer>Instituto PrecisaSer</SubAnswer>
							</Separation>
							<Separation>
								<SubTitle>cnpj</SubTitle>
								<SubAnswer>00.000.000/0000-00</SubAnswer>
								<SubTitle>telefone</SubTitle>
								<SubAnswer>(00) 00000-0000</SubAnswer>
							</Separation>
							<Separation>
								<SubTitle>email</SubTitle>
								<SubAnswer>endereçodeemail@email.com</SubAnswer>
								<SubTitle>endereço</SubTitle>
								<SubAnswer>Rua Abóbora Doce, 256</SubAnswer>
							</Separation>
							<Separation>
								<SubTitle>complemento</SubTitle>
								<SubAnswer>Complemento</SubAnswer>
								<SubTitle>bairro</SubTitle>
								<SubAnswer>Centro</SubAnswer>
							</Separation>
							<Separation>
								<SubTitle>cep</SubTitle>
								<SubAnswer>00000-000</SubAnswer>
								<SubTitle>cidade</SubTitle>
								<SubAnswer>Rio de Janeiro</SubAnswer>
							</Separation>
							<SeparationMobile>
								<SubTitle>nome fantasia</SubTitle>
								<SubAnswer>Vai na Web</SubAnswer>
								<SubTitle>email</SubTitle>
								<SubAnswer>endereçodeemail@email.com</SubAnswer>
								<SubTitle>cnpj</SubTitle>
								<SubAnswer>00.000.000/0000-00</SubAnswer>
								<SubTitle>complemento</SubTitle>
								<SubAnswer>Complemento</SubAnswer>
								<SubTitle>bairro</SubTitle>
								<SubAnswer>Centro</SubAnswer>
							</SeparationMobile>
							<SeparationMobile>
								<SubTitle>nome razão</SubTitle>
								<SubAnswer>Instituto PrecisaSer</SubAnswer>
								<SubTitle>telefone</SubTitle>
								<SubAnswer>(00) 00000-0000</SubAnswer>
								<SubTitle>endereço</SubTitle>
								<SubAnswer>Rua Abóbora Doce, 256</SubAnswer>
								<SubTitle>cep</SubTitle>
								<SubAnswer>00000-000</SubAnswer>
								<SubTitle>cidade</SubTitle>
								<SubAnswer>Rio de Janeiro</SubAnswer>
							</SeparationMobile>
						</SpanOrganization>
						<ContainerEditImage>
							<SpanContainerImage>
								<ImageEdite src={ImageEdit}/>
								<ContainerOption>Editar</ContainerOption>
							</SpanContainerImage>
							<SpanContainerImage>
								<img src={ImageDelete}/>
								<ContainerOption>Excluir</ContainerOption>
							</SpanContainerImage>
						</ContainerEditImage>
					</Parte2>
				</Container>
			</Overlay>
		);
	}
}

export default ModalOrganization;
