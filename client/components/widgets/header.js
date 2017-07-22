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
              <Link to="/">City of Seattle Wages</Link>
            </Col>
            <Col md={5} >
              <Nav bsStyle="pills" style={{ fontSize: '22px' }} pullRight={true}>
              </Nav>
            </Col>
          </Row>
        </Grid>
      </PageHeader>
    );
  }
}

export default Header;
