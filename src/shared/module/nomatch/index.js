import React from 'react';

import BG from '../../static/image/love.jpg';

const style = {
  padding: '16px'
};

export default class NoMatch extends React.Component {
  render() {
    return (
      <div style={style}>
        <h1>Sorry!</h1>
        <p>The page you requested was not found...</p>
      </div>
    );
  }
}
