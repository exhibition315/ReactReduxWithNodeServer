import configHelper from '../config/configHelper.js';

export default class Service {
    static query(api, o) {
        var url = configHelper.getInstance().ServerURL + api;
        $.ajax({
            url: url,
            type: o.type,
            data: o.param,
            dataType: 'json',
            cache: false,
            success: (data) => {
                if (typeof o.success === 'function') {
                    o.success(data.result);
                }
            },
            error: (data) => {
                if (typeof o.error === 'function') {
                    o.error(data);
                }
            }
        });
    }
}