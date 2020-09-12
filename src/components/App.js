import React from 'react';
import { Typography } from './Typography/Typography';

class App extends React.Component {
  render() {
    return (
      <div>
        <p className="text">Hello world</p>
        <p className="text-jsx">Hello world</p>
        <Typography/>
        <style jsx>{`
          .text-jsx {
            color: blue;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
