import {Router, Request,Response} from 'express';
const router = Router();

/* GET home page. */
router.get('/', function(req:Request, res:Response) {
  res.render('index', { title: 'Staff Service' });
});

export default router;
