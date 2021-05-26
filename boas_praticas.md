# Boa Prática #1: Uso de atributos privados

### Errado: deixar exposto as propriedades internas da classe para livre manipulação
```javascript
class Animal {
    
    altura;
    largura;

    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

}
```
Com esta abordagem, uma classe externa pode acessar livremente os atributos da Classe Animal e altera-los à vontade

Certo: Utilizar o os novos modificadores de visibilidade do ECMAScript TC39
```javascript
class Animal {
    
    #altura;
    #largura;

    constructor(altura, largura) {
        this.#altura = altura;
        this.#largura = largura;
    }

}
```
Agora classes externas não conseguem mais acessar os campos privados da Classe Animal, com isto, protegemos a classe Animal de interferências externas e blindamos contra comportamentos inesperados

## Boa Prática #2: Uso de operadores funcionais

Vamos supor que queiramos iterar sobre um array para aplicar alguma operação sobre ele como fazer um calculo em cada elemento para retornar um novo array:

```javascript
["gato", "cachorro", "cavalo"] para ["GATO", "CACHORRO", "CAVALO"]
```

Uma abordagem clássica para resolver esse problema seria fazendo um laço com for e iterando sobre cada elemento do array para retornar o elemento em caixa alta:
```javascript
  const newArr = []
  for(el of ["gato", "cachorro", "cavalo"]) {
    newArr.push(el.toUpperCase())
  }
  return newArr
```
Esta abordagem funciona, mas além de estarmos declarando uma variável desnecessária, a complexidade pode aumentar muito conforme necessitamos de uma operação mais complexa

### Certo: Utilizar os operadores de array do ECMAScript 2015

```javascript
return newArr.map(e => e.toUpperCase())
```

Como podemos ver, a sintaxe é muito mais curta e a medida que podemos adicionar operadores de forma encadeada, a complexidade do código não tende a aumentar tanto quanto no exemplo anterior

## Boa Prática #3: Uso de === ao invés de ==
Como normalmente nós viemos de linguagens de programação como java e C, temos o costume de utilizar o operador == para verificar igualdade entre termos, mas no javascript, existe uma certa diferença entre o operador == e ===, podendo retornar um valor diferente do que esperamos para a operação, por exemplo:

A expressão `[] == false ` retorna `true` quando na verdade, deveria retornar `false`, pois um array vazio é evidentemente diferente de um booleano `false`, já a expressão `[] === false` retornará `false` como esperado.

Isso acontece pelo conceito de _truthy_ que existe dentro do javascript, valores diversos são convertidos pelo motor de javascript para booleans o tempo inteiro, para verificarmos se de repente um array está vazio, podemos utilizar `if(array)`e o javascript irá fazer a conversão deste array para um booleano, e se ele estiver vazio ([]), será equivalente a um `false`, e é isso que o operador `==` faz, e por isso que expressões como `[] == false` retornam `true`, daí o operador `===` previne que enganos como este ocorram, já que ele é mais restrito no momento de comparar dois valores.



