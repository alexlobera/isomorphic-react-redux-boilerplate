import * as api from '../../shared/api/photos';
import { path } from '../../shared/routes/config';

export default function (router) {
  
  router.get(path.test, (req, res, next) => {
    api.fetchPhotos().then((photos) => {
      /**
       * Initializing the Redux store with photos so they are rendered in the server-side
       */
      res.storeInitiaState = { photos: photos.slice(1,20) };
      
      next();
    });
  });
  
  return router;
}
