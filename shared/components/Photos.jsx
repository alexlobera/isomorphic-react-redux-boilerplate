import React from 'react';
import { Link } from 'react-router';

const Photos = (props) => (
  <div>
    <h1>Photos</h1>
    <Link to="/">
      home
    </Link>
    <button onClick={props.fetchPhotos}>Next</button>
    <ul>
      {
        props.photos.map(photo => <img key={photo.id} src={photo.thumbnailUrl} />)
      }
    </ul>
  </div>
  
);

Photos.propTypes = {
  photos: React.PropTypes.array.isRequired,
  fetchPhotos: React.PropTypes.func.isRequired,
}

export default Photos;
