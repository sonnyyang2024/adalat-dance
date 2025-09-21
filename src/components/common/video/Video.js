import React from 'react';
import PropTypes from 'prop-types';

const Video = ({
  src,
  title,
  poster
}) => (
  <div className="video-container">
    <video
      controls
      poster={poster}
      className="video-player"
    >
      <source src={`/videos/${src}`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {title && <h3 className="video-title">{title}</h3>}
  </div>
);

Video.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  poster: PropTypes.string
};

Video.defaultProps = {
  title: null,
  poster: null
};

export default Video;
