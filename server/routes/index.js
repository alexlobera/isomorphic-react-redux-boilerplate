import { Router } from 'express';
import photos from './photos';

export default function () {
  const router = Router();
  
  photos(router);

  return router;
}