import React, { Component } from 'react';
import { Typography } from '../components/Typography/Typography';

class NotFound extends Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Typography>Error 404</Typography>
        <p>Página no encontrada.</p>
      </div>
    );
  }
}

export default NotFound;