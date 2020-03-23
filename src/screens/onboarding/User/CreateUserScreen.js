// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import FisicalPersonForm from './UserForm';
import FisicalPersonTerms from './UserTerms';

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
  		<Container>
  			{this.state.modalTerms === true ? (
  				<FisicalPersonTerms handleModalTerms={this.handleModalTerms} />
  			) : (
  				<FisicalPersonForm handleModalTerms={this.handleModalTerms} />
  			)}
  		</Container>
  	);
  }
}

export default CreateFisicalPersonScreen;
