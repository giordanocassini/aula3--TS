import Express from 'express';
import { Router, Request, Response } from 'express';

const app = Express();
const router = Router();

app.use(Express.json());

router.get('/', (req: Request, res: Response) => {
  res.json('Hi, World');
});

app.use(router);

app.listen(3333, () => console.log('server running on port 3333'));
