import {Request, Response} from 'express';
import {config} from 'firebase-functions';

export async function NotFoundApp(req: Request, res: Response) {
  res.status(404).sendFile('../static-pages/not-found.html');
  return;
}
