import React from 'react';
import { Container } from 'redix';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Photos from '../components/Photos';
import * as actions from '../actions/photos';

// https://github.com/alexlbr/redix
class PhotosContainer extends Container {
  constructor(props) {
    super(props);
    this.setComponent(Photos, {
      mapPropFuncsToThis: props
    });
    this.bindThis('fetchPhotos');
  }

  componentDidMount() {
    if (!this.props.photos) {
      this.fetchPhotos();
    }
  }
}

const mapStateToProps = (state) => ({
  photos: state.entities.photos
})

export default connect(
  mapStateToProps,
  {
    fetchPhotos: actions.fetchPhotos,
  }
)(PhotosContainer);
