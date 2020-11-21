import Navio from './Navios';

class NavioTanque extends Navio{
    constructor(){
        this.tipo = "Navio Tanque";
        this.tamanho = 4;
        this.fotosPartes = [this.tamanho * 2];
        //inicializar as posicoes das partes com as fotos, o valor é tamanho X 2 devido ao fato dele
        //poder posicionar ^ V < >
    }
}

export default NavioTanque;
