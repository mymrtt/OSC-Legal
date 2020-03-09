import React, { Component } from "react";
import Logo from "./assets/Grupo 7942 (1).svg";
import Input from "./Input";
import {
	Container,
	FisicalPerson,
	LegalPerson,
	WrapLegalPerson,
	Button
} from "./Style";

export default class createLegalPerson extends Component {
  state = {
		nome: "Yasmin Miranda",
		rg: "0000000-0",
		email: "nome@email.com",
		telefone: "(99) 99999-9999",
		dataNascimento: "22/02/2020",
		cpf: "0000000-00"
	};

  render() {
  	return (
  		<Container>
  			<form>
  				<img src={Logo} alt="" />

  				<FisicalPerson>
  					<h1>PESSOA FÍSICA</h1>
  					<div>
  						<h2>NOME</h2>
  						<p>{this.state.nome}</p>
  						<h2>RG</h2>
  						<p>{this.state.rg}</p>
  						<h2>EMAIL</h2>
  						<p>{this.state.email}</p>
  						<h2>TELEFONE</h2>
  						<p>{this.state.telefone}</p>
  						<h2>DATA DE NASCIMENTO</h2>
  						<p>{this.state.dataNascimento}</p>
  						<h2>CPF</h2>
  						<p>{this.state.cpf}</p>
  					</div>
  				</FisicalPerson>
  				<LegalPerson>
  					<h1>ASSOCIAR PESSOA JURÍDICA</h1>
  					<div>
  						<p>NOME FANTASIA</p>
  						<Input placeholder="Nome da empresa" />
  					</div>
  					<div>
  						<p>CNPJ</p>
  						<Input placeholder="00.000.000/0000-00" />
  					</div>
  					<div>
  						<p>EMAIL</p>
  						<Input placeholder="email@email.com" />
  					</div>
  					<div>
  						<p>TELEFONE</p>
  						<Input placeholder="(00) 00000-0000" />
  					</div>
  					<div>
  						<p>ENDEREÇO</p>
  						<Input placeholder="Endereço" />
  					</div>
  					<WrapLegalPerson>
  						<div>
  							<p>COMPLEMENTO</p>
  							<Input placeholder="Complemento" />
  							<p>CIDADE</p>
  							<Input placeholder="Cidade" />
  						</div>
  						<div>
  							<p>BAIRRO</p>
  							<Input placeholder="Bairro" />
  							<p>CEP</p>
  							<Input placeholder="00000-000" />
  						</div>
  					</WrapLegalPerson>
  					<Button type="submit">ASSOCIAR PESSOA JURÍDICA</Button>
  				</LegalPerson>
  			</form>
  		</Container>
  	);
  }
}
