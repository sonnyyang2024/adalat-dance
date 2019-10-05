import React from 'react';
import PropType from 'prop-types';
import Button from '../common/Button';

const DancePage = ({
  match
}) => (
  <div>
    <h1>Dance</h1>
    <Button text={match.params.danceId} />
  </div>
);

DancePage.propTypes = {
  match: PropType.object.isRequired
};

export default DancePage;
