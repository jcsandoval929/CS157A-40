import { Connection } from './index';
import { resolve } from 'url';

export const all = async () => {
    return new Promise((resolve, reject) => {
        Connection.query('SELECT * from emp', (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export default {
    all
}
