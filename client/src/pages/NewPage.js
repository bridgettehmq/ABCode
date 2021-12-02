import React from "react";
import { useAuth } from "../util/auth";
import { Button, Form, Row, Col } from 'react-bootstrap';

export default function NewPage() {
  const { user } = useAuth();
  
  return (
    <div>
      <h1>Welcome!</h1>
      
      <hr />
      <p>This is where the content will go</p>
      <div className="container">
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Title
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="title" placeholder="Page Title" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            H1
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="h1" placeholder="Page Heading" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            P
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="h1" placeholder="Paragraph Text" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            P
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="h1" placeholder="Paragraph Text" />
          </Col>
        </Form.Group>
        <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Radios
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="first radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="second radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="third radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
        </fieldset>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>
      </Form>
      </div>
      <div className="container" style={{ backgroundColor: "red" }}>
        <p>THIS IS WHERE THE CODE BLOCK WILL GO</p>
      </div>
    </div>
  );
}
