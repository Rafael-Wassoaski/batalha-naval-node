class Tabuleiro{
    campo;

    constructor(){
        this.campo = [10][10];
    }

   get campo(){
       return this.campo;
   }

   set navio(linha, coluna, navio){
       if(this.campo[linha][coluna] == null){
           this.campo[linha][coluna] = navio;
           return true;
       }
       return false;
   }

   atirar(linha, coluna){
       if(this.campo[linha][coluna] != null){
           return true;
       }
       return false;
   }

}

export default Tabuleiro;