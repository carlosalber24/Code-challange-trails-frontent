import React, { useCallback } from 'react';
import {useHistory} from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

function CreateButton() {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/register'), [history]);

  return (
    <Container>
      <Row className="create-btn">
        <Col></Col>
        <Col></Col>
        <Col>
          <Button variant="primary" onClick={handleOnClick}>Create Trail</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateButton;
