import {Campeonato} from '../models/Campeonato';
var campeonatos = [
    new Campeonato(1,"Campeonato 1", new Date()),
    new Campeonato(2,"Campeonato 2", new Date()),
    new Campeonato(3,"Campeonato 3", new Date()),
    new Campeonato(4,"Campeonato 4", new Date())
];

export class CampeonatoService {
    
    constructor(){
  
    }

    findAll(){
        return campeonatos;
    }

    save(dados){
        let ultimoCampeonato = campeonatos[campeonatos.length -1];
        let campeonato = new Campeonato(ultimoCampeonato.id_campeonato+1,dados.nome_campeonato,dados.data_campeonato);
        campeonatos.push(campeonato);
        return campeonatos;
    }
}