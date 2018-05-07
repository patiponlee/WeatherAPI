import React from 'react';
import { Col ,Button ,Row ,ControlLabel ,FormControl } from 'react-bootstrap';

const Form = props =>(
  <form onSubmit={props.getWeather}>
    <Row>
      <Col componentClass={ControlLabel} xs={6} md={4} xsOffset={4}>
        City:
        <FormControl type="text" name="city" placeholder="city" />
      </Col>
    </Row>
    <Row>
      <Col componentClass={ControlLabel} xs={6} md={4} xsOffset={4}>
        Country:
        <FormControl type="text" name="country" placeholder="country" />
      </Col>
    </Row>
    <Row>
      <Col>
        <Button bsStyle="primary" type="submit">Get Weather</Button>
      </Col>
    </Row>
  </form>
);
export default Form
