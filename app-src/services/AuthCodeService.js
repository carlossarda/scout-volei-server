var auth_code = [
];

export class AuthCodeService {

    constructor() {

    }

    findAll() {
        return auth_code;
    }

    save(dados) {
        auth_code = {
            'access_token' : dados.access_token,
            'token_type' : dados.token_type,
            'refresh_token' : dados.refresh_token
        }
        return auth_code;
    }
}