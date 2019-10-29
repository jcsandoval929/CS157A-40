import * as express from 'express';

import Database from './database';

const router = express.Router();

router.get('/api/emp', async (req, res) => {
    try {
        let emp = await Database.Emp.all();
        res.json(emp);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

export default router;