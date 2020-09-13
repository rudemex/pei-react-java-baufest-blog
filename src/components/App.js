import React from 'react';
import Wrapper from '../containers/Wrapper';
import About from '../containers/About';

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <About/>
      </Wrapper>
    );
  }
}

export default App;
