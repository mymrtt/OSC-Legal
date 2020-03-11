import React, { Component, useReducer } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addNewUser } from "../../../reducers/SignUpReducer";
import styled from "styled-components";
import VisibilityOff from "../../../assets/visibility-off.svg";
import VisibilityOn from "../../../assets/visibility-on.svg";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import ImageLogo from "../../../components/ImageLogo";
import ModalSucess from "./ModalSucess";

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => ({
  addNewUser: user => {
    dispatch(addNewUser(user));
  }
});

export const Form = styled.form`
  min-width: 40%;
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  margin: 1rem 0;

  h1 {
    font-size: 20px;
    text-transform: uppercase;
    margin: 2rem 0 1.5rem 2.5rem;
    align-self: flex-start;
  }

  input {
    border: ${props => props.withError && "1px solid red"};
  }

  @media (max-width: 375px) {
    padding: 1rem;
  }

  span {
    width: 90%;
    display: flex;
    justify-content: space-between;
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

  p {
    width: 80%;
    font-size: 11px;
    margin: 0.5rem 0;
    color: #505050;

    strong {
      color: #85144b;
      cursor: pointer;
      text-decoration: underline;
      margin: 0 0.3rem;
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
    font-size: 12px;
    margin-left: 1.3rem;
    font-weight: bold;
  }

  @media (max-width: 425px) {
    p {
      text-align: left;
      margin-left: 0;
    }
  }
`;

export const Error = styled.h4`
  font-size: 11px;
  color: red;
  align-self: flex-start;
  font-weight: normal;
  margin: 0.2rem 1rem;
`;
export const InputForm = styled.input`
  width: 90%;
  height: 40px;
  border: 1px solid #ffcfcd;
  background: #fafafa;
  padding: 0.5rem;
  font-size: 15px;

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const ImagePassword = styled.img`
  position: absolute;
  bottom: 1.5vh;
  right: 2vw;
  cursor: pointer;
`;

class Formulario extends Component {
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
    }
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
    const { user } = this.state;
    const { users } = this.props;

    this.props.addNewUser(user);
    this.handleModalSucess();
  };

  render() {
    return (
      <>
        {this.state.modalSucess === true ? (
          <ModalSucess handleModalSucess={this.handleModalSucess} />
        ) : (
          <Form handleSubmit={this.handleSubmit}>
            <ImageLogo />
            <h1>cadastrar pessoa física</h1>
            <Label>
              <p>Nome:</p>
              <Input
                type="text"
                onChange={ev => this.handleChange("nome", ev)}
                value={this.state.nome}
                placeholder="Nome"
                name="nome"
              />
            </Label>
            <Label>
              <p>Sobrenome:</p>
              <Input
                type="text"
                onChange={ev => this.handleChange("sobrenome", ev)}
                value={this.state.sobrenome}
                placeholder="Sobrenome"
                name="sobrenome"
              />
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
                {this.state.isErrorRg && <Error>RG invalido</Error>}
              </Label>
              <Label>
                <p>Orgão expedidor</p>
                <InputForm
                  type="text"
                  onChange={ev => this.handleChange("orgao", ev)}
                  value={this.state.orgao}
                  name="orgao"
                />
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
              {this.state.isErrorCpf && <Error>CPF inválido</Error>}
            </Label>
            <Label>
              <p>email</p>
              <Input
                type="email"
                onChange={ev => this.handleChange("email", ev)}
                value={this.state.email}
                name="email"
              />
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
            </Label>
            <Label>
              <p>senha</p>
              <Input
                className="input-password"
                type={this.state.togglePassword === true ? "text" : "password"}
                onChange={ev => this.handleChange("senha", ev)}
                value={this.state.password}
                placeholder="Inserir senha"
                name="password"
              />
              {this.state.togglePassword === true ? (
                <ImagePassword
                  src={VisibilityOn}
                  onClick={this.togglePassword}
                />
              ) : (
                <ImagePassword
                  src={VisibilityOff}
                  onClick={this.togglePassword}
                />
              )}
              {this.state.isErrorPassword && <Error>Senha fraca</Error>}
            </Label>
            <p>
              Clique abaixo para concordar com os
              <strong onClick={this.props.handleModalTerms}>
                Termos de Serviço
              </strong>{" "}
              e registrar.
            </p>
            <Button
              text="concordar e criar conta"
              type="submit"
              onClick={this.handleSubmit}
            />
          </Form>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
