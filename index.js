// Classe Do Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'feiticeiro':
                ataque = 'magia negra';
                break;
            case 'barbaro':
                ataque = 'machado';
                break;
            case 'samurai':
                ataque = 'espada';
                break;
            case 'arqueiro':
                ataque = 'flecha';
                break;
            default:
                ataque = 'realizou um ataque';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias da classe Heroi
const heroi1 = new Heroi('Zatanna', 594, 'feiticeiro');
const heroi2 = new Heroi('Conan', 55, 'barbaro');
const heroi3 = new Heroi('Kenshin', 77, 'samurai');
const heroi4 = new Heroi('clint Barton', 32, 'arqueiro');

// Ataque de cada herói
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();