import React, { useState } from 'react';
import { saveTrail } from './services';
import { useHistory } from 'react-router-dom';
import { Container, Alert, Form, Row, Col, Button } from 'react-bootstrap';

function Register() {
  const history = useHistory();
  const [validated, setValidated] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');
  const [difficulty, setDifficulty] = useState<string>('');
  const [length, setLength] = useState<string>('');
  const [rating, setRating] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleSubmit = async (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
  
    setValidated(true);
    const data = { 
      name,
      description,
      latitude,
      longitude,
      difficulty,
      lengthRate: length,
      rating
    }

    const response = await saveTrail(data);
    if (!response.status) {
      setError(response.data.error);
      setSuccess('');
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    }

    setSuccess(response.data.message);
    setTimeout(() => {
      setError('');
      setSuccess('');
      history.push('/app');
    }, 2000);
  };

  return (
    <Container>
      <div className={'header-text'}>
        <p className="back-link" onClick={() => { history.push('/app'); }}>
          Back
        </p>
        <h2>
          Trail Registration
        </h2>
      </div>
      {success ? 
          <Alert variant={'success'}>
            {success}
          </Alert>
        :
          null
      }

      {error ? 
          <Alert variant={'danger'}>
            {error}
          </Alert>
        :
          null
      }

      <Form noValidate validated={validated} onSubmit={handleSubmit} className="register-form">
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              onChange={(event) => { setName(event.target.value) }}
              type="text"
              placeholder="Name of the trail"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              onChange={(event) => { setDescription(event.target.value) }}
              type="text"
              placeholder="A short description of the trail"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Latitude</Form.Label>
            <Form.Control 
              type="text"
              onChange={(event) => { setLatitude(event.target.value) }} 
              placeholder="The latitude of where the trailhead is" 
              required 
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid latitude.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Longitude</Form.Label>
            <Form.Control 
              type="text" 
              onChange={(event) => { setLongitude(event.target.value) }} 
              placeholder="The longitude of where the trailhead is" 
              required 
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid longitude.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Difficulty Rate</Form.Label>
            <Form.Select 
              onChange={(event) => { setDifficulty(event.currentTarget.value) }}  
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
            <Form.Label>Length</Form.Label>
            <Form.Select 
              onChange={(event) => { setLength(event.currentTarget.value) }}  
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
            <Form.Label>Rating Number</Form.Label>
            <Form.Select 
              onChange={(event) => { setRating(event.currentTarget.value) }}  
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
        <Button type="submit" className={'btn-space'}>Submit</Button>
      </Form>
    </Container>
  );
}

export default Register;
