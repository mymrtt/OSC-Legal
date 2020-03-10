import { createStore } from "redux";

function reducer(state, action) {
  return {
    user: [
      {
        id: 1,
        nome: "Gabriel",
        sobrenome: "Luiz",
        rg: "1234456789",
        orgao: "detran",
        uf: "rj",
        nascimento: "01051997",
        cpf: "12345678901",
        email: "gabriel.luizvieira01@gmail.com",
        telefone: 222695596,
        senha: 12334567
      }
    ]
  };
}

const store = createStore(reducer);

export default store;
