/* eslint-disable class-methods-use-this */
// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import ImageDocument from '../../../assets/document.png';
// import magnifyingGlass from '../../../assets/'
import DownloadIcon from '../../../assets/download.svg';
import DownloadWhiteIcon from '../../../assets/downloadwhite.svg';
import DeleteIcon from '../../../assets/delete.svg';

const Container = styled.div`
  width: 100%;
	height: 90%;
`;

const ContainerHeader = styled.div`
	margin: 3rem 4rem 0 4rem;
  display: flex;
  justify-content: space-between;
`;

const AddModelImage = styled.img`
	width: 35%;
`;

const TitleSearch = styled.p`
  color: #85144B;
  font-size: 2rem;
  font-family: "Overpass", Black;
  font-weight: 600;
`;

const ContainerContent = styled.div`
	padding-top: 3rem;
	padding-right: 3rem;
	width: 100%;
	display: flex;
`;

const ContainerAddModel = styled.div`
	width: 30%;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const ContainerSearch = styled.div`
	margin-right: 2.8rem;
	width: 25%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const SearchText = styled.p`
  color: #231F20;
  font-size: 1.2rem;
  font-family: Overpass, Bold;
	font-weight: 600;
  margin-right: 0.8rem;
`;

const ContainerSearchInput = styled.div`
	width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  border: 0.5px solid #85144B;;
  border-radius: 3px;
  padding: 0.7rem;
`;

const ContainerModels = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
`;

const ContainerModel = styled.div`
	margin-bottom: 1rem;
	padding: 2rem;
	width: 95%;
	height: 100%;
	display: flex;
	cursor: pointer;

	&:hover {
		border: 1px solid #85144B;
		border-radius: 3px;
	}
`;

const ContainerModelDescription = styled.div`
	width: 85%;
	display: flex;
	flex-direction: column;
`;

const ModelNumber = styled.h2`
	margin-right: 0.5rem;
	color: #FF4136;
	font-family: "Overpass", Black;
	font-size: 1.5rem;
`;

const ModelTitle = styled.h2`
	margin-bottom: .5rem;
  color: #85144B;
  font-family: "Overpass", Black;
`;

const ModelParagraph = styled.p`
  width: 92%;
  font-size: 1.2rem;
  font-family: 'Overpass', Regular;
`;

const ContainerOptions = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

const Option = styled.button`
	margin-bottom: 1rem;
	width: 7rem;
	height: 2.5rem;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: transparent;
	border: none;
	border-radius: 4px;

	&:hover {
		background: #FF4136;
	}
`;

const OptionImage = styled.img`
`;

const OptionText = styled.p`
	color: #85144B;
	font-size: 1.2rem;
	font-family: "Overpass", SemiBold;
`;

const Button = styled.button`
  margin: 2rem;
	padding: 1.3rem;
  width: 55%;
  border: 0;
  color: #fff;
  box-shadow: 0 3px 6px #00000029;
  border-radius: 3px;
  font-size: 1.2rem;
	font-family: "Overpass", SemiBold;
  font-weight: bold;
  background-color: #FF4136;
`;

class DocumentsScreen extends Component {
	state = {
		modelsList: [
			{
				num: 1,
				title: 'Modelo Estatuto Associação',
				descripton: 'Documentação básica de uma associação, deve-se atentar para questões como a possibilidade de remuneração dos associados e dirigentes, tempo de mandato, organização interna etc.',
			},
			{
				num: 2,
				title: 'Modelo Estatuto para Grupo de capoeira',
				descripton: 'Documentação básica de uma associação, deve-se atentar para questões como a possibilidade de remuneração dos associados e dirigentes, tempo de mandato, organização interna etc. 3 Modelo Estatuto Fundação Documentação básica de uma fundação, deve-se atentar para todas as exigências legais, para as implicações relacionadas à dotação inicial de bens, além daquelas eventualmente sugeridas pelo Ministério Público. 4 Modelo Estatuto Associação Organização da Sociedade Civil de Interesse Público (OSCIP). documentação básica de associação, cumprindo as exigências da Lei nº 9.790/1999 para qualificação como OSCIP. 5 Modelo Ata Assembleia de Constituição Associação Modelo de ata de Assembleia específica para constituição de Associação, com a aprovação do estatuto e eleição dos cargos diretivos. 6 Modelo Ata Assembleia Geral Associação Modelo de ata de Assembleia Geral de Associação, que poderá ser adaptado e utilizado em diversos contextos, para qualquer pauta. 7 Modelo Registro Público Constituição Fundação Modelo de Escritura Pública de Registro de constituição de Fundação. Atentar para as exigências e rotinas dos cartórios competentes.',
			},
			{
				num: 3,
				title: 'Modelo Estatuto Fundação',
				descripton: 'Documentação básica de uma fundação, deve-se atentar para todas as exigências legais, para as implicações relacionadas à dotação inicial de bens, além daquelas eventualmente sugeridas pelo Ministério Público.',
			},
		],
	};

	render() {
		return (
			<Container>
				<ContainerHeader>
					<TitleSearch>Modelos de Documentos</TitleSearch>
					<ContainerSearch>
						<SearchText>Pesquisar</SearchText>
						<ContainerSearchInput>
							<SearchInput
								placeholder="Digite aqui para pesquisar"
							/>
							{/* <image src={} alt="Lupa" /> */}
						</ContainerSearchInput>
					</ContainerSearch>
				</ContainerHeader>
				<ContainerContent>
					<ContainerAddModel>
						<AddModelImage src={ImageDocument}/>
						<Button>Adicionar Modelo</Button>
					</ContainerAddModel>
					<ContainerModels>
						{this.state.modelsList.map(item => (
							<ContainerModel key={item}>
								<ContainerModelDescription>
									<span style={{ display: 'flex' }}>
										<ModelNumber>{item.num}</ModelNumber>
										<ModelTitle>{item.title}</ModelTitle>
									</span>
									<ModelParagraph>{item.descripton}</ModelParagraph>
								</ContainerModelDescription>
								<ContainerOptions>
									<Option>
										<OptionImage src={DownloadIcon} alt="Download" />
										<OptionText>Exportar</OptionText>
									</Option>
									<Option>
										<OptionImage src={DeleteIcon} alt="Deletar" />
										<OptionText>Excluir</OptionText>
									</Option>
								</ContainerOptions>
							</ContainerModel>
						))}
					</ContainerModels>
					{/* <ContainerModels>
						<ContainerModelDescription>
							<span style={{ display: 'flex' }}>
								<ModelNumber>1</ModelNumber>
								<ModelTitle>Modelo Estatuto Associação</ModelTitle>
							</span>
							<ModelParagraph>
								Documentação básica de uma associação,
								deve-se atentar para questões como a possibilidade de remuneração dos
								associados e dirigentes, tempo de mandato, organização interna etc.
							</ModelParagraph>
						</ContainerModelDescription>
						<ContainerOptions>
							<Option>
								<OptionImage src={DownloadIcon} alt="Download" />
								<OptionText>Exportar</OptionText>
							</Option>
							<Option>
								<OptionImage src={DeleteIcon} alt="Deletar" />
								<OptionText>Excluir</OptionText>
							</Option>
						</ContainerOptions>
					</ContainerModels> */}
				</ContainerContent>
			</Container>
		);
	}
}

export default DocumentsScreen;
