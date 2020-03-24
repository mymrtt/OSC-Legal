/* eslint-disable class-methods-use-this */
/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-dupe-class-members */

// Libs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Components
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import ImageLogo from '../../../components/ImageLogo';
import FisicalPersonSucess from './UserSucess';
import { Container } from './CreateUserScreen';

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

const Form = styled.form`
  min-width: 35%;
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  border-radius: 3px;
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
    width: 100vw;
    min-height: 106vh;
    margin: 0;
  }
`;

const BlockSmallerInput = styled.span`
    width: 90%;
    display: flex;
    justify-content: space-between;
    position: relative;
`;

const TitleForm = styled.h1`
  font-size: 1.3rem;
  font-family: "Overpass", ExtraBold;
  text-transform: uppercase;
  margin: 1.3rem 0 1rem 2.6rem;
  align-self: flex-start;
  
  @media (max-width: 648px) {
      margin: 2rem 0;
      font-size: 1.3rem;
      align-self: center;
    }
`;

const Label = styled.label`
  position: relative;
  width: 90%;
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
    font-size: 0.8rem;
    margin: 1rem 1.3rem;
    font-family: Overpass;
    font-weight: bold;

    @media (max-width: 425px) {
      font-size: 0.7rem;
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
    bottom: 1.5rem;
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
    font-size: 0.6rem;
  }
`;


class FisicalPersonForm extends Component {
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
  };

  togglePassword = (ev) => {
    ev.preventDefault();
    this.setState({
      togglePassword: !this.state.togglePassword,
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
    this.errors()
  };

  errors = () => {
    const { user } = this.state;
    const {
      name,
      surname,
      email,
      telephone,
      password,
      cpf
    } = this.state.user;

    if (
      name === '' ||
      surname === '' ||
      email === '' ||
      telephone === '' ||
      password === ''
    ) {
      this.setState({
        isEmpty: true,
      });
    } else if (cpf.length < 11 || cpf.length > 11) {
      this.setState({
        isErrorCpf: true
      })
    } else if (password.length < 4) {
      this.setState({
        isErrorPassword: true,
      })
    } else {
      this.setState({ isEmpty: false, isErrorPassword: false, isErrorCpf: false });
      this.props.addNewUser(user);
      this.handleModalSucess();
    }
  };

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
      isErrorCpf
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
                withEmpty={isEmpty}
              >
                <ImageLogo />
                <TitleForm>cadastrar pessoa física</TitleForm>
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
                    require
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
                        src={VisibilityOn}
                        onClick={this.togglePassword}
                      />
                    </BlockSmallerInput>
                  ) : (
                      <BlockSmallerInput>
                        <ImagePassword
                          src={VisibilityOff}
                          onClick={this.togglePassword}
                        />
                      </BlockSmallerInput>
                    )}
                  {isErrorPassword && <Error>{errorMessage[0]}</Error>}
                </Label>
                <TextTerms>
                  Clique abaixo para concordar com os
                <strong onClick={() => this.props.handleModalTerms()}>
                    Termos de Serviço
                </strong>
                  e registrar.
              </TextTerms>
                {isEmpty && <ErrorEmpty>{errorMessage[2]}</ErrorEmpty>}
                <Button
                  text="concordar e criar conta"
                  type="submit"
                  onClick={this.handleSubmit}
                />
              </Form>
            </Container>
          )}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FisicalPersonForm);
