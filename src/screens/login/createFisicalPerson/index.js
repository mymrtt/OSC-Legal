import React, { Component } from "react";

import { connect } from "react-redux";

import { Container } from "./styles";
import ModalTerms from "./ModalTerms";
import Formulario from "./Form";
import ModalSucess from "./ModalSucess";

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
    modalTerms: false
  };

  handleModal = () => {
    this.setState({
      modalTerms: !this.state.modal
    });
  };

  render() {
    return (
      <Container>
        {this.state.modal === true ? (
          <ModalTerms handleModal={this.handleModal} />
        ) : (
          <Formulario handleModal={this.handleModal} />
        )}
      </Container>
    );
  }
}

export default CreateFisicalPerson;
