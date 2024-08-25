// 1 - métodos
const animal = {
    nome: "Bob",
    latir: function() {
        console.log("Au au")
    },
};

console.log(animal.nome);

animal.latir();

// 2 - aprofundando métodos
const pessoa = {
    nome: "Pedro",

    getNome: function() {
        return this.nome;
    },

    setNome: function(novoNome) {
        this.nome = novoNome;
    },
 };

 console.log(pessoa.nome);

 console.log(pessoa.getNome());

 pessoa.setNome("João");

 console.log(pessoa.getNome());


// 3 - prototype
const text = "wasd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(arr.length);

console.log(Object.getPrototypeOf(arr));

const num = 1213;

console.log(Object.getPrototypeOf(num));

// 4 - mais sobre prototype
const myObject = {
    a: "b",
};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - classes báscicas
const cachorro = {
    raca: null,
    patas: 4,
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);

// 6 - função como classe - função construtora
function criarCachorro(nome, raca) {
    const cachorro = Object.create([]);

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const bob = criarCachorro("Bob", "Vira lata");

console.log(bob);

const jack = criarCachorro("Jack", "Poodle");

console.log(jack);

console.log(Object.getPrototypeOf(jack));

// 7 - funcoes como classe 
function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");

console.log(husky);

// 8 - métodosna funcao construtora
Cachorro.prototype.uivar = function () {
    console.log("Auuuuuuuu!");
};

console.log(Cachorro.prototype);

husky.uivar();

// 9 classes es6
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    };
};

const jeff = new CachorroClasse("Jeff", "Labrador");

console.log(jeff);

console.log(Object.getPrototypeOf(jeff));

// 10 mais sobre classes
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    };

    descreverCaminha() {
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
    };
}

const scania = new Caminhao(6, "Vermelha");

console.log(scania);

scania.descreverCaminha();

Caminhao.motor = 4;

const c2 = new Caminhao(4, "Preto");

console.log(c2);

console.log(c2.motor);

Caminhao.prototype.motor = 4.0;

const c3 = new Caminhao(6, "Azul");

console.log(c3.motor);

// 11 - override
class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    };
};

const pedro = new Humano("Pedro", 17);

console.log(pedro);

console.log(Humano.prototype.idade);

Humano.prototype.idade = "Não definida";

console.log(pedro.idade);

console.log(Humano.prototype.idade);

// 12 - symbol
class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;
    };
};

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;

Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("Boeing", 10);

console.log(boeing);

console.log(boeing[asas]);

console.log(boeing[pilotos]);

// 13 - getter e setter
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descrico = descricao;
        this.tags = tags;
    };

    get exibirTitulo() {
        return `Você está lendo: ${this.titulo}`;
    };

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ");
        this.tags = tagsArray;
    };
};

const myPost = new Post("Algum post", "É um post sobre programção");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "progrmação, javascript, js";

console.log(myPost);

// 14 - Herança
class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas);
        this.nome = nome;
    }
}

const shark = new Lobo(4, "Shark");

console.log(shark);

console.log(shark.patas);

// 15 - instanceof
console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero); // False pois estamos verificando as classes, se fosse o objeto ia retornar true

console.log(new Lobo(4, "teste") instanceof Mamifero); // Aqui sim é true

console.log(new Post("a", "b") instanceof Lobo); // Aqui é false pois não tem nexo isso ai
