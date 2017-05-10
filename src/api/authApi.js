import service from './service.js';

export default class AuthApi {
    static getAuth(s, e) {
        var api = '/login';
        var parameter = {
            param: { id: 'Alvin.Wnag', psw: 12345667 },
            type: 'POST',
            success: (args) => { s(args); },
            error: (args) => { e(args); }
        };

        service.query(api, parameter);
    }
}