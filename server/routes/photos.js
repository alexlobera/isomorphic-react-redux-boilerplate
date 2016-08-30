import * as api from '../../shared/api/photos';
import { path } from '../../shared/routes/config';

export default function (router) {
  
  router.get(path.photos, (req, res, next) => {
    api.fetchPhotos().then((photos) => {
      res.storeInitiaState = { photos: photos.slice(1,20) };
      next();
    });
  });

  router.get('/photos/:id', (req, res, next) => {
    res.storeInitiaState = { photos: [
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "http://placehold.it/600/92c952",
        "thumbnailUrl": "http://placehold.it/150/30ac17"
      }
    ]};

    next();
  });

  return router;
}
