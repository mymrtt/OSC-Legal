import React, { Component } from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  max-height: 100%;
  background: #FFCFCD;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    max-width: 500px;
    flex-direction: column;
    padding: 50px 50px 20px 50px;
    margin: 20px 0 45px 0;
    background: #FFFFFF;
  }
`;

export const FisicalPerson = styled.label`

  h1 {
    font-size: 20px;
    margin: 60px 0 0 0;
		text-transform: uppercase;
  }

  div {
    display: flex;
    flex-flow: wrap column;
    height: 350px;
    padding: 60px 0 20px 0;

    h2 {
      font-size: 12px;
      margin-bottom: 10px;
      color: #85144B;
			text-transform: uppercase;
    }

    p {
      font-size: 16px;
      margin-bottom: 25px;
    }
  }
`;

export const LegalPerson = styled.label`
  h1 {
    font-size: 20px;
    margin-bottom: 25px;
		text-transform: uppercase;
  }

  div {
    margin-bottom: 25px;

    p {
      margin-bottom: 5px;
      color: #85144B;
			text-transform: uppercase;
    }

    Input {
      width: 100%;
      padding: 20px 15px;
      background: #FAFAFA;
      border: 1px solid #FFCFCD;
      border-radius: 3px;
    }
  }
`;

export const WrapLegalPerson = styled.div`
  display: flex;
  
  div {
    display: flex;
    flex-direction: column; 
    width: 95%;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 20px 15px;
  background: #FF4136;
  color: #FAFAFA;
  border: 0;
  font-weight: bold;
	text-transform: uppercase;
`;

export default class createLegalPerson extends Component {
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
  				{/* <img src={Logo} alt="" /> */}

  				<FisicalPerson>
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
  				</FisicalPerson>
  				<LegalPerson>
  					<h1>associar pessoa jurídica</h1>
  					{/* <div>
  						<p>nome fantasia</p>
  						<Input placeholder="Nome da empresa" />
  					</div>
  					<div>
  						<p>cnpj</p>
  						<Input placeholder="00.000.000/0000-00" />
  					</div>
  					<div>
  						<p>email</p>
  						<Input placeholder="email@email.com" />
  					</div>
  					<div>
  						<p>telefone</p>
  						<Input placeholder="(00) 00000-0000" />
  					</div>
  					<div>
  						<p>endereço</p>
  						<Input placeholder="Endereço" />
  					</div>
  					<WrapLegalPerson>
  						<div>
  							<p>complemento</p>
  							<Input placeholder="Complemento" />
  							<p>cidade</p>
  							<Input placeholder="Cidade" />
  						</div>
  						<div>
  							<p>bairro</p>
  							<Input placeholder="Bairro" />
  							<p>cep</p>
  							<Input placeholder="00000-000" />
  						</div>
  					</WrapLegalPerson> */}
  					<Button type="submit">associar pessoa jurídica</Button>
  				</LegalPerson>
  			</form>
  		</Container>
  	);
  }
}
