import React, { Component } from "react";
import Logo from "../../../assets/logo.svg";
import VisibilityOff from "../../../assets/visibility-off.svg";

import { Container, Form, Label, TextTerms, Error } from "./styles";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import ModalTerms from "./Modal";

export default class CreateFisicalPerson extends Component {
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
    errorMessage: false,
    modal: false
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

    if (this.state.rg.length < 9) {
      this.setState({
        errorMessage: true
      });
    } else {
      this.setState({
        errorMessage: false
      });
    }

    if (this.state.cpf.length < 11) {
      this.setState({
        errorMessage: true
      });
    } else {
      this.setState({
        errorMessage: false
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
    return (
      <Container>
        {this.state.modal === true ? (
          <ModalTerms handleModal={this.handleModal} />
        ) : (
          <Form
            onSubmit={this.handleSubmit}
            withError={this.state.errorMessage}
          >
            <img src={Logo} alt="Osc-logo" />
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
                <Input
                  type="number"
                  onChange={this.handleChange}
                  value={this.state.rg}
                  placeholder="000000-0"
                  name="rg"
                />
                {this.state.errorMessage && <Error>RG invalido</Error>}
              </Label>
              <Label>
                <p>Orgão expedidor</p>
                <Input
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
                <Input
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.uf}
                  name="uf"
                />
              </Label>
              <Label>
                <p>data de nascimento</p>
                <Input
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
              {this.state.errorMessage && <Error>CPF inválido</Error>}
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
                type="password"
                onChange={this.handleChange}
                value={this.state.senha}
                placeholder="Inserir senha"
                name="senha"
              />
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
