import React from 'react';
import Title from './Title';

class Missions extends React.Component {
  render() {
    const missions = 'Missões';
    return (
      <div data-testid="missions">
        <Title headline={ missions } />
      </div>
    );
  }
}

export default Missions;
