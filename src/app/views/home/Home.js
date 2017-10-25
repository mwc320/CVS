// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import {Jumbotron}    from '../../components';
import cx             from 'classnames';
import { Link }       from 'react-router-dom';
import ReactDOM       from 'react-dom';
import AnimatedView   from '../../components/animatedView/AnimatedView';
import { 
  FormGroup, 
  FormControl, 
  ControlLabel,
  Grid, 
  Row, 
  Col,
  Button
}                     from 'react-bootstrap';

const form = {
        marginLeft: '0',
    };

const center = {
    margin: '0 auto',
};

class Home extends PureComponent {
  static propTypes= {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('You selected ' + this.state.value + ' as your state.');
    event.preventDefault();
  }

  render() {

    return (
        <Grid style={center}>
          <div>
            <div style={{textAlign: "center"}} >
              <div>
                <Row className="show-grid">
                  <Col xs={6} md={6}> 
                      <h2>
                        Contractor Verification System
                      </h2>
                  </Col>
                </Row>
              </div>
            </div>

            <div>
                <Row className="show-grid">
                  <Col xs={6} md={4}>
                    <form>
                    <ControlLabel>Enter your contractors first name</ControlLabel>
                      <FormGroup
                        controlId="formBasicText">
                              <FormControl style={{textAlign: 'center'}} 
                                  style={form}
                                  type="text"
                                  value={this.state.value}
                                  placeholder="Enter Contractor Name"
                                  onChange={this.handleChange}
                                  />
                              <FormControl.Feedback />
                      </FormGroup>
                      <FormGroup
                        controlId="formBasicText">
                          <ControlLabel>"Enter your contractor's last name"</ControlLabel>
                              <FormControl
                                  type="text"
                                  value={this.state.value}
                                  placeholder="Enter Contractor Name"
                                  onChange={this.handleChange}
                                  />
                              <FormControl.Feedback />
                      </FormGroup>
                      <FormGroup
                        controlId="formBasicText">
                          <ControlLabel>"Enter your contractor's License Number"</ControlLabel>
                              <FormControl
                                  type="text"
                                  value={this.state.value}
                                  placeholder="Enter Contractor Name"
                                  onChange={this.handleChange}
                                  />
                              <FormControl.Feedback />
                      </FormGroup>
                      <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select Your State</ControlLabel>
                          <FormControl componentClass="select" placeholder="select">
                            <option value="select">Alabama</option>
                            <option value="other">...</option>
                          </FormControl>
                      </FormGroup>
                      <Button className="btn-lrg btn btn-success" type="submit">
                        Submit
                      </Button>
                    </form>
                  </Col>
                </Row>
              </div>
            </div>
          </Grid>

    );
  }
}

export default Home;