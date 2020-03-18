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
    border: ${props =>
    props.withError === true ? '1px solid #f00' : '1px solid #ffcfcd;'};
  }

  @media (max-width: 500px) {
    padding: 0 2rem;
  }

  @media (max-width: 375px) {
    padding: 1rem;
  }
`;

const BlockSmallerInput = styled.span`
    width: 90%;
    display: flex;
    justify-content: space-between;
    position: relative;

    @media(max-width: 425px){
      width: 100%;
      flex-direction: column;
    }
`;

const TitleForm = styled.h1`
  font-size: 1.3rem;
  font-family: "Overpass", ExtraBold;
  text-transform: uppercase;
  margin: 2rem 0 1.5rem 2.5rem;
  align-self: flex-start;
  
  @media (max-width: 425px) {
      margin: 2rem 0;
      font-size: 1.3rem;
    }
`;

const Label = styled.label`
  position: relative;
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const ParagraphInput = styled.p`
    align-self: flex-start;
    text-transform: uppercase;
    color: #85144b;
    font-size: 0.7rem;
    margin: 1.5rem 1.3rem 1rem 1.3rem;
    font-family: Overpass;
    font-weight: bold;

    @media (max-width: 425px) {
      text-align: left;
      margin-left: 0.2rem;
    }
`;

const Error = styled.h6`
  font-size: 0.6rem;
  color: red;
  align-self: flex-start;
  font-weight: normal;
  margin-left: 1.4rem;

  @media (max-width: 425px) {
    margin: 0;
  }
`;
const InputForm = styled.input`
  width: 90%;
  height: 40px;
  border: 1px solid #ffcfcd;
  background: #fafafa;
  padding: 0.5rem;
  font-size: 0.9rem;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const ImagePassword = styled.img`
  position: absolute;
  bottom: 0.8rem;
  right: 0.5rem;
  cursor: pointer;
`;
const TextTerms = styled.p`
  font-size: 0.6rem;
  margin: 1rem 0;
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
`;


class FisicalPersonForm extends Component {
  state = {
    togglePassword: false,
    modalSucess: false,
    user: {
      name: '',
      surname: '',
      rg: '',
      sendingBody: '',
      uf: '',
      birth: '',
      cpf: '',
      email: '',
      telephone: '',
      password: '',
    },
    isErrorRg: false,
    isErrorPassword: false,
    isErrorCpf: false,
    isEmpty: false,
    dataUser: [],
  };

  togglePassword = (ev) => {
    ev.preventDefault();
    this.setState({
      togglePassword: !this.state.togglePassword,
    });
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

  handleSubmit = ev => {
    ev.preventDefault();
    this.errors();
  };

  errors = () => {
    const { user } = this.state;
    const {
      name,
      surname,
      rg,
      sendingBody,
      uf,
      birth,
      cpf,
      email,
      telephone,
      password
    } = this.state.user;
  
    if (
      name,
      surname,
      rg,
      sendingBody,
      uf,
      birth,
      cpf,
      email,
      telephone,
      password === ''
    ) {
      this.setState({
        isEmpty: true,
      })
    } else {
      this.props.addNewUser(user);
      this.handleModalSucess();
    }

  };

  render() {
    const errorMessage = [
      "RG inválido",
      "Senha fraca",
      "CPF inválido",
      "Preencha todos os valores",
      "E-mail inválido",
      "Uf inválida",
      "Orgão expedidor inválido"
    ];

    const {
      isErrorPassword,
      isErrorRg,
      isErrorCpf,
      modalSucess,
      isEmpty,
      isErrorOrgao,
      isErrorUf,
      isErrorEmail
    } = this.state;

    return (
      <>
        {modalSucess === true ? (
          <Container>
            <FisicalPersonSucess handleModalSucess={this.handleModalSucess} />
          </Container>
        ) : (
            <Container>
              <Form onSubmit={this.handleSubmit} withError={isEmpty, isErrorEmail, isErrorRg, isErrorCpf, isErrorOrgao, isErrorUf, isErrorPassword}>
                <ImageLogo />
                <TitleForm>cadastrar pessoa física</TitleForm>
                <Label>
                  <ParagraphInput>Nome</ParagraphInput>
                  <Input
                    type="text"
                    onChange={ev => this.handleChange("name", ev)}
                    value={this.state.name}
                    placeholder="Nome"
                    name="nome"
                  />
                  {isEmpty && <Error>{errorMessage[3]}</Error>}
                </Label>
                <Label>
                  <ParagraphInput>Sobrenome</ParagraphInput>
                  <Input
                    type="text"
                    onChange={ev => this.handleChange("surname", ev)}
                    value={this.state.surname}
                    placeholder="Sobrenome"
                    name="sobrenome"
                  />
                  {isEmpty && <Error>{errorMessage[3]}</Error>}
                </Label>
                <BlockSmallerInput>
                  <Label>
                    <ParagraphInput>rg</ParagraphInput>
                    <InputForm
                      type="number"
                      onChange={ev => this.handleChange("rg", ev)}
                      value={this.state.rg}
                      placeholder="000000-0"
                      name="rg"
                    />
                    {isEmpty && <Error>{errorMessage[3]}</Error>}
                    {isErrorRg && <Error>{errorMessage[0]}</Error>}
                  </Label>
                  <Label>
                    <ParagraphInput>Orgão expedidor</ParagraphInput>
                    <InputForm
                      type="text"
                      onChange={ev => this.handleChange("sendingBody", ev)}
                      value={this.state.sendingBody}
                      name="orgao"
                      placeholder="Detran"
                    />
                    {isEmpty && <Error>{errorMessage[3]}</Error>}
                  </Label>
                </BlockSmallerInput>
                <BlockSmallerInput>
                  <Label>
                    <ParagraphInput>uf</ParagraphInput>
                    <InputForm
                      type="text"
                      onChange={ev => this.handleChange("uf", ev)}
                      value={this.state.uf}
                      placeholder="RJ"
                      name="uf"
                    />
                    {isEmpty && <Error>{errorMessage[3]}</Error>}
                  </Label>
                  <Label>
                    <ParagraphInput>data de nascimento</ParagraphInput>
                    <InputForm
                      type="number"
                      onChange={ev => this.handleChange("birth", ev)}
                      value={this.state.birth}
                      placeholder="02/01/2020"
                      name="nascimento"
                    />
                    {isEmpty && <Error>{errorMessage[3]}</Error>}
                  </Label>
                </BlockSmallerInput>
                <Label>
                  <ParagraphInput>cpf</ParagraphInput>
                  <Input
                    type="number"
                    onChange={ev => this.handleChange("cpf", ev)}
                    value={this.state.cpf}
                    placeholder="000000-0"
                    name="cpf"
                  />
                  {isEmpty && <Error>{errorMessage[3]}</Error>}
                  {isErrorCpf && <Error>{errorMessage[2]}</Error>}
                </Label>
                <Label>
                  <ParagraphInput>email</ParagraphInput>
                  <Input
                    type="email"
                    onChange={ev => this.handleChange("email", ev)}
                    value={this.state.email}
                    name="email"
                    placeholder="nome@mail.com"
                    require
                  />
                  {isErrorEmail && <Error>{errorMessage[4]}</Error>}
                  {isEmpty && <Error>{errorMessage[3]}</Error>}
                </Label>
                <Label>
                  <ParagraphInput>telefone</ParagraphInput>
                  <Input
                    type="tel"
                    onChange={ev => this.handleChange("telephone", ev)}
                    value={this.state.telephone}
                    placeholder="(00) 00000-0000"
                    name="telefone"
                  />
                  {isEmpty && <Error>{errorMessage[3]}</Error>}
                </Label>
                <Label>
                  <ParagraphInput>senha</ParagraphInput>
                  <Input
                    className="input-password"
                    type={
                      this.state.togglePassword === true ? "text" : "password"
                    }
                    onChange={ev => this.handleChange("password", ev)}
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
                  {isEmpty && <Error>{errorMessage[3]}</Error>}
                  {isErrorPassword && <Error>{errorMessage[1]}</Error>}
                </Label>
                <TextTerms>
                  Clique abaixo para concordar com os
                <strong onClick={() => this.props.handleModalTerms()}>
                    Termos de Serviço
                </strong>
                  e registrar.
              </TextTerms>
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
