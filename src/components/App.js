import React from 'react';
import Wrapper from '../containers/Wrapper';
import Home from '../containers/Home';
import About from '../containers/About';
import Blog from '../containers/Blog';
import Contact from '../containers/Contact';

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Home/>
        <About/>
        <Blog/>
        <Contact/>
      </Wrapper>
    );
  }
}

export default App;
