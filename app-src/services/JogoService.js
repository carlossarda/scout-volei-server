import {Jogo} from '../models/Jogo';

export class JogoService {
    retornaJogos(){
        return [new Jogo(1,"jogo 1")];
    }
}