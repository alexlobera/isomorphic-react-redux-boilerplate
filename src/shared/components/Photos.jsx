import React from 'react';
import { Link } from 'react-router';

const Photos = (props) => {
  const index = Math.floor(Math.random() * 4880) + 1;
  return (
    <div>
      <h1>Testing the configuration</h1>
      <ul>
        <li>
          Change this line to test hot reloading (this file is in <code>src/shared/components/Photos.jsx</code>)
        </li>
        <li>
          <button onClick={props.fetchPhotos}>RANDOMIZE PHOTOS</button> (Rendering on the client-side)
        </li>
        <li>
          Disable JS and refresh the page (Rendering on the server-side)
        </li>
        <li>
          <Link to="/">
            test react-routing again
          </Link>
        </li>
      </ul>
      {
        props.photos.slice(index, index + 20).map(photo => <img key={Math.random()} src={photo.thumbnailUrl}/>)
      }
    </div>
  )
};

Photos.propTypes = {
  photos: React.PropTypes.array.isRequired,
  fetchPhotos: React.PropTypes.func.isRequired,
}

export default Photos;
