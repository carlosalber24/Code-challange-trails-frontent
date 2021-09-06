import { Container, Form, Row, Col } from 'react-bootstrap';

function SearchBoxes(props: any) {
  return (
    <Container>
      <Row className="mb-3">
        <Form.Group as={Col} md="" controlId="validationCustom05">
          <Form.Label>Search by difficulty</Form.Label>
          <Form.Select 
            onChange={(event) => { props.setDifficulty(event.currentTarget.value) }}  
            required
          >
            <option></option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please provide a valid difficulty rate.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom06">
          <Form.Label>Search by Length</Form.Label>
          <Form.Select 
            onChange={(event) => { props.setLength(event.currentTarget.value) }}  
            required
          >
            <option></option>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please provide a valid length rate.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom07">
          <Form.Label>Search by Rating</Form.Label>
          <Form.Select 
            onChange={(event) => { props.setRating(event.currentTarget.value) }}  
            required
          >
            <option></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please provide a valid rating number.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
    </Container>
  );
}

export default SearchBoxes;
