import React from 'react';
import { PageHeader, Grid, Row, Col, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <PageHeader>
        <Grid>
          <Row >
            <Col md={6}>
              <Link to="/">Sophia</Link>
            </Col>

            <Col md={5} >
              <Nav bsStyle="pills" style={{ fontSize: '22px' }} pullRight={true}>
              </Nav>
            </Col>
          </Row>
          <h4>City of Seattle Wages:  Comparison by Gender - All Job Classifications</h3>
        </Grid>
      </PageHeader>
    );
  }
}

export default Header;
