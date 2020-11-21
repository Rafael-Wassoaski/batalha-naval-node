import Navio from './Navios';

class ContraTorpedeiro extends Navio{
    constructor(){
        this.tipo = "Contra Torpedeiro";
        this.tamanho = 3;
        this.fotosPartes = [this.tamanho * 2];
        //inicializar as posicoes das partes com as fotos, o valor é tamanho X 2 devido ao fato dele
        //poder posicionar ^ V < >
    }
}

export default ContraTorpedeiro;
