let pessoa = {
  "nome": "Ramon",
  "altura": "1,76",
  "olhos": "Marrom",
  "hobbies": ["video game, futebol, exercicios"]


}

// convertendo um objeto para String
pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

// convertendo String para Objeto em formato JSON novamente.
pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);
