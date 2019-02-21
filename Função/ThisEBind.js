const pessoa = {
    saudacao: "Hello world",
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e 00

//Ao usar bind o this é amarrado ao objeto selecionado.
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()