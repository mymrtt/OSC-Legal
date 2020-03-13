/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
// Libs
import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// Components
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import ImageLogo from "../../../components/ImageLogo";
import FisicalPersonSucess from "./FisicalPersonSucess";
import { Container } from "./CreateFisicalPersonScreen";

// Images
import VisibilityOff from "../../../assets/visibility-off.svg";
import VisibilityOn from "../../../assets/visibility-on.svg";

// Redux
import { addNewUser } from "../../../dataflow/modules/sign-up-modules";

const mapStateToProps = state => ({
  signup: state.signup
});

const mapDispatchToProps = dispatch => ({
  addNewUser: user => {
    dispatch(addNewUser(user));
  }
});

export const Form = styled.form`
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
      props.withError === true ? "1px solid #f00" : "1px solid #ffcfcd;"};
  }

  @media (max-width: 500px) {
    padding: 0 2rem;
  }

  h1 {
    font-size: 1.3rem;
    font-family: "Overpass", ExtraBold;
    text-transform: uppercase;
    margin: 2rem 0 1.5rem 2.5rem;
    align-self: flex-start;
  }
  @media (max-width: 425px) {
    h1 {
      margin: 2rem 0;
      font-size: 1.3rem;
    }
  }

  @media (max-width: 375px) {
    padding: 1rem;
  }

  span {
    width: 90%;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  @media (max-width: 425px) {
    span {
      width: 100%;
      flex-direction: column;
    }
    p {
      text-align: center;
    }
  }
`;

export const Label = styled.label`
  position: relative;
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 425px) {
    width: 100%;
  }
  p {
    align-self: flex-start;
    text-transform: uppercase;
    color: #85144b;
    font-size: 0.7rem;
    margin: 1.5rem 1.3rem 1rem 1.3rem;
    font-family: Overpass, Bold;
    font-weight: bold;
  }

  @media (max-width: 425px) {
    p {
      text-align: left;
      margin-left: 0.2rem;
    }
  }
`;

export const Error = styled.h6`
  font-size: 0.6rem;
  color: red;
  align-self: flex-start;
  font-weight: normal;
  margin-left: 1.4rem;

  @media (max-width: 425px) {
    margin: 0;
  }
`;
export const InputForm = styled.input`
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

export const ImagePassword = styled.img`
  position: absolute;
  bottom: 2.5vh;
  right: 0.7rem;
  cursor: pointer;
`;
export const TextTerms = styled.p`
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
      nome: "",
      sobrenome: "",
      rg: "",
      orgao: "",
      uf: "",
      nascimento: "",
      cpf: "",
      email: "",
      telefone: "",
      senha: ""
    },
    isErrorRg: false,
    isErrorPassword: false,
    isErrorCpf: false,
    isEmpty: false
  };

  togglePassword = ev => {
    ev.preventDefault();
    this.setState({
      togglePassword: !this.state.togglePassword
    });
  };

  handleModalSucess = () => {
    this.setState({
      modalSucess: !this.state.modalSucess
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
      nome,
      sobrenome,
      rg,
      orgao,
      uf,
      nascimento,
      cpf,
      email,
      telefone,
      senha
    } = this.state.user;

    if (
      nome === "" ||
      sobrenome === "" ||
      rg === "" ||
      orgao === "" ||
      uf === "" ||
      nascimento === "" ||
      cpf === "" ||
      email === "" ||
      telefone === "" ||
      senha === ""
    ) {
      this.setState({ isEmpty: true });
    } else {
      this.setState({
        isEmpty: false,
        isErrorCpf: false,
        isErrorPassword: false,
        isErrorRg: false
      });
      this.props.addNewUser(user);
      this.handleModalSucess();
    }
  };

  render() {
    const errorMessage = [
      "RG inválido",
      "Senha fraca",
      "CPF inválido",
      "Preencha todos os valores"
    ];

    const {
      isErrorPassword,
      isErrorRg,
      isErrorCpf,
      modalSucess,
      isEmpty
    } = this.state;

    return (
      <>
        {modalSucess === true ? (
          <Container>
            <FisicalPersonSucess handleModalSucess={this.handleModalSucess} />
          </Container>
        ) : (
          <Container>
            <Form onSubmit={this.handleSubmit} withError={this.state.isEmpty}>
              <ImageLogo />
              <h1>cadastrar pessoa física</h1>
              <Label>
                <p>Nome</p>
                <Input
                  type="text"
                  onChange={ev => this.handleChange("nome", ev)}
                  value={this.state.nome}
                  placeholder="Nome"
                  name="nome"
                />
                {isEmpty && <Error>{errorMessage[3]}</Error>}
              </Label>
              <Label>
                <p>Sobrenome</p>
                <Input
                  type="text"
                  onChange={ev => this.handleChange("sobrenome", ev)}
                  value={this.state.sobrenome}
                  placeholder="Sobrenome"
                  name="sobrenome"
                />
                {isEmpty && <Error>{errorMessage[3]}</Error>}
              </Label>
              <span>
                <Label>
                  <p>rg</p>
                  <InputForm
                    type="number"
                    onChange={ev => this.handleChange("rg", ev)}
                    value={this.state.rg}
                    placeholder="000000-0"
                    name="rg"
                  />

                  {isErrorRg && <Error>{errorMessage[0]}</Error>}
                </Label>
                <Label>
                  <p>Orgão expedidor</p>
                  <InputForm
                    type="text"
                    onChange={ev => this.handleChange("orgao", ev)}
                    value={this.state.orgao}
                    name="orgao"
                  />
                  {isEmpty && <Error>{errorMessage[3]}</Error>}
                </Label>
              </span>
              <span>
                <Label>
                  <p>uf</p>
                  <InputForm
                    type="text"
                    onChange={ev => this.handleChange("uf", ev)}
                    value={this.state.uf}
                    name="uf"
                  />
                  {isEmpty && <Error>{errorMessage[3]}</Error>}
                </Label>
                <Label>
                  <p>data de nascimento</p>
                  <InputForm
                    type="number"
                    onChange={ev => this.handleChange("nascimento", ev)}
                    value={this.state.nascimento}
                    placeholder="02/01/2020"
                    name="nascimento"
                  />
                  {isEmpty && <Error>{errorMessage[3]}</Error>}
                </Label>
              </span>
              <Label>
                <p>cpf</p>
                <Input
                  type="number"
                  onChange={ev => this.handleChange("cpf", ev)}
                  value={this.state.cpf}
                  placeholder="000000-0"
                  name="cpf"
                />

                {isErrorCpf && <Error>{errorMessage[2]}</Error>}
              </Label>
              <Label>
                <p>email</p>
                <Input
                  type="email"
                  onChange={ev => this.handleChange("email", ev)}
                  value={this.state.email}
                  name="email"
                  placeholder="nome@mail.com"
                  require
                />

                {isEmpty && <Error>{errorMessage[3]}</Error>}
              </Label>
              <Label>
                <p>telefone</p>
                <Input
                  type="tel"
                  onChange={ev => this.handleChange("telefone", ev)}
                  value={this.state.telefone}
                  placeholder="(00) 00000-0000"
                  name="telefone"
                />
                {isEmpty && <Error>{errorMessage[3]}</Error>}
              </Label>
              <Label>
                <p>senha</p>
                <Input
                  className="input-password"
                  type={
                    this.state.togglePassword === true ? "text" : "password"
                  }
                  onChange={ev => this.handleChange("senha", ev)}
                  value={this.state.senha}
                  placeholder="Inserir senha"
                  name="password"
                />
                {this.state.togglePassword === true ? (
                  <span>
                    <ImagePassword
                      src={VisibilityOn}
                      onClick={this.togglePassword}
                    />
                  </span>
                ) : (
                  <span>
                    <ImagePassword
                      src={VisibilityOff}
                      onClick={this.togglePassword}
                    />
                  </span>
                )}
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
