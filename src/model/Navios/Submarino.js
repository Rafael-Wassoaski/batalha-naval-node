import Navios from './Navios';

class Submarino extends Navios{
    constructor(){
        this.tipo = "Submarino";
        this.tamanho = 2;
        this.fotosPartes = [this.tamanho * 2];
        //inicializar as posicoes das partes com as fotos, o valor é tamanho X 2 devido ao fato dele
        //poder posicionar ^ V < >
    }
}


export default Submarino;