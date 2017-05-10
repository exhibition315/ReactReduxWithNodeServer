import config_dev from './config.dev.js';
import config_prod from './config.prod.js';

export default class ConfigHelper {
    static category = {
        Develop: 1,
        Production: 2
    };

    static init(category) {
        this.config;
        switch (category) {
            case 1:
                this.config = config_dev;
                break;
            case 2:
                this.config = config_prod;
                break;
            default:
                this.config = config_dev;
                break;
        }
    }

    static getInstance() {
        return this.config;
    }
}