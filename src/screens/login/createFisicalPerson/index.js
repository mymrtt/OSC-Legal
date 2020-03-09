import React, { Component } from "react";
import Logo from "../../../assets/logo.svg";
import VisibilityOff from "../../../assets/visibility-off.svg";
import VisibilityOn from "../../../assets/visibility-on.svg";
import { connect } from "react-redux";

import {
  Container,
  Form,
  Label,
  TextTerms,
  Error,
  InputForm,
  LogoImage,
  ImagePassword
} from "./styles";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import ModalTerms from "./Modal";

const user = [
  {
    rg: "123456789",
    orgao: "Detran",
    uf: "RJ",
    cpf: "12345678901",
    email: "gabriel@test.com",
    telefone: "21999999999"
  }
];

class CreateFisicalPerson extends Component {
  state = {
    nome: "",
    sobrenome: "",
    rg: "",
    orgao: "",
    uf: "",
    nascimento: "",
    cpf: "",
    email: "",
    telefone: "",
    senha: "",
    isErrorRg: false,
    isErrorPassword: false,
    isErrorCpf: false,
    isErrorTel: false,
    modal: false,
    emptyError: false,
    togglePassword: false
  };

  togglePassword = ev => {
    ev.preventDefault();
    this.setState({
      togglePassword: !this.state.togglePassword
    });
  };

  handleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    console.log(user);

    if (
      this.state.rg.length < 9 ||
      this.state.rg.length > 9 ||
      this.state.rg !== user.rg
    ) {
      this.setState({
        isErrorRg: true
      });
    } else {
      this.setState({
        isErrorRg: false
      });
    }

    if (
      this.state.cpf.length < 11 ||
      this.state.cpf.length > 11 ||
      this.state.rg !== user.cpf
    ) {
      this.setState({
        isErrorCpf: true
      });
    } else {
      this.setState({
        isErrorCpf: false
      });
    }

    if (this.state.senha.length < 6) {
      this.setState({
        isErrorPassword: true
      });
    } else {
      this.setState({
        isErrorPassword: false
      });
    }

    this.setState({
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
    });
  };

  render() {
    const { isErrorCpf, isErrorPassword, isErrorRg } = this.state;
    return (
      <Container>
        {this.state.modal === true ? (
          <ModalTerms handleModal={this.handleModal} />
        ) : (
          <Form
            onSubmit={this.handleSubmit}
            withError={(isErrorCpf, isErrorPassword, isErrorRg)}
          >
            <LogoImage src={Logo} alt="Osc-logo" />
            <Label>
              <p>Nome:</p>
              <Input
                type="text"
                onChange={this.handleChange}
                value={this.state.nome}
                placeholder="Nome"
                name="nome"
              />
            </Label>
            <Label>
              <p>Sobrenome:</p>
              <Input
                type="text"
                onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                  value={this.state.uf}
                  name="uf"
                />
              </Label>
              <Label>
                <p>data de nascimento</p>
                <InputForm
                  type="number"
                  onChange={this.handleChange}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                value={this.state.email}
                name="email"
              />
            </Label>
            <Label>
              <p>telefone</p>
              <Input
                type="tel"
                onChange={this.handleChange}
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
                onChange={this.handleChange}
                value={this.state.senha}
                placeholder="Inserir senha"
                name="senha"
              />
              {this.state.togglePassword === true ? (
                <ImagePassword
                  src={VisibilityOff}
                  onClick={this.togglePassword}
                />
              ) : (
                <ImagePassword
                  src={VisibilityOn}
                  onClick={this.togglePassword}
                />
              )}
              {this.state.isErrorPassword && <Error>Senha fraca</Error>}
            </Label>
            <p>
              Clique abaixo para concordar com os
              <strong onClick={this.handleModal}>Termos de Serviço</strong> e
              registrar.
            </p>
            <Button
              text="concordar e criar conta"
              type="button"
              onCliick={this.handleSubmit}
            />
          </Form>
        )}
      </Container>
    );
  }
}

export default CreateFisicalPerson;
