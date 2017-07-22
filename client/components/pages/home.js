import React from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

import TableBlock from './tableBlock';

class HomePage extends React.Component {
  render() {
    
    return (
      <div>
        <Grid>
          <Row >
            <Col>
              <Jumbotron>
                <TableBlock/>
              </Jumbotron>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default HomePage;
