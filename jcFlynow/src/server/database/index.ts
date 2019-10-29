import * as mysql from 'mysql';
import config from '../config';

import Emp from './emp';

export const Connection = mysql.createConnection(config.mysql);

Connection.connect(err => {
    if (err) console.log(err);
});

export default {
    Emp
}