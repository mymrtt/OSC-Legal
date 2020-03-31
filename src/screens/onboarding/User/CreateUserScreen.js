/* eslint-disable import/no-cycle */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-mixed-spaces-and-tabs */

// Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Components
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import ImageLogo from '../../../components/ImageLogo';
import FisicalPersonSucess from './UserSucess';

// Images
import VisibilityOff from '../../../assets/visibility-off.svg';
import VisibilityOn from '../../../assets/visibility-on.svg';

// Redux
import { addNewUser } from '../../../dataflow/modules/sign-up-modules';

const mapStateToProps = state => ({
	signup: state.signup,
});

const mapDispatchToProps = dispatch => ({
	addNewUser: (user) => {
		dispatch(addNewUser(user));
	},
});

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffcfcd;

  @media(max-width: 648px){
    background: #FFF;
    height: auto;
  }
`;

const Form = styled.form`
  min-width: 32%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  border-radius: 5px;
  box-shadow: 0 1px 2px #00000029;

  input {
    border: ${props => (props.withError === true ? '1px solid #f00' : '1px solid #ffcfcd;')};
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    padding: 0 2rem;
  }

  @media (max-width: 648px) {
    margin: 0;
		width: 100%;
  }
`;

const BlockSmallerInput = styled.span`
    width: 90%;
    display: flex;
    justify-content: space-between;
    position: relative;
`;

const BlockTitle = styled.span`
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	@media(max-width: 648px){
		width: 100%;
	}
`;

const TitleForm = styled.h1`
  font-size: 1.3rem;
  font-family: "Overpass", ExtraBold;
  text-transform: uppercase;
  margin: 1.5rem 0 1rem 1.17rem;
  align-self: flex-start;
  
  @media(max-width: 768px){
	  margin-left: 0.7rem;
  }

  @media (max-width: 648px) {
	  
      margin: 2rem 0 1rem 0.25rem;
      font-size: 1.3rem;
    }
`;

const Label = styled.label`
  position: relative;
  width: 92%;
  display: flex;
  align-items: center;
  flex-direction: column;

    @media(max-width: 768px){
      width: 95%;
    }

  @media (max-width: 648px) {
      width: 95%;
      margin-left: 0.3rem;
  }
  @media(max-width: 425px){
      width: 100%;
  }
`;

const ParagraphInput = styled.p`
    align-self: flex-start;
    text-transform: uppercase;
    color: #85144b;
    font-size: 0.75rem;
    margin: 1.5rem 0 0.5rem 1.4rem;
    font-family: Overpass;
    font-weight: bold;

    @media (max-width: 425px) {
      text-align: left;
      margin-left: 0.2rem;
    }
`;

const Error = styled.h6`
  font-size: 0.6rem;
  color: #f00;
  align-self: flex-start;
  font-weight: normal;
  margin-left: 1.4rem;

  @media (max-width: 425px) {
    margin: 0;
  }
`;

const ErrorEmpty = styled.h6`
  font-size: 0.7rem;
  color: #F00;
  align-self: flex-start;
  font-weight: normal;
  margin-left: 2.5rem;
`;
const ImagePassword = styled.img`
  position: absolute;
  bottom: 1.2rem;
  right: 0.5rem;
  cursor: pointer;

  @media(max-width: 648px){
    bottom: 1.2rem;
  }
`;
const TextTerms = styled.p`
  font-size: 0.8rem;
  margin-top: 1.25rem;
  width: 95%;
  color: #505050;
  font-family: Overpass, Regular;
  text-align: center;

  strong {
    color: #85144b;
    font-size: 0.7rem;
    cursor: pointer;
    text-decoration: underline;
    margin: 0 0.2rem;
    font-family: Overpass, Regular;
  }

  @media(max-width: 648px){
    font-size: 0.8rem;
	width: 63%;
  }
`;

// Terms
const Overlay = styled.div`
	min-width: 100%;
  min-height: 100vh;
  background-color: #00000060;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 2.5rem 0;
  z-index: 99;

	@media(max-width: 648px) {
		padding: 0;
	}
`;
const Modal = styled.div`
   width: 33%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  z-index: 99;

  @media(max-width: 1024px){
    width: 40%;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 648px) {
    padding-bottom: 5rem;
    width: 100%;
    max-height: 100vh;
    justify-content: flex-start;
    align-self: center;
		overflow-y: auto;
  }
`;

const TitleTerms = styled.h1`
  align-self: flex-start;
  margin: 1rem 1rem;
  font-family: Overpass, Bold;
  font-size: 1.4rem;
  text-transform: uppercase;

  @media (max-width: 648px) {
    margin: 3rem 0 0.5rem 0;
    font-size: 1.5rem;
    align-self: center;
  }
`;
const ButtonTerms = styled.button`
    width: 7.5rem;
    height: 2.25rem;
    background-color: #ff4136;
    color: #fff;
    text-transform: uppercase;
    border: 0;
    border-radius: 4px;
    align-self: flex-end;
    margin: 0.4rem 0.5rem 0.4rem 0;
    box-shadow: 0 3px 6px #00000029;

    @media(max-width: 648px){
      position: fixed;
      bottom: 0;
      height: 3.5rem;
    }

  @media (max-width: 648px) {
    align-self: center;
    width: 90%;
    height: 56px;
    margin: 0.8rem 0;
    font-size: 1rem;
    font-weight: bold;
  }
`;

const BlockTerms = styled.div`
  width: 97%;
  height: 90%;
  background: #ffcfcd;
  padding: 1rem 1rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media(max-width: 648px){
    background: #FFF;
    height: 100%;
    justify-content: space-around;
  }
`;

const Terms = styled.p`
  width: 100%;
  font-family: Overpass, Regular;
  font-size: 0.9rem;
  margin: 0.9rem 0;

  u{
    color: #f00;
    margin: 0 0.2rem;
  }

  @media(max-width: 648px){
    margin: 1.5rem 0;
    font-size: 1rem;
    width: 90%;
    align-self: center;
  }
`;

const SubtitleTerms = styled.h3`
    margin: 1rem 0;
    font-size: 0.87rem;
    font-family: Overpass, Bold;

  @media(max-width: 648px){
    width: 75%;
    align-self: center;
    text-align: center;
  }
`;


class CreateFisicalPersonScreen extends Component {
  state = {
  	togglePassword: false,
  	modalSucess: false,
  	user: {
  		name: '',
  		surname: '',
  		cpf: '',
  		email: '',
  		telephone: '',
  		password: '',
  	},
  	isErrorCpf: false,
  	isErrorPassword: false,
  	isEmpty: false,
  	isTermsOpen: false,
  };

  togglePassword = (ev) => {
  	ev.preventDefault();
  	this.setState({
  		togglePassword: !this.state.togglePassword,
  	});
  };

	handleModalTerms = () => {
		this.setState({
			isTermsOpen: !this.state.isTermsOpen,
		});
	};

  handleModalSucess = () => {
  	this.setState({
  		modalSucess: !this.state.modalSucess,
  	});
  };

  handleChange = (field, ev) => {
  	const { user } = this.state;
  	user[field] = ev.target.value;
  	this.setState({ user });
  };

  handleSubmit = (ev) => {
  	ev.preventDefault();
  	this.errors();
  };

  errors = () => {
  	const { user } = this.state;
  	const {
  		name,
  		surname,
  		email,
  		telephone,
  		password,
  		cpf,
  	} = this.state.user;

  	if (
  		name === ''
      || surname === ''
      || email === ''
      || telephone === ''
      || password === ''
  	) {
  		this.setState({
  			isEmpty: true,
  		});
  	} else if (cpf.length < 11 || cpf.length > 11) {
  		this.setState({
  			isErrorCpf: true,
  		});
  	} else if (password.length < 6) {
  		this.setState({
  			isErrorPassword: true,
  		});
  	} else {
  		this.setState({ isEmpty: false, isErrorPassword: false, isErrorCpf: false });
  		this.props.addNewUser(user);
  		this.handleModalSucess();
  	}
  };

	renderTerms = () => (
		<Overlay>
			<Modal>
				<TitleTerms>termos de serviço</TitleTerms>
				<BlockTerms>
					<SubtitleTerms>Boas vindas ao Aplicativo do Estatuto OSC Legal</SubtitleTerms>
					<Terms>
            Esta é uma ferramenta voltada a fornecer um guia para que as associações possam elaborar ou reformar seus estatutos, documento obrigatório nessas organizações.
					</Terms>
					<Terms>
            Cada senha dará oportunidade para que você possa trabalhar no documento por 30 dias. Ao final desse prazo se considera finalizado o texto, gerando-se o documento equivalente no estado em que estiver.
					</Terms>
					<Terms>
            De acordo com a legislação brasileira, para registro de estatuto de associação é obrigatória a assinatura de advogad@ inscrito na OAB. Recomendamos que procure um/a profissional especialista.
					</Terms>
					<Terms>
            Qualquer dúvida e/ou esclarecimento entre em contato com nossa equipe:
						<u>
              osclegal@gmail.com
						</u>
					</Terms>
				</BlockTerms>
				<ButtonTerms onClick={this.handleModalTerms}>OK</ButtonTerms>
			</Modal>
		</Overlay>
	)

	render() {
  	const errorMessage = [
  		'Senha fraca',
  		'CPF inválido',
  		'Preencha todos os campos',
  		'E-mail inválido',
  	];

  	const {
  		isErrorPassword,
  		modalSucess,
  		isEmpty,
  		isErrorCpf,
  	} = this.state;

  	return (
  		<>
  			{modalSucess === true ? (
  				<Container>
  					<FisicalPersonSucess handleModalSucess={this.handleModalSucess} />
  				</Container>
  			) : (
  				<Container>
  					<Form
  						onSubmit={this.handleSubmit}
  						withError={isEmpty}
  					>
  						<ImageLogo
  							margin="3rem 0 2rem 0"
  							width=" 150px"
  						/>
  						<BlockTitle>
  							<TitleForm> criar conta </TitleForm>
  						</BlockTitle>
  						<Label>
  							<ParagraphInput>Nome</ParagraphInput>
  							<Input
  								type="text"
  								onChange={ev => this.handleChange('name', ev)}
  								value={this.state.name}
  								placeholder="Nome"
  								name="nome"
  							/>
  						</Label>
  						<Label>
  							<ParagraphInput>Sobrenome</ParagraphInput>
  							<Input
  								type="text"
  								onChange={ev => this.handleChange('surname', ev)}
  								value={this.state.surname}
  								placeholder="Sobrenome"
  								name="sobrenome"
  							/>
  						</Label>
  						<Label>
  							<ParagraphInput>cpf</ParagraphInput>
  							<Input
  								type="number"
  								onChange={ev => this.handleChange('cpf', ev)}
  								value={this.state.cpf}
  								placeholder="000000-0"
  								name="cpf"
  							/>
  							{isErrorCpf && <Error>{errorMessage[1]}</Error>}
  						</Label>

  						<Label>
  							<ParagraphInput>email</ParagraphInput>
  							<Input
  								type="email"
  								onChange={ev => this.handleChange('email', ev)}
  								value={this.state.email}
  								name="email"
  								placeholder="nome@mail.com"
  								required
  							/>
  						</Label>
  						<Label>
  							<ParagraphInput>telefone</ParagraphInput>
  							<Input
  								type="tel"
  								onChange={ev => this.handleChange('telephone', ev)}
  								value={this.state.telephone}
  								placeholder="(00) 00000-0000"
  								name="telefone"
  							/>
  						</Label>
  						<Label>
  							<ParagraphInput>senha</ParagraphInput>
  							<Input
  								className="input-password"
  								type={
  									this.state.togglePassword === true ? 'text' : 'password'
  								}
  								onChange={ev => this.handleChange('password', ev)}
  								value={this.state.password}
  								placeholder="Inserir senha"
  								name="password"
  							/>
  							{this.state.togglePassword === true ? (
  								<BlockSmallerInput>
  									<ImagePassword
  										src={VisibilityOff}
  										onClick={this.togglePassword}
  									/>
  								</BlockSmallerInput>
  							) : (
  								<BlockSmallerInput>
  									<ImagePassword
  										src={VisibilityOn}
  										onClick={this.togglePassword}
  									/>
  								</BlockSmallerInput>
  							)}
  							{isErrorPassword && <Error>{errorMessage[0]}</Error>}
  						</Label>
  						<TextTerms>
                  Clique abaixo para concordar com os
  							<strong onClick={this.handleModalTerms}>
                    Termos de Serviço
  							</strong>
                  e registrar.
  						</TextTerms>
  						{isEmpty && <ErrorEmpty>{errorMessage[2]}</ErrorEmpty>}
  						<Button
  							width="87%"
  							height="50px"
  							margin="1rem 0"
  							text="concordar e criar conta"
  							type="submit"
  							onClick={this.handleSubmit}
  							widthMobile="100%"
  						/>
  					</Form>
						{ this.state.isTermsOpen && this.renderTerms() }
  				</Container>
  			)}
  		</>
  	);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateFisicalPersonScreen);
