import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Wrapper from '../containers/Wrapper';
import Home from '../containers/Home';
import About from '../containers/About';
import Blog from '../containers/Blog';
import Post from '../containers/Post';
import Contact from '../containers/Contact';
import NotFound from '../containers/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Wrapper>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/post/:id" component={Post} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
