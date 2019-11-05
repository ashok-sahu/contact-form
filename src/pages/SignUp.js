import React from 'react'
import {useState} from 'react'
import {Form,Col,Button,Card,} from 'react-bootstrap'

export default function SignUp() {
  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const [validated, setValidated] = useState(false);

  return (
      <React.Fragment>
        <div className='container' style={{marginTop:'100px',}}>
          <Card border='success' bg='light'>
          <Card.Header className='text-center bg-success text-white '>Contact Us</Card.Header>
            <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="6"  controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address"  required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="number"  placeholder=" " required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid number.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="abc@123.com"  required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder=" "  required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Password.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Card.Footer className='text-center'>
      <Button type="submit">Submit form</Button>
      </Card.Footer>
    </Form>
    </Card.Body>
    </Card>
    </div>
      </React.Fragment>
    );
}

