import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Form,
  Label,
  TextTerms,
  Error,
  InputForm,
  ImagePassword
} from "./styles";
import VisibilityOff from "../../../assets/visibility-off.svg";
import VisibilityOn from "../../../assets/visibility-on.svg";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import ImageLogo from "../../../components/ImageLogo";
import ModalSucess from "./ModalSucess";

class Formulario extends Component {
  state = {
    rg: "",
    cpf: "",
    password: "",
    modalSucess: false,
    togglePassword: false,
    empty: false,
    isErrorRg: false,
    isErrorCpf: false,
    isErrorPassword: false
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

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { rg, cpf, password } = this.state;

    if (password < 4 || rg < 9 || cpf < 11) {
      this.setState({
        isErrorCpf: true,
        isErrorPassword: true,
        isErrorRg: true
      });
    } else {
      this.handleModalSucess();
    }
  };

  render() {
    return (
      <>
        {this.state.modalSucess === true ? (
          <ModalSucess handleModalSucess={this.handleModalSucess} />
        ) : (
          <Form
            onSubmit={this.handleSubmit}
            withError={
              (this.state.empty,
              this.state.isErrorCpf,
              this.state.isErrorPassword,
              this.state.isErrorRg)
            }
          >
            <ImageLogo />
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
              <strong onClick={this.props.handleModal}>
                Termos de Serviço
              </strong>{" "}
              e registrar.
            </p>
            <Button
              text="concordar e criar conta"
              type="button"
              onCliick={this.handleSubmit}
            />
          </Form>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps)(Formulario);
