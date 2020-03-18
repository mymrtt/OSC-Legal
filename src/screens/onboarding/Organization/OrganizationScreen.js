/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */

// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Input from '../../../components/Input';
import Button from '../../../components/Button';

// Images
import ImagemLogo from '../../../components/ImageLogo';

const Container = styled.div`
  max-width: 100%;
  max-height: 100%;
  background: #ffcfcd;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
		min-width: 40%;
    justify-content: center;
    flex-direction: column;
    padding: 3rem 0 1rem 0;
    margin: 1rem 1rem 2rem 1rem;
    background: #ffffff;
  }
`;

const ContainerFisicalPerson = styled.label`
  h1 {
    font-size: 1.3rem;
    margin: 10% 0 10% 12%;
    text-transform: uppercase;
    font-weight: 800;
    font-family: "Overpass", sans-serif;
  }

  div {
    display: flex;
    flex-flow: wrap column;
    height: 300px;

    @media (max-width: 425px) {
      & {
        height: initial;
        align-items: flex-start;
        padding-left: 13%;
      }
    }

    span {
      h2 {
        margin: 0 0 0.4rem 0;
      }

      p {
        margin: 0 0 1.6rem 0;
      }
    }

    @media (max-width: 425px) {
      span {
        margin: 0;
      }
    }

    h2 {
      font-size: 0.7rem;
      margin-bottom: 0.4rem;
      color: #85144b;
      text-transform: uppercase;
      margin-left: 3.4rem;
      font-family: "Overpass", sans-serif;
      font-weight: 700;
    }

    @media (max-width: 425px) {
      h2 {
        margin: 0;
      }
    }

    p {
      font-size: 1rem;
      margin: 0 0 1.6rem 3.4rem;
      font-family: "Overpass", sans-serif;
      font-weight: 300;
    }

    @media (max-width: 425px) {
      p {
        margin: 0 0 1.6rem 0;
      }
    }
  }
`;

const ContainerLegalPerson = styled.label`
  h1 {
    font-size: 1.3rem;
    align-self: flex-start;
    text-transform: uppercase;
    margin: 0 0 0 12.2%;
    font-family: "Overpass", sans-serif;
    font-weight: 800;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 100%;
      font-family: "Overpass", sans-serif;
      font-weight: 300;
      padding: 1.4rem;
    }

    label {
      width: 80%;

      h2 {
        margin-bottom: 0.4rem;
        color: #85144b;
        text-transform: uppercase;
        font-size: 0.7rem;
        margin-left: 0.7rem;
        margin-top: 1.5rem;
        font-family: "Overpass", sans-serif;
        font-weight: 700;
      }
    }
  }

  button {
    max-width: 80%;
    margin: 0 10%;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 3px;
    font-family: "Overpass", sans-serif;
    font-weight: 700;
  }

  button:nth-last-of-type(1){
    max-width: 80%;
    margin:3% 10% 0 10%;
    background-color: #FFFFFF;
    color: #85144B;
    box-shadow: inherit;
    /* border-radius: 3px; */
    font-family: "Overpass", sans-serif;
    font-weight: 700;
  }
`;

const WrapLegalPerson = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;

  label:nth-of-type(1) {
    padding-right: 1rem;
  }
`;

export default class LegalPerson extends Component {
  state = {
    nomeError: false,
    dataLegalPerson: {
      fantasyName: '',
      companyName: '',
      cnpj: '',
      email: '',
      telephone: '',
      address: '',
      complement: '',
      neighborhood: '',
      city: '',
      zipCode: '',
    },
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.state.dataLegalPerson.fantasyName === '') {
      this.setState({
        nomeError: true,
      });
    } else {
      this.setState({
        nomeError: false,
      });
    }

    if (this.state.dataLegalPerson.cnpj === '') {
      this.setState({
        nomeError: true,
      });
    } else {
      this.setState({
        nomeError: false,
      });
    }
  };

  handleChange = (field, ev) => {
    const { dataLegalPerson } = this.state;
    dataLegalPerson[field] = ev.target.value;
    this.setState({
      dataLegalPerson,
    });
  };

  render() {
    const error = ['Nome fantasia invalido', 'CNPJ invalido', 'Email invalido'];

    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <ImagemLogo />
          <ContainerFisicalPerson>
            <h1>pessoa física</h1>
            <div>
              <h2>nome</h2>
              <p>Yasmin Miranda</p>
              <h2>rg</h2>
              <p>0000000-0</p>
              <h2>email</h2>
              <p>nome@email.com</p>
              <h2>telefone</h2>
              <p>(99) 99999-9999</p>
              <span>
                <h2>data de nascimento</h2>
                <p>22/02/2020</p>
                <h2>cpf</h2>
                <p>0000000-00</p>
              </span>
            </div>
          </ContainerFisicalPerson>
          <ContainerLegalPerson>
            <h1>associar pessoa jurídica</h1>
            <div>
              <label>
                <h2>nome fantasia</h2>
                <Input
                  placeholder="Nome da empresa"
                  onChange={ev => this.handleChange('fantasyName', ev)}
                  value={this.state.fantasyName}
                />
                {this.state.nomeError && <p>{error[0]}</p>}
              </label>
              <label>
                <h2>razão social</h2>
                <Input
                  placeholder="Razão social"
                  onChange={ev => this.handleChange('companyName', ev)}
                  value={this.state.companyName}
                />
              </label>
              <label>
                <h2>cnpj</h2>
                <Input
									type="number"
                  placeholder="00.000.000/0000-00"
                  onChange={ev => this.handleChange('cnpj', ev)}
                  value={this.state.cnpj}
                />
                {this.state.nomeError && <p>{error[1]}</p>}
              </label>
              <label>
                <h2>email</h2>
                <Input placeholder="email@email.com" value={this.state.email} />
              </label>
              <label>
                <h2>telefone</h2>
                <Input
									type="number"
                  placeholder="(00) 00000-0000"
                  value={this.state.telephone}
                />
              </label>
              <label>
                <h2>endereço</h2>
                <Input placeholder="Endereço" value={this.state.address} />
              </label>
            </div>
            <WrapLegalPerson>
              <Label>
                <label>
                  <label>
                    <h2>complemento</h2>
                    <Input
                      placeholder="Complemento"
                      value={this.state.complement}
                    />
                  </label>
                  <label>
                    <h2>cidade</h2>
                    <Input placeholder="Cidade" value={this.state.city} />
                  </label>
                </label>
                <label>
                  <label>
                    <h2>bairro</h2>
                    <Input
                      placeholder="Bairro"
                      value={this.state.neighborhood}
                    />
                  </label>
                  <label>
                    <h2>cep</h2>
                    <Input type="number" placeholder="00000-000" value={this.state.zipCode} />
                  </label>
                </label>
              </Label>
            </WrapLegalPerson>
            <Button type="submit" text="concluir"/>
            <Button type="submit" text="associar outra pessoa jurídica"/>
          </ContainerLegalPerson>
        </form>
      </Container>
    );
  }
}
