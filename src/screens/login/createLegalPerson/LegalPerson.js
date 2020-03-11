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
    padding: 50px 0 20px 0;
    margin: 20px 0 45px 0;
    background: #ffffff;
  }
`;

export const ContainerFisicalPerson = styled.label`
  h1 {
    font-size: 20px;
    margin: 60px 0 0 64px;
    text-transform: uppercase;
  }

  div {
    display: flex;
    flex-flow: wrap column;
    height: 350px;
    padding: 60px 50px 20px 50px;

    h2 {
      font-size: 12px;
      margin-bottom: 10px;
      color: #85144b;
      text-transform: uppercase;
      margin-left: 15px;
    }

    p {
      font-size: 16px;
      margin-bottom: 25px;
      margin-left: 15px;
    }
  }
`;

export const ContainerLegalPerson = styled.label`
  h1 {
    font-size: 20px;
    align-self: flex-start;
    text-transform: uppercase;
		margin:0 0 25px 64px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 100%;
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
      }
    }
  }

  button {
    max-width: 80%;
    margin: 0 10%;
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
  	nome: 'Yasmin Miranda',
  	rg: '0000000-0',
  	email: 'nome@email.com',
  	telefone: '(99) 99999-9999',
  	dataNascimento: '22/02/2020',
  	cpf: '0000000-00',
  };

  render() {
  	return (
  		<Container>
  			<form>
  				<ImagemLogo />
  				<ContainerFisicalPerson>
  					<h1>pessoa física</h1>
  					<div>
  						<h2>nome</h2>
  						<p>{this.state.nome}</p>
  						<h2>rg</h2>
  						<p>{this.state.rg}</p>
  						<h2>email</h2>
  						<p>{this.state.email}</p>
  						<h2>telefone</h2>
  						<p>{this.state.telefone}</p>
  						<h2>data de nascimento</h2>
  						<p>{this.state.dataNascimento}</p>
  						<h2>cpf</h2>
  						<p>{this.state.cpf}</p>
  					</div>
  				</ContainerFisicalPerson>
  				<ContainerLegalPerson>
  					<h1>associar pessoa jurídica</h1>
  					<div>
  						<label>
  							<h2>nome fantasia</h2>
  							<Input placeholder="Nome da empresa" />
  						</label>
  						<label>
  							<h2>cnpj</h2>
  							<Input placeholder="00.000.000/0000-00" />
  						</label>
  						<label>
  							<h2>email</h2>
  							<Input placeholder="email@email.com" />
  						</label>
  						<label>
  							<h2>telefone</h2>
  							<Input placeholder="(00) 00000-0000" />
  						</label>
  						<label>
  							<h2>endereço</h2>
  							<Input placeholder="Endereço" />
  						</label>
  					</div>
  					<WrapLegalPerson>
  						<Label>
  							<label>
  								<label>
  									<h2>complemento</h2>
  									<Input placeholder="Complemento" />
  								</label>
  								<label>
  									<h2>cidade</h2>
  									<Input placeholder="Cidade" />
  								</label>
  							</label>
  							<label>
  								<label>
  									<h2>bairro</h2>
  									<Input placeholder="Bairro" />
  								</label>
  								<label>
  									<h2>cep</h2>
  									<Input placeholder="00000-000" />
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
