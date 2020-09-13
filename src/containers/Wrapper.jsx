import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from '../components/Menu/Menu';


class Wrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {children} = this.props;
    return(
      <div>
        <Menu/>
        <Container>
          <Row>
            <Col>
              {children}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Wrapper;