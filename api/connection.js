const mongoose = require('mongoose');

class Connection {
    constructor(config) {
        this._init = mongoose.connect(config);
    }

    async start() {
        const database = (await this._init).connection;

        database.on('error', (error) => {
            console.log(error);
        })
        database.once('connected', () => {
            console.log('Database Connected');
        })
    }

    async stop() {
        const database = (await this._init).connection;

        database.close();
    }
}

module.exports = Connection;


