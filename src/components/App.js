import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <p className="text">Hello world</p>
        <p className="text-jsx">Hello world</p>
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
