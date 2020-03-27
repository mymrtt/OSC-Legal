/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import UserForm from './UserForm';
import ModalTerms from './UserTerms';
import ConfirmEmail from './ConfirmEmail';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffcfcd;

  @media(max-width: 648px){
    background: #FFF;
  }
`;

class CreateFisicalPersonScreen extends Component {
  state = {
  	modalTerms: false,
  };

  handleModalTerms = () => {
  	this.setState({
  		modalTerms: !this.state.modalTerms,
  	});
  };

  render() {
  	return (
  		<div>
  			{this.state.modalTerms && <ModalTerms handleModalTerms={this.handleModalTerms}/>}
  			<UserForm handleModalTerms={this.handleModalTerms}/>
  		</div>

  	);
  }
}

export default CreateFisicalPersonScreen;
