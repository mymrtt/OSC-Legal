import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import ImagemLogo from '../../../components/ImageLogo';

export const Container = styled.div`
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

export const ContainerFisicalPerson = styled.label`

  h1 {
    font-size: 1.3rem;
    margin: 0 0 10% 13%;
    text-transform: uppercase;
		font-weight: 800;
		font-family: 'Overpass', sans-serif;
  }

  div {
    display: flex;
    flex-flow: wrap column;
    height: 300px;

    @media (max-width: 500px) {
      & {
        height: initial;
        align-items: flex-start;
      }
    }

		span {
			h2 {
				margin: 0;
				margin-bottom: 0.4rem;
			}

			p {
				margin: 0;
			}
		}

    h2 {
      font-size: 0.7rem;
      margin-bottom: 0.4rem;
      color: #85144b;
      text-transform: uppercase;
      margin-left: 3.5rem;
			font-family: 'Overpass', sans-serif;
			font-weight: 700;
    }

    p {
      font-size: 16px;
      margin-bottom: 25px;
      margin-left: 13%;
			font-family: 'Overpass', sans-serif;
			font-weight: 300;
    }
  }
`;

export const ContainerLegalPerson = styled.label`
  h1 {
    font-size: 20px;
    align-self: flex-start;
    text-transform: uppercase;
    margin: 0 0 5% 13%;
		font-family: 'Overpass', sans-serif;
		font-weight: 800;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 100%;
			font-family: 'Overpass', sans-serif;
			font-weight: 300;
    }

    label {
      width: 80%;

      h2 {
        margin-bottom: 5px;
        color: #85144b;
        text-transform: uppercase;
        font-size: 12px;
        margin-left: 13px;
        margin-top: 25px;
				font-family: 'Overpass', sans-serif;
				font-weight: 700;
      }
    }
  }

  button {
    max-width: 80%;
    margin: 0 10%;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 3px;
		font-family: 'Overpass', sans-serif;
		font-weight: 700;
  }
`;

export const WrapLegalPerson = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;

  label:nth-of-type(1) {
    padding-right: 10px;
  }
`;

export default class LegalPerson extends Component {
  state = {
  	nomeError: false,
  	dataLegalPerson: {
  		nomeFantasia: '',
  		cnpj: '',
  		email: '',
  		telefone: '',
  		endereco: '',
  		complemento: '',
  		bairro: '',
  		cidade: '',
  		cep: '',
  	},
  };

  handleSubmit = (ev) => {
  	ev.preventDefault();
  	if (this.state.nome === '') {
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
  	const error = ['Nome fantasia incorreto'];

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
  								onChange={ev => this.handleChange('nomeFantasia', ev)}
  								value={this.state.nomeFantasia}
  							/>
  							{this.state.nomeError && <p>{error[0]}</p>}
  						</label>
  						<label>
  							<h2>cnpj</h2>
  							<Input
  								placeholder="00.000.000/0000-00"
  								value={this.state.cnpj}
  							/>
  						</label>
  						<label>
  							<h2>email</h2>
  							<Input
  								placeholder="email@email.com"
  								value={this.state.email}
  							/>
  						</label>
  						<label>
  							<h2>telefone</h2>
  							<Input
  								placeholder="(00) 00000-0000"
  								value={this.state.telefone}
  							/>
  						</label>
  						<label>
  							<h2>endereço</h2>
  							<Input
  								placeholder="Endereço"
  								value={this.state.endereco}
  							/>
  						</label>
  					</div>
  					<WrapLegalPerson>
  						<Label>
  							<label>
  								<label>
  									<h2>complemento</h2>
  									<Input
  										placeholder="Complemento"
  										value={this.state.complemento}
  									/>
  								</label>
  								<label>
  									<h2>cidade</h2>
  									<Input
  										placeholder="Cidade"
  										value={this.state.cidade}
  									/>
  								</label>
  							</label>
  							<label>
  								<label>
  									<h2>bairro</h2>
  									<Input
  										placeholder="Bairro"
  										value={this.state.bairro}
  									/>
  								</label>
  								<label>
  									<h2>cep</h2>
  									<Input
  										placeholder="00000-000"
  										value={this.state.cep}
  									/>
  								</label>
  							</label>
  						</Label>
  					</WrapLegalPerson>
  					<Button type="submit" text="associar pessoa jurídica" />
  				</ContainerLegalPerson>
  			</form>
  		</Container>
  	);
  }
}
