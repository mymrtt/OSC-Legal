import React, { Component } from "react";
import ModalTerms from "./ModalTerms";
import Formulario from "./Form";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffcfcd;
`;

class FisicalPerson extends Component {
  state = {
    modalTerms: false
  };

  handleModalTerms = () => {
    this.setState({
      modalTerms: !this.state.modalTerms
    });
  };

  render() {
    return (
      <Container>
        {this.state.modalTerms === true ? (
          <ModalTerms handleModalTerms={this.handleModalTerms} />
        ) : (
          <Formulario handleModalTerms={this.handleModalTerms} />
        )}
      </Container>
    );
  }
}

export default FisicalPerson;
