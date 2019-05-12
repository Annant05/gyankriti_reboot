import init from './express';
import request from 'request';
import {SERVER_PORT} from '../config/config.js';

export default function start() {
    const app = init();
    app.listen(SERVER_PORT, () => {
        console.log('server started');
        request('http://169.254.169.254/latest/meta-data/public-ipv4', async function (error, response, body) {
            if (body !== undefined) console.log('\nserver started on ip:port : http://' + body + ":" + SERVER_PORT);
            else console.log('\nserver started on ip:port : ' + 'http://localhost' + ":" + SERVER_PORT);
        });
    });

}