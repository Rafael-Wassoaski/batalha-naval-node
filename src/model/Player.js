import Navio from './Navios/Navios';

class Player{
    nome;
    pontos;
    naviosAfundados;

    constructor(nome){
        this.nome = nome;
        potos = 0;
    }

    set naviosAfundados(navio){
        this.naviosAfundados.append(navio);
    }
}