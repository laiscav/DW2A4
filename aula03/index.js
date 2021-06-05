class Pessoa {
    constructor(cpf, nome) {
        this.cpf = cpf; 
        this.nome = nome; 
    }
}

class Funcionario extends Pessoa {
    constructor(cpf, nome, salarioMensal = 3000) {
        super(cpf, nome);
        this.salarioMensal = salarioMensal;
    }
}

class EngenheiroTI extends Funcionario {
    constructor(cpf, nome, tecnologias, salarioMensal = 4000) {
        super(cpf, nome, salarioMensal);
        this.tecnologias = tecnologias
    }
}

let alberto = new Pessoa('000.000.001-91', 'Alberto')

    console.log('%c Nota-se que alberto não possui salarioMensal pois o atributo é declarado somente na classe Funcionario\n', 'background: #222; color: #bada55')
    console.log('objeto alberto criado através de new Pessoa()', alberto);
    console.log('%c salárioMensal: ' + alberto.salarioMensal, 'background: #222; color: #Ec89BD');

alberto = new Funcionario('000.000.001-91', 'Alberto')

    console.log('%c \nAgora, ele possuirá o salário de 3000 (valor padrão)\n', 'background: #222; color: #bada55')
    console.log('objeto alberto criado através de new Funcionario()', alberto,);
    console.log('%c salárioMensal: ' + alberto.salarioMensal, 'background: #222; color: #Ec89BD');

alberto = new EngenheiroTI('000.000.001-91', 'Alberto', ['Java', 'Javascript'])

    console.log('%c \nQuando criamos um EngeneitoTI ele também possui o atributo salárioMensal pois herda de Funcionario\n', 'background: #222; color: #bada55')
    console.log('objeto alberto criado através de new EngenheiroTI()', alberto);
    console.log('%c salárioMensal: ' + alberto.salarioMensal, 'background: #222; color: #Ec89BD');

alberto = new Pessoa('000.000.001-91', 'Alberto');

    console.log('%c \nSe instanciarmos uma Pessoa e então definirmos o atributo salarioMensal ele existirá no Objeto\n', 'background: #222; color: #bada55')

    alberto.salarioMensal = 2500;

    console.log(alberto);
    console.log('%c salárioMensal: ' + alberto.salarioMensal, 'background: #222; color: #Ec89BD');
