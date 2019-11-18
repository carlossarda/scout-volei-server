import {Campeonato} from '../models/Campeonato';

var campeonatos = [
    new Campeonato(1, "Campeonato 1", new Date()),
    new Campeonato(2, "Campeonato 2", new Date()),
    new Campeonato(3, "Campeonato 3", new Date()),
    new Campeonato(4, "Campeonato 4", new Date())
];

export class CampeonatoService {

    constructor() {

    }

    findAll() {
        return this.toApi(campeonatos);
    }

    save(dados) {
        let ultimoCampeonato = campeonatos[campeonatos.length - 1];
        let campeonato = new Campeonato(ultimoCampeonato.id_campeonato + 1, dados.nome_campeonato, dados.data_campeonato);
        campeonatos.push(campeonato);
        return this.toApi(campeonatos);
    }

    toApi(listaCampeonatos) {
        let retorno = [];

        listaCampeonatos.map(campeonato => {
            let data = new Date(campeonato.data);
            let translateCampeonato = {
                id_campeonato: campeonato.id_campeonato,
                nome: campeonato.nome,
                data: this.formatDate(data)
            };
            retorno.push(translateCampeonato);
        });

        return retorno;
    }

    formatDate(data) {
        let day = data.getDate();
        let month = data.getMonth() + 1;
        let year = data.getFullYear();
        let hour = data.getHours() - 1;
        let minute = data.getMinutes();

        return `${day}/${month}/${year} ${hour}:${minute}`;
    }
}